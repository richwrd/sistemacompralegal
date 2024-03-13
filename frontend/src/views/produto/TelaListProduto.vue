<template>
    <div>
        <div class="card-list">
            <div v-for="produto in produtos" :key="produto._id" class="card-item">
                <h3>{{ produto.nome }}</h3>
                <img :src="produto.imagem" alt="Imagem do Produto"/>
                <p>{{ produto.descricao }}</p>
                <h3>R$ {{ produto.preco }}</h3>
                <span :class="produto.categoria">{{ produto.categoria }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'TelaProduto',
    data() {
        return {
            produtos: [],
        };
    },
    created() {
        this.fetchProdutos();
    },
    methods: {
        async fetchProdutos() {
            try {
                const response = await axios.get('http://localhost:3000/produto/list', {
                    params: { page: 1, limit: 10 } // Define a página como 1 e o limite como 10
                });
                this.produtos = response.data.produtos; // Ajusta para a resposta do servidor
            } catch (error) {
                console.error('Erro ao obter produtos:', error);
            }
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');

.card-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    max-width: 1250px;
    margin: 150px auto;
    padding: 20px;
    gap: 20px;
}

.card-list .card-item {
    background: #fff;
    padding: 26px;
    border-radius: 8px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.04);
    list-style: none;
    cursor: pointer;
    text-decoration: none;
    border: 2px solid transparent;
    transition: border 0.5s ease;
}

.card-list .card-item:hover {
    border: 2px solid #000;
}

.card-list .card-item img {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 8px;
    object-fit: contain;
}

.card-list span {
    display: inline-block;
    background: #f7dff5;
    margin-top: 32px;
    padding: 8px 15px;
    font-size: 0.75rem;
    border-radius: 50px;
    font-weight: 600;
}

.card-list .developer {
    background-color: #f7dff5;
    color: #b22485;
}

.card-list .designer {
    background-color: #d1e8ff;
    color: #2968a8;
}

.card-list .editor {
    background-color: #d6f8d6;
    color: #205c20;
}

.card-item h3 {
    color: #000;
    font-size: 1.438rem;
    margin-top: 28px;
    font-weight: 600;
}

@media (max-width: 1200px) {
    .card-list .card-item {
        padding: 15px;
    }
}

@media screen and (max-width: 980px) {
    .card-list {
        margin: 0 auto;
    }
}
</style>