import Product from '../models/Product.js';

export default class ProductController {
    static async getProducts(req, res) {
        try {
            const products = await Product.find().lean();

            products.forEach((product) => {
                if (!product.image) {
                    product.image = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png';
                }
            });

            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async createProduct(req, res) {
        try {
            res.render('products/create');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async createProductPost(req, res) {
        try {
            const { name, price, description, image } = req.body;

            const product = new Product({ name, price, description, image });

            if (!product.image) {
                product.image = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png';
            }

            await product.save();

            res.status(201).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async getProduct(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.findById(id).lean();
            if (!product) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }
            res.json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async updateProduct(req, res) {
        const { id } = req.params;
        const updateData = req.body;
        try {
            const product = await Product.findByIdAndUpdate(id, updateData, { new: true }).lean();
            if (!product) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }
            res.json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async deleteProduct(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.findByIdAndDelete(id).lean();
            if (!product) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }
            res.json({ message: 'Produto excluído com sucesso' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}
