import { object, string, boolean } from "yup";

const RecuperarSchema = object({
  username: string().trim().required("Nome de usuário é obrigatório."),
  password: string().trim().required("Senha é obrigatória."),
  confirmPassword: string().trim().required("Senha é obrigatória."),
  keepConnected: boolean(),
});

export default RecuperarSchema;
