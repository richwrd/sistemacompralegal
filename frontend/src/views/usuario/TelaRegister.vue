<!-- <template>
    <div class="container">
        <form class="form" @submit.prevent="registerUser">
            <p class="title">Registre-se </p>
            <p class="message">Faça seu cadastro e desfrute dos nossos produtos! </p>
            <div class="flex">
                <label>
                    <input class="input" type="text" v-model="nome" placeholder="" required>
                    <span>Primeiro Nome</span>
                </label>

                <label>
                    <input class="input" type="text" v-model="sobrenome" placeholder="" required>
                    <span>Segundo Nome</span>
                </label>
                <label>
                    <input class="input" type="number" v-model="idade" placeholder="" required>
                    <span>Idade</span>
                </label>
            </div>

            <label>
                <input class="input" type="email" v-model="email" placeholder="" required>
                <span>E-mail</span>
            </label>

            <label>
                <input class="input" type="password" v-model="senha" placeholder="" required>
                <span>Senha</span>
            </label>

            <label>
                <input class="input" type="password" v-model="confirmasenha" placeholder="" required>
                <span>Confirme sua senha</span>
            </label>
            <button class="submit">Enviar</button>
            <p class="signin">Já tem uma conta? <a href="/auth/login">Fazer login</a> </p>
        </form>
    </div>
</template> -->

<template>
    <div class="form-container">
        <div class="alert-card-container">
            <div v-if="usuarioCadastrado" class="alert-card" :class="{ 'show-alert': usuarioCadastrado }">
                <AlertSuccess />
            </div>
        </div>
        <p class="title">Criar conta</p>
        <p class="sub-title">Faça seu cadastro e desfrute dos nossos produtos!</p>
        <form class="form" @submit.prevent="registerUser">
            <input class="input" type="text" v-model="nome" placeholder="Nome" required>
            <input class="input" type="text" v-model="sobrenome" placeholder="Sobrenome" required>
            <input class="input" type="number" v-model="idade" placeholder="Idade" required>
            <input class="input" type="email" v-model="email" placeholder="E-mail" required>
            <input class="input" type="password" v-model="senha" placeholder="Senha" required>
            <input class="input" type="password" v-model="confirmasenha" placeholder="Confirmação de senha" required>
            <button class="form-btn">Cadastrar-se</button>
        </form>
        <p class="sign-up-label">
            Já tem uma conta? <span class="sign-up-link" @click="redirectToLogin">Entrar</span>
        </p>
        <div class="buttons-container">
            <div class="google-login-button">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px"
                    class="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                    </path>
                </svg>
                <span>Entrar com Google</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AlertSuccess from '@/components/AlertSuccess.vue';

export default {
    data() {
        return {
            usuarioCadastrado: false,
            nome: '',
            sobrenome: '',
            idade: '',
            email: '',
            senha: '',
            confirmasenha: ''
        }
    },
    components: {
        AlertSuccess
    },
    methods: {
        async registerUser() {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                const usuario = {
                    nome: this.nome,
                    sobrenome: this.sobrenome,
                    idade: this.idade,
                    email: this.email,
                    senha: this.senha,
                    confirmasenha: this.confirmasenha
                };
                await axios.post('http://localhost:3000/auth/register', usuario, config);
                //this.$router.push({ name: `Login` });
                this.usuarioCadastrado = true
                setTimeout(() => {
                    console.log("redirecionando")
                    this.redirectToLogin(); // Redireciona para a página de login após 3 segundos
                }, 3000);
            } catch (error) {
                console.error('Erro ao cadastrar usuário:', error);
                const usuario = {
                    nome: this.nome,
                    sobrenome: this.sobrenome,
                    idade: this.idade,
                    email: this.email,
                    senha: this.senha,
                    confirmasenha: this.confirmasenha
                };
                console.log('Usuário que apresenhou erro:', usuario);
                
            }
        },
        redirectToLogin() {
            this.$router.push({ name: `Login` });
        },

    }
}
</script>

<style scoped>
.form-container {
    margin-top: 50px;
    display: inline-block;
    width: 450px;
    height: 650px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px 30px;
}

.title {
    text-align: center;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin: 10px 0 30px 0;
    font-size: 28px;
    font-weight: 800;
}

.sub-title {
    margin: 0;
    margin-bottom: 10px;
    font-size: 13px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 15px;
}

.input {
    border-radius: 20px;
    border: 1px solid #c0c0c0;
    outline: 0 !important;
    box-sizing: border-box;
    padding: 12px 15px;
}

.form-btn {
    padding: 10px 15px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    border-radius: 20px;
    border: 0 !important;
    outline: 0 !important;
    background: black;
    color: white;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.form-btn:active {
    box-shadow: none;
}

.sign-up-label {
    margin: 0;
    font-size: 10px;
    color: #747474;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.sign-up-link {
    margin-left: 1px;
    font-size: 11px;
    text-decoration: underline;
    text-decoration-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    cursor: pointer;
    font-weight: 800;
}

.buttons-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 20px;
    gap: 15px;
}

.apple-login-button,
.google-login-button {
    border-radius: 20px;
    box-sizing: border-box;
    padding: 10px 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 11px;
    gap: 5px;
}

.apple-login-button {
    background-color: #000;
    color: #fff;
    border: 2px solid #000;
}

.google-login-button {
    border: 2px solid #747474;
}

.apple-icon,
.google-icon {
    font-size: 18px;
    margin-bottom: 1px;
}

.alert-card {
  display: inline-block;
  position: relative;
}

@keyframes slideIn {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(100);
  }
}

@keyframes slideOut {
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
}

.alert-card {
  display: inline;
  position: absolute;
  left: 77%;
  animation: slideIn 1s forwards;
  animation: fadeInOut 4s forwards;
  padding: 40px;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>

<!-- <style>

.container{
    margin-top: 50px;
    display: inline-block;
}

.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 12px;
    position: relative;
}

.title {
    font-size: 28px;
    color: royalblue;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
}

.title::before,
.title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
}

.title::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
}

.title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
}

.message,
.signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
}

.signin {
    text-align: center;
}

.signin a {
    color: royalblue;
}

.signin a:hover {
    text-decoration: underline royalblue;
}

.flex {
    display: flex;
    width: 100%;
    gap: 6px;
}

.form label {
    position: relative;
    margin: 10px;
    padding: 5px;
    text-align: justify;
}

.form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
}

.form label .input+span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
}

.form label .input:placeholder-shown+span {
    top: 15px;
    font-size: 0.9em;
}

.form label .input:focus+span,
.form label .input:valid+span {
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
}

.form label .input:valid+span {
    color: green;
}

.submit {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
}

.submit:hover {
    background-color: rgb(56, 90, 194);
    cursor: pointer;
}

@keyframes pulse {
    from {
        transform: scale(0.9);
        opacity: 1;
    }

    to {
        transform: scale(1.8);
        opacity: 0;
    }
}
</style> -->