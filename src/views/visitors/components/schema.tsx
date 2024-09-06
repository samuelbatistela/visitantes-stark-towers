import * as Yup from "yup";
import validateCPF from "@/utils/validateCPF";
import validateBirthDate from "@/utils/validateBirthDate";

const validationSchema = Yup.object({
  name: Yup.string().required("Nome é obrigatório"),
  cpf: Yup.string()
    .required("CPF é obrigatório")
    .matches(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "CPF deve estar no formato 000.000.000-00"
    )
    .test("validate-cpf", "CPF inválido", (value: string) =>
      validateCPF(value || "")
    ),
  room: Yup.string().required("Sala é obrigatória"),
  birthDate: Yup.string()
    .test(
      "validate-birth-date",
      "Data de nascimento deve estar no formato DD/MM/YYYY e ter 10 dígitos",
      (value?: string) => {
        if (!value) return true;

        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (value.length !== 10 || !regex.test(value)) {
          return false;
        }

        return validateBirthDate(value);
      }
    )
    .notRequired(),
});

export default validationSchema;
