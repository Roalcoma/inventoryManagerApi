import { pgconnection } from "../pgSQL.js";

export class productsControllers {
    static async getProducts(req, res) {
        const products = await pgconnection.products()
        if (products === -1) {
            res.status(500).json({
                success: false,
                message: 'Internal server error'
            })
        } else {
            res.status(200).json({
                success: true,
                data: products
            })
        }
    }
}