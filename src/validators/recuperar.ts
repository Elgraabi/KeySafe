import { object, string } from "yup";
import * as yup from "yup";

const RecuperarSchema = object({
  username: string().trim().required("Nome de usuário é obrigatório."),
  newPassword: string().trim().required("Nova senha é obrigatória."),
  confirmPassword: string()
    .trim()
    .oneOf([yup.ref("newPassword")], "As senhas não coincidem.")
    .required("A confirmação de senha é obrigatória."),
});

export default RecuperarSchema;
