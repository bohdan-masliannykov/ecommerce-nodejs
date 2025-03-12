import Product from '../models/product.js';

const getProductList = (req, res) => {
    res.send([{ id: 1 }]);
}

const getProductById = (req, res) => {
    const { productId } = req.params;
    res.send([{ id: productId }])
}

const createProduct = async (req, res) => {
    const { title, description, price } = req.body;
    const product = new Product({ title, description, price });


    product.save().then(() => {
        res.send('Created!');
    }).catch(console.log)

}

const editProduct = (req, res) => {
    console.log('Edit product');
    res.send('Updated!');
}

export default {
    getProductList,
    getProductById,
    createProduct,
    editProduct
}