/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ChangeEvent } from "react";
import Modal from "@/components/modal/Modal.component";
import { Formik, Form, Field, FormikHelpers, FormikProps } from "formik";
import SharedButton from "@/components/button/Button.component";
import validationSchema from "./schema";
import InputNew from "@/components/input/InputNew.component";
import maskCPF from "@/utils/maskCPF";
import maskBirthDate from "@/utils/maskBirthDate";
import styled from "styled-components";

const Container = styled.div``;

const Button = styled(SharedButton).attrs(() => ({ block: true }))`
  font-size: 14px;
  height: 36px;
`;

const WrapperButton = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

interface FormValues {
  name: string;
  room: string;
  cpf: string;
  birthDate: string;
}

type ModalFormComponentProps = {
  isLoading: boolean;
  onSubmit: (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => void;
  onCancel: () => void;
};

const ModalFormComponent: FC<ModalFormComponentProps> = ({
  isLoading,
  onSubmit,
  onCancel,
}) => {
  const submitForm = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    onSubmit(values, formikHelpers);
  };

  const initialValues: FormValues = {
    name: "",
    cpf: "",
    room: "",
    birthDate: "",
  };

  return (
    <>
      <Modal
        title="Novo visitante"
        message={`Favor informar os dados do visitante`}
      >
        <Container>
          <Formik<FormValues>
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitForm}
          >
            {({ errors, touched }: FormikProps<FormValues>) => (
              <Form noValidate>
                <Field name="name">
                  {({ field }: any) => (
                    <InputNew
                      {...field}
                      label="Digite o nome"
                      errorText={touched.name && errors.name ? errors.name : ""}
                      error={touched.name && Boolean(errors.name)}
                      type="text"
                      autoComplete="off"
                    />
                  )}
                </Field>

                <Field name="cpf">
                  {({ field, form }: any) => (
                    <InputNew
                      {...field}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const formattedValue = maskCPF(e.target.value);
                        form.setFieldValue(field.name, formattedValue);
                      }}
                      label="Digite o CPF"
                      errorText={touched.cpf && errors.cpf ? errors.cpf : ""}
                      error={touched.cpf && Boolean(errors.cpf)}
                      type="text"
                      autoComplete="off"
                      maxLength={14}
                      placeholder="000.000.000-00"
                    />
                  )}
                </Field>

                <Field name="room">
                  {({ field, form }: any) => (
                    <InputNew
                      {...field}
                      label="Digite a sala"
                      errorText={touched.room && errors.room ? errors.room : ""}
                      error={touched.room && Boolean(errors.room)}
                      type="text"
                      autoComplete="off"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const value = e.target.value.toUpperCase();
                        form.setFieldValue(field.name, value);
                      }}
                    />
                  )}
                </Field>

                <Field name="birthDate">
                  {({ field, form }: any) => (
                    <InputNew
                      {...field}
                      label="Digite a data de nascimento"
                      errorText={
                        touched.birthDate && errors.birthDate
                          ? errors.birthDate
                          : ""
                      }
                      error={touched.birthDate && Boolean(errors.birthDate)}
                      type="text"
                      autoComplete="off"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const formattedValue = maskBirthDate(e.target.value);
                        form.setFieldValue(field.name, formattedValue);
                      }}
                    />
                  )}
                </Field>
                <WrapperButton>
                  <Button type="button" onClick={onCancel}>
                    CANCELAR
                  </Button>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    isLoading={isLoading}
                  >
                    SALVAR
                  </Button>
                </WrapperButton>
              </Form>
            )}
          </Formik>
        </Container>
      </Modal>
    </>
  );
};

export default ModalFormComponent;
