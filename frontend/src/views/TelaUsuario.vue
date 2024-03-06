<template>
    <div>
        <!-- <ul>
            <li v-for="usuarioLoop in TelaUsuarios" :key="usuarioLoop._id">{{ usuarioLoop.nome }} {{ usuarioLoop.sobrenome }}</li>
        </ul> -->
        <button @click="criarUsuario">Criar Novo Usuário Teste</button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
    data() {
        return {
            TelaUsuarios: []
        }
    },
    // mounted() {
    //     this.carregarUsuarios();
    // },
    methods: {
        // async carregarUsuarios() {
        //     try {
        //         const response = await axios.get('http://localhost:3000/usuario/usuarios');
        //         this.usuarios = response.data;
        //     } catch (error) {
        //         console.error('Erro ao carregar usuários:', error);
        //     }
        // },
        async criarUsuario() {
            try {
                const novoUsuario = {
                    nome: 'Criado Pelo Vue',
                    sobrenome: 'Teste',
                    idade: 30,
                    imagem: 'url-da-imagem.png'
                };
                const response = await axios.post('http://localhost:3000/usuario/create', novoUsuario);
                console.log('Novo usuário criado:', response.data);
                this.carregarUsuarios(); // Recarrega a lista de usuários após criar um novo
            } catch (error) {
                console.error('Erro ao criar usuário:', error);
            }
        },
        // Outros métodos para editar, deletar, etc...
    }
    }
</script>