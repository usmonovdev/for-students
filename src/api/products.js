import axios from "./index"

const ProductsService = {
    async getProducts() {
        const response = await axios.get("/products")
        return response
    }
}

export default ProductsService