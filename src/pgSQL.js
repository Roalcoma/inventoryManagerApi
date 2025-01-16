import { pool } from "./config/db.js";

export class pgconnection {
    static async products() {
        try {
            const query = `SELECT * FROM inventory`

            const result = await pool.query(query)
            return result.rows
        } catch (error) {
            console.log(error)
            return -1
        }
    }
}