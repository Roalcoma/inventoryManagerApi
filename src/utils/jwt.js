import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { JWT_SECRET, JWT_EXPIRATION } = process.env;

// Generar un token
export const generateToken = (payload) => {
  //return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
  return jwt.sign(payload, JWT_SECRET);
};

// Verificar un token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null; // Retorna null si el token es inválido
  }
};
