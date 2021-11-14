import { env } from "../env";
import bcrypt from "bcrypt";
import User from "../models/User";
import { RegisterSchema, LoginSchema } from "../schemas/authSchemas";
const jwt = require('jsonwebtoken')

export const register = async (req, res, next) => {

  try {
    var { name, email, password, cpf } = await RegisterSchema.validateAsync(
      req.body
    );
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

  // Verificar se usuário é existente
  const userExist = await User.exists({ email });

  if (userExist) {
    return res.status(422).json({ message: "Usuario existente!" });
  }

  // Segurança para a senha
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const celo = new User({
    name,
    email,
    password: passwordHash,
    cpf,
  });

  await User.create(celo);

  res.status(201).json({ message: "Cadastrado com sucesso" });
};

export const login = async (req, res) => {

  try {
    await LoginSchema.validateAsync(req.body);
  } catch (error) {
    res.status(400).json({ message: error.message })
  }

  const { email, password } = req.body;

  // Check de usuario
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ message: "Usuario nao encontrado!" });
  }

  // Verificando se a senha é válida

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(422).json({ message: "Senha invalida" });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    env.JWT_SECRET
  );

  res.status(200).json({ message: "Login efetuado com sucesso!", token });
};
