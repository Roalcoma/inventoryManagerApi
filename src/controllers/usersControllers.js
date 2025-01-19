import { generateToken } from '../utils/jwt.js';
import bcrypt from 'bcryptjs';
import { pgconnectionUsers } from '../pgSQL.js';


export class usersControllers{
    static async loginUser(req, res) {
        const { email, password } = req.body;

        // Verifica las credenciales del usuario
        const user = await pgconnectionUsers.loginUser(email, password) // Ajusta esto según tu ORM o DB

        console.log('Vista: ', password, user[0].password)

        if (!user || !(await bcrypt.compare(password, user[0].password))) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Generar token
        const token = generateToken({ id: user.id, email: user.email });
        res.status(200).json({ token });
    }
}
