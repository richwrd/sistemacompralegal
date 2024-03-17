<template>

    <div>
        <ul class="nav-links">
            <a href="/" style="width: 10%; height: 10%;">
                <img src="../assets/logo.png" style="width: 100%; height: 100%;">
            </a>

            <div style="display:flex; justify-content: flex-end; align-items: center;">
                <li class="upward"><a href="/produtos">Produto</a></li>
                <li class="forward"><a href="/sobre">Sobre</a></li>
                <li class="forward"><a href="/admin">Administração</a></li>


                <AuthComponent v-slot="{ authenticated }">

                    <button v-if="!authenticated" class="animated-button" onclick="window.location.href='/auth/login'">
                        <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                            </path>
                        </svg>
                        <span class="text">ENTRAR</span>
                        <span class="circle"></span>
                        <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                            </path>
                        </svg>
                    </button>
                </AuthComponent>

                <li class="upward" v-if="authenticated"><a href="#" @click="logout">Logout</a></li>


            </div>
        </ul>
    </div>

</template>

<script>
export default {
    name: 'NavBar',
    components: {
        AuthComponent: () => import('./AuthComponent.vue')
    },
    props: {
        msg: String
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
</style>