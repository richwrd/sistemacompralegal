import Produto from '../models/ProdutoModel.js';

export default class ProdutoController {
    static async getProdutoList(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;

            const produtos = await Produto.find()
                .lean()
                .sort({ nome: 1 })
                .skip((page - 1) * limit)
                .limit(limit);

            const total = await Produto.countDocuments();

            // console.log(produtos, total, page, Math.ceil(total / limit));

            return res.status(200).json({
                produtos,
                total,
                page,
                pages: Math.ceil(total / limit),
            });
            
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

    static async createProdutoPost(req, res) {
        try {
            const { nome, preco, descricao, imagem, tipo, categoria, quantidade } = req.body;

            const produto = new Produto({ nome, preco, descricao, imagem, tipo, categoria, quantidade });

            if (!produto.imagem) {
                produto.imagem = "https://static3.tcdn.com.br/img/img_prod/468236/produto_teste_7145_1_f816ad73890b2db46e6e460c44ae5d22.png";
            }

            await produto.save();

            return res.status(201).json(produto);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }


    static async updateProdutoPut(req, res) {
        const { id } = req.params;
        const updateData = req.body;
        try {
            const produto = await Produto.findByIdAndUpdate(id, updateData, { new: true }).lean();
            if (!produto) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }
            return res.status(200).json(produto); // Retornar o código de status 200 e o produto atualizado
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
            return res.status(200).json({ message: 'Produto excluído com sucesso' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}
