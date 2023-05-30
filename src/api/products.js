import axios from "./index"

const ProductsService = {
    async getProducts() {
        const response = await axios.get("/products")
        return response
    },
    async getProductById(id) {
        const response = await axios.get(`/products/${id}`)
        return response
    }
}

export default ProductsService