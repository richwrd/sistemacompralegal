import CarrinhoCompra from '../models/CarrinhoCompraModel.js';

export default class CarrinhoCompraController {

    static async createCarrinhoCompra(req, res) {
        try {
            const { userId, produtos, total } = req.body; // Supondo que você tenha o ID do usuário no corpo da requisição
            const carrinho = new CarrinhoCompra({ userId, produtos, total});
            await carrinho.save();
            res.status(201).json(carrinho);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async getCarrinhoCompra(req, res) {
        const { id } = req.params;
        try {
            const carrinho = await CarrinhoCompra.findById(id).lean();
            if (!carrinho) {
                return res.status(404).json({ error: 'Carrinho não encontrado' });
            }
            res.json(carrinho);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async updateCarrinhoCompra(req, res) {
        const { id } = req.params;
        const updateData = req.body;
        try {
            const carrinho = await CarrinhoCompra.findByIdAndUpdate(id, updateData, { new: true }).lean();
            if (!carrinho) {
                return res.status(404).json({ error: 'Carrinho não encontrado' });
            }
            res.json(carrinho);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async deleteCarrinhoCompra(req, res) {
        const { id } = req.params;
        try {
            const carrinho = await CarrinhoCompra.findByIdAndDelete(id).lean();
            if (!carrinho) {
                return res.status(404).json({ error: 'Carrinho não encontrado' });
            }
            res.json({ message: 'Carrinho excluído com sucesso' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}
