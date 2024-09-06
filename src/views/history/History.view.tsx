import { FC } from "react";
import styled from "styled-components";
import Layout from "@/components/layout/Layout.component";
import Flexbox from "@/shared-styles/Flexbox.css";
import { Title as SharedTitle } from "@/components/typography/Typography.component";
import useVisitors from "@/io/redux/visitors/useVisitors.hook";
import Grid from "@/components/grid/Grid.component";

const Wrapper = styled.div`
  width: 100%;

  ${Flexbox}
  flex-direction: column;
  justify-content: center;
`;

const Title = styled(SharedTitle)`
  text-align: center;
  margin: 16px 0px;
  text-align: left;
`;

const HistoryView: FC = () => {
  const { history } = useVisitors();

  const headers = [
    "#",
    "ID da Visita",
    "Nome",
    "CPF",
    "Sala",
    "Data de nascimento",
    "Horário entrada",
    "Horário saída",
  ];

  return (
    <Layout menuActive={true}>
      <Wrapper>
        <Title>Histórico de visitas</Title>
        <Grid history={true} headers={headers} data={history} />
      </Wrapper>
    </Layout>
  );
};

export default HistoryView;
