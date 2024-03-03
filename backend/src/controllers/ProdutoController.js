import Produto from '../models/ProdutoModel.js';

export default class ProdutoController {
    static async getProdutos(req, res) {
        try {
            const produtos = await Produto.find().lean();

            produtos.forEach((produto) => {
                if (!produto.imagem) {
                    produto.imagem = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png';
                }
            });

            res.json(produtos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async createProduto(req, res) {
        try {
            const { nome, preco, descricao, imagem, categoria, quantidade } = req.body;

            const produto = new Produto({ nome, preco, descricao, imagem, categoria, quantidade });

            if (!produto.imagem) {
                produto.imagem = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png';
            }

            await produto.save();

            res.status(201).json(produto);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async getProduto(req, res) {
        const { id } = req.params;
        try {
            const produto = await Produto.findById(id).lean();
            if (!produto) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }
            res.json(produto);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async updateProduto(req, res) {
        const { id } = req.params;
        const updateData = req.body;
        try {
            const produto = await Produto.findByIdAndUpdate(id, updateData, { new: true }).lean();
            if (!produto) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }
            res.json(produto);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async deleteProduto(req, res) {
        const { id } = req.params;
        try {
            const produto = await Produto.findByIdAndDelete(id).lean();
            if (!produto) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }
            res.json({ message: 'Produto excluído com sucesso' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}
