import { env } from "../env";
import bcrypt from "bcrypt";
import User from "../models/User";
import { RegisterSchema, LoginSchema } from "../schemas/authSchemas";
const jwt = require('jsonwebtoken')

export const getSaldo = (req, res, next) => {
  res.status(200).json({ message: "OK" });
};

