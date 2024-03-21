
<template>
    <div v-for="categoria in categorias" :key="categoria.id">
        <div class="card" @click="editarProduto(categoria.produtos[0]._id)">
            <div style="width: 60%;">
                <img :src= "categoria.produtos[0].imagem" style="width:80%; height: 400px;"/>
            </div>
            <div style="width: 40%;">
                <div style="height: 70%; display: flex; align-items: center; justify-content: center">
                    <h1>{{ categoria.produtos[0].nome }}</h1>
                </div>
                <div style="height: 30%; display: flex; align-items: center; justify-content: center">
                    <h2 :class="categoria.produtos[0].preco" style="font-size: 1.90em;">R$ {{ categoria.produtos[0].preco }}</h2>

                </div>
            </div>
        </div>

        <h1>{{ categoria.categoria }}</h1>
        <carousel :breakpoints="breakpoints">
            <slide v-for="produto in categoria.produtos" :key="produto._id" style="width: 30%;">
                <div class="carousel__item" @click="editarProduto(produto._id)">
                    <div class="carousel__img">
                        <img :src="produto.imagem" alt="Imagem do Produto"/>
                    </div>
                    <div style="width: 50%;">
                        <div style="height: 47%;">
                            <h3>{{ produto.nome }}</h3>
                        </div>
                        <div style="height: 47%;">
                            <h2 :class="produto.preco" style="font-size: 1rem;">R$ {{ produto.preco }}</h2>
                            <span :class="produto.categoria">{{ produto.categoria }}</span>
                        </div>
                    </div>
                </div>
            </slide>
            <template #addons>
                <navigation />
            </template>
        </carousel>
    </div>
</template>

<script>
import axios from 'axios';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
    name: 'telaHome',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            categorias: [],
        };
    },
    created() {
        this.fetchProdutos();
    },
    methods: {
        async fetchProdutos() {
            try {

                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    timeout: 5000 // Tempo limite em milissegundos (por exemplo, 5 segundos)
                };

                const response = await axios.get('http://localhost:3000/produto/list', null, config);


                let categorias = response.data.produtos.map((item) => item.categoria);
                categorias = categorias.filter((value, index) => categorias.indexOf(value) === index);
                
                let length = 10;
                if(categorias.length < 10) 
                length = categorias.length;

                for(let i = 0; i < length; i++){
                    this.categorias.push({  
                        id: i,
                        categoria: categorias[i],
                        produtos: response.data.produtos.filter(item => {
                            return item.categoria === categorias[i];
                        })
                    });
                }
                console.log(this.categorias)
            } catch (error) {
                console.error('Erro ao obter produtos (List):', error);
            }
        },

        editarProduto(idProduto) {
            try {
                this.$router.push({ name: 'telaAtualizaProduto', params: { id: idProduto } });
                console.log('ID do produto enviado:', idProduto);
                // console.log(this.produto);
            } catch (error) {
                console.error('Erro ao editar o produto:', error);
            }
        },
    },
};
</script>

<style>

.card {
    width: 80%; 
    height: 400px; 
    margin-top: 100px; 
    border-radius: 10px; 
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    background-color: white;
    display: inline-flex;
    padding: 30px;
}

.card:hover {
    border: 2px solid #000;
}


.carousel__item {
    min-height: 200px;
    max-height: 200px;
    width: 100%;
    color:black;
    background-color: white;
    font-size: 1.10rem;
    display: flex;
    border-radius: 8px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
    list-style: none;
    cursor: pointer;
    text-decoration: none;
    border: 2px solid transparent;
    transition: border 0.5s ease;
    padding: 30px;

}

.carousel__item:hover {
    border: 2px solid #000;
}

.modal-container-body {
    padding: 24px 32px 51px;
    overflow-y: auto;
}

span {
    background: #f7dff5;
    margin-top: 32px;
    padding: 8px 15px;
    font-size: 0.75rem;
    border-radius: 50px;
    font-weight: 600;
}

.carousel__img {
    width: 50%; 
    background-color: white; 
    border-radius: 8px;
    display: flex;
}

.carousel__slide {
    padding: 10px;
}

img {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 8px;
    object-fit: contain;
}

.carousel__prev, 
.carousel__next {
    box-sizing: content-box;
    border: 5px solid black;
    border-radius: 999px;
    background-color: white;
}
</style>