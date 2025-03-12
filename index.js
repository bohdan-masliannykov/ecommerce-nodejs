import express from 'express';
import productRoutes from './routes/products.routes.js';
import notFoundRoutes from './routes/404.routes.js';
import mongoose from 'mongoose';

const PORT = 3000;

const app = express();

app.use(express.json()); //allows node.js parse buffer input as json

app.use('/products', productRoutes);
app.use(notFoundRoutes);

mongoose.connect("mongodb://192.168.16.1:27017/ecommerce")
    .then(() => {
        app.listen(3000, () => {
            console.log(`App is listening port ${PORT}!`);
        })
    }).catch(console.log)

