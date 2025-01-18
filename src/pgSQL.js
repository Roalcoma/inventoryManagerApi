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

    static async creteProduct(name, description, quantity, price) {
        try {
            const query = `INSERT INTO public.inventory(
                                product_name, description, quantity, price, created_at, updated_at)
                                VALUES (?, ?, ?, ?);`

            const values = [name, description, quantity, price]

            const result = await pool.query(query, [name, description, price])
            return 1
        } catch (error) {
            console.log(error)
            return -1
        }
    }
}