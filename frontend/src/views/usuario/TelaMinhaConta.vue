<template>
    <div id="app">
        <div class="container">
            <h1>Minha Conta</h1>
            <div class="form">
                <div>
                    <label for="username">Nome de Usuário:</label>
                    <input type="text" id="username" v-model="username">
                </div>
                <div>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" v-model="email">
                </div>
                <div>
                    <label for="password">Nova Senha:</label>
                    <input type="password" id="password" v-model="password">
                </div>
                <div>
                    <label for="profile-picture">Foto do Perfil:</label>
                    <input type="file" id="profile-picture" @change="updateProfilePicture">
                    <img v-if="profilePicture" :src="profilePicture" alt="Profile Picture">
                </div>
                <button @click="updateAccount">Atualizar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TelaMinhaConta',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            profilePicture: ''
        };
    },
    methods: {
        updateProfilePicture(event) {
            const file = event.target.files[0];
            this.profilePicture = URL.createObjectURL(file);
        },
        updateAccount() {
            // Aqui você pode enviar os dados do usuário para o servidor para atualização
            console.log('Nome de Usuário:', this.username);
            console.log('E-mail:', this.email);
            console.log('Nova Senha:', this.password);
        }
    }
};
</script>

<style scoped>
/* Estilos combinados */
body {
    font-family: Arial, sans-serif;
    background-color: #25a4d2;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#app {
    background-color: #c32929;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(140, 22, 160, 0.1);
}

.form {
    max-width: 400px;
}

.form div {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="file"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

img {
    max-width: 100px;
    margin-top: 10px;
}
</style>