/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react";
import Layout from "@/components/layout/Layout.component";
import Flexbox from "@/shared-styles/Flexbox.css";
import { Title as SharedTitle } from "@/components/typography/Typography.component";
import SharedButton from "@/components/button/Button.component";
import ModalFormComponent from "./components/ModalForm.component";
import useVisitors from "@/io/redux/visitors/useVisitors.hook";
import { FormikHelpers } from "formik";
import Grid from "@/components/grid/Grid.component";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  ${Flexbox}
  flex-direction: column;
`;

const Title = styled(SharedTitle)`
  text-align: center;
  margin: 0;
  text-align: left;
`;

const Button = styled(SharedButton)`
  margin: 16px 0;
  width: 140px;
  font-size: 14px;
`;

interface FormValues {
  name: string;
  cpf: string;
  room: string;
  birthDate: string;
}

const VisitorsView: FC = () => {
  const [modalForm, setModalForm] = useState(false);
  const { isLoading, visitors, setVisitorAdd, setVisitorCheckout } =
    useVisitors();

  const handleSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    if (await setVisitorAdd(values)) {
      setModalForm(false);
    } else {
      formikHelpers.setErrors({
        room: "Atingiu o limite de visitas para essa sala.",
      });
    }
  };

  const handleCheckout = async (item: any) => {
    setVisitorCheckout(item);
  };

  const headers = [
    "#",
    "ID da Visita",
    "Nome",
    "CPF",
    "Sala",
    "Data de nascimento",
    "Horário entrada",
    "Ações",
  ];

  return (
    <Layout menuActive={true}>
      <Wrapper>
        <Title>Visitas ativas</Title>
        <Button
          type="button"
          disabled={false}
          isLoading={false}
          onClick={() => setModalForm(true)}
        >
          Incluir visita
        </Button>

        <Grid onCheckout={handleCheckout} headers={headers} data={visitors} />
      </Wrapper>

      {modalForm && (
        <ModalFormComponent
          isLoading={isLoading}
          onSubmit={handleSubmit}
          onCancel={() => setModalForm(false)}
        ></ModalFormComponent>
      )}
    </Layout>
  );
};

export default VisitorsView;
