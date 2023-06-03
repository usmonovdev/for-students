import axios from "./index"

const ProductsService = {
    async getProducts() {
        const response = await axios.get("/products")
        return response
    },
    async getProductById(id) {
        const response = await axios.get(`/products/${id}`)
        return response
    },
    async addNewProduct(product) {
        const response = await axios.post(`/products`, {product})
        return response
    }
}

export default ProductsService