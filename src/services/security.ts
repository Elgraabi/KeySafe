import bcrypt from "react-native-bcrypt";

// Função para gerar o hash da senha
export const hashPassword = async (password: string): Promise<string> => {
  const salt = bcrypt.genSaltSync(10); // Gera o salt de forma síncrona
  const hashedPassword = bcrypt.hashSync(password, salt); // Gera o hash
  return hashedPassword;
};

// Função para validar se a senha corresponde ao hash
export const validatePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcrypt.compareSync(password, hashedPassword); // Compara as senhas
};
