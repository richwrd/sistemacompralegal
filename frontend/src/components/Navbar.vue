<template>

    <div>
        <ul class="nav-links">
            <a href="/" style="width: 10%; height: 10%;">
                <img src="../assets/logo.png" style="width: 100%; height: 100%;">
            </a>

            <div style="display:flex; justify-content: flex-end; align-items: center;">
                <li class="upward"><a href="/produtos">Produtos</a></li>
                <li class="forward"><a href="/sobre">Sobre</a></li>
                <li class="forward"><a href="/usuario/TelaMinhaConta">Conta</a></li>


                    <template v-if="!authenticated">
                        <button class="animated-button" @click="redirectToLogin">
                            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                            </path>
                        </svg>
                        <span class="text">Entrar</span>
                        <span class="circle"></span>
                            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                                </path>
                            </svg>
                        </button>
                    </template>

                    <template v-else>

                        <button class="Btn" @click="logout">

                            <div class="sign"><svg viewBox="0 0 512 512">
                                    <path
                                        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z">
                                    </path>
                                </svg></div>

                            <div class="text">Sair</div>
                        </button>

                    </template>
            </div>


        </ul>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'NavBar',
    props: {
        msg: String
    },
    methods: {
        redirectToLogin() {
            window.location.href = '/auth/login';
        },
        logout() {
            // Limpar dados de autenticação
            localStorage.removeItem('acessToken'); // Remover token do local storage, por exemplo

            console.log('Deslogado com sucesso!')

            // Redirecionar para a tela de login ou para a página inicial
            this.$router.push('/auth/login'); // Assumindo que você está usando Vue Router
        },
        async verificarToken() {
            // const AuthorizationStorage = localStorage.getItem('Authorization');
            const authorizationStorage = localStorage.getItem('acessToken');

            const config = {
                headers: {
                    'authorization': `Bearer ${authorizationStorage}`
                },
                timeout: 5000 // Tempo limite em milissegundos (por exemplo, 5 segundos)
            };

            if (authorizationStorage) {
                try {
                    const response = await axios.post('http://localhost:3000/auth/verify', null, config);
                    if (response.status === 200) {
                        this.authenticated = true;

                        console.log('Token verificado com sucesso:', response.data);
                    }
                } catch (error) {
                    console.error('Falha ao verificar o token:', error);
                }
            }
        },
    }
    
}
</script>

<style scoped>
/* Google Fonts Import Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #c1f7f5;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}


.nav-links {
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 20px 15px;
    border-radius: 12px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.nav-links li {
    list-style: none;
    margin: 0 12px;
}

.nav-links li a {
    position: relative;
    color: #333;
    font-size: 20px;
    font-weight: 500;
    padding: 6px 0;
    text-decoration: none;
}

.nav-links li a:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 0%;
    background: #34efdf;
    border-radius: 12px;
    transition: all 0.4s ease;
}

.nav-links li a:hover:before {
    width: 100%;
}

.nav-links li.center a:before {
    left: 50%;
    transform: translateX(-50%);
}

.nav-links li.upward a:before {
    width: 100%;
    bottom: -5px;
    opacity: 0;
}

.nav-links li.upward a:hover:before {
    bottom: 0px;
    opacity: 1;
}

.nav-links li.forward a:before {
    width: 100%;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease;
}

.nav-links li.forward a:hover:before {
    transform: scaleX(1);
    transform-origin: left;
}

.animated-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 14px 36px;
    border: 3px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;
    color: #92aa09;
    box-shadow: 0 0 0 2px rgb(5, 131, 16);
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button svg {
    position: absolute;
    width: 24px;
    fill: rgb(248, 132, 0);
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .arr-1 {
    right: 16px;
}

.animated-button .arr-2 {
    left: -25%;
}

.animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: rgb(5, 131, 16);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .text {
    position: relative;
    z-index: 1;
    opacity: 100;
    color:  rgb(5, 131, 16);
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: greenyellow;
    border-radius: 12px;
}

.animated-button:hover .arr-1 {
    right: -25%;
}

.animated-button:hover .arr-2 {
    left: 16px;
}

.animated-button:hover .text {
    transform: translateX(12px);
}

.animated-button:hover svg {
    fill: greenyellow;
}

.animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px greenyellow;
}

.animated-button:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
}

.Btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: .3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
    background-color: rgb(255, 65, 65);
}

/* plus sign */
.sign {
    width: 100%;
    transition-duration: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sign svg {
    width: 17px;
}

.sign svg path {
    fill: white;
}

/* text */
.text {
    position: absolute;
    right: 0%;
    width: 0%;
    opacity: 0;
    color: rgb(210, 3, 3);
    font-size: 1.2em;
    font-weight: 600;
    transition-duration: .3s;
}

/* hover effect on button width */
.Btn:hover {
    width: 125px;
    border-radius: 40px;
    transition-duration: .3s;
}

.Btn:hover .sign {
    width: 30%;
    transition-duration: .3s;
    padding-left: 20px;
}

/* hover effect button's text */
.Btn:hover .text {
    opacity: 1;
    width: 70%;
    transition-duration: .3s;
    padding-right: 10px;
}

/* button click effect*/
.Btn:active {
    transform: translate(2px, 2px);
}
</style>