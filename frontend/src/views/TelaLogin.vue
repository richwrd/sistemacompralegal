<template>
    <div class="login-box">

        <form  @submit.prevent="authLoginFront">
            <div class="user-box">
                <input type="text"  v-model="email" required>
                <label>E-mail</label>
            </div>
            <div class="user-box">
                <input type="password" v-model="senha" required>
                <label>Senha</label>
            </div>
            <div>
                <button type="submit" class="login-button">
                    ENTRAR
                    <span></span>
                </button>
            </div>
        </form>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    data () {
        return {
            email: '',
            senha: '',
        }
    },
    methods: {
        async authLoginFront() {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                const usuario = {
                    email: this.email,
                    senha: this.senha,
                };
                const response = await axios.post('http://localhost:3000/auth/login', usuario, config);

                localStorage.setItem("usuario", JSON.stringify(response.data));

                console.log('Usuário conectado:', response.data);

                // Redirecionar para a página inicial após o login bem-sucedido
                this.$router.push('/');
            } catch (error) {
                console.error('Erro ao criar usuário:', error);
            }
        },
    }
}

</script>


<style>
.login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(255, 106, 0, 0.987);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(255, 253, 253, 0.987);
    border-radius: 10px;
}

.login-box .user-box {
    position: relative;
}

.login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #000000;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #000000;
    outline: none;
    background: transparent;
}

.login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #000000;
    pointer-events: none;
    transition: .5s;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
    top: -20px;
    left: 0;
    color: #000000;
    font-size: 12px;
}

.login-box form button {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #000000;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px
}

.login-box button:hover {
    background: #03f40f;
    color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03f40f,
        0 0 25px #03f40f,
        0 0 50px #03f40f,
        0 0 100px #03f40f;
}

.login-box button span {
    position: absolute;
    display: block;
}

@keyframes btn-anim1 {
    0% {
        left: -100%;
    }

    50%,
    100% {
        left: 100%;
    }
}

.login-box button span:nth-child(1) {
    bottom: 2px;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03f40f);
    animation: btn-anim1 2s linear infinite;
}

</style>