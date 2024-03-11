<template>
    <div id="app">
        <form autocomplete="off" v-if="action == 'login'" method="post" @submit="login">
            <h3>{{ lang.do_login }} | <button type="button" @click="setLang('pt-br')">PT-BR</button> <button
                    type="button" @click="setLang('en-us')">EN-US</button></h3>
            <div class="fields">
                <div class="field">
                    <label>{{ lang.email }}</label>
                    <input type="email" name="email" v-model="email" />
                </div>
                <div class="field">
                    <label>{{ lang.password }}</label>
                    <input type="password" name="password" v-model="password" />
                </div>
                <div class="form-footer">
                    <a href="#" @click="action = 'reset'" class="reset" v-html="lang.reset_link"></a>
                    <button type="button">{{ lang.login }}</button>
                </div>
            </div>
        </form>
        <form autocomplete="off" v-if="action == 'reset'" method="post" @submit="reset_password">
            <h3>{{ lang.forget_pass }} | <button type="button" @click="setLang('pt-br')">PT-BR</button> <button
                    type="button" @click="setLang('en-us')">EN-US</button></h3>
            <div class="fields">
                <div class="field">
                    <label>{{ lang.email }}</label>
                    <input type="email" name="email" v-model="email" />
                </div>
                <div class="form-footer">
                    <a href="#" @click="action = 'login'" class="do-login" v-html="lang.do_login_link"></a>
                    <button type="button">{{ lang.reset }}</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: 'TelaLogin',
            action: 'login',
            email: '',
            password: '',
            language: 'pt-br',
            lang: {}
        }
    },
    mounted() {
        if (sessionStorage.action) {
            this.action = sessionStorage.action
        }
        if (sessionStorage.wplogin_language) {
            this.language = sessionStorage.wplogin_language
        }

        this.load_lang(this.language)

    },
    methods: {
        setLang(code) {
            this.language = code
        },
        login() {
        },
        reset_password() {

        },
        load_lang(code) {
            axios.get(`lang.${code}.json`).then(res => {
                console.log(res)
                this.lang = res.data
            })
        }
    },
    watch: {
        language() {
            sessionStorage.wplogin_language = this.language
            this.load_lang(this.language)
        },
        action() {
            sessionStorage.action = this.action
        }
    }
};
</script>


<style>
body {
    font-family: Verdana, Arial, 'sans-serif';
    padding: 0;
    margin: 0;
}

* {
    box-sizing: border-box;
}

button {
    cursor: pointer;
}

#app {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #333;
    background-image: url('/home/richard/Documentos/ESOFT/sistemacompralegal/frontend/src/assets/images/login.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

#app form {
    padding: 30px 20px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #fff;
    color: #000030;
    border-left: 6px solid #FB0023;
}

#app h3 {
    text-transform: uppercase;
    margin-top: 0;
}

#app input {
    height: 30px;
    padding: 0 10px;
    border: none;
    border-radius: 30px;
    width: 180px;
    background: #fff;
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

#app .fields {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

#app .fields label {
    font-weight: bold;
    text-align: right;
    margin-right: 15px;
}

#app .fields .field {
    margin-bottom: 15px;
    clear: both;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#app .fields button {
    background: #C9013E;
    color: #fff;
    font-weight: bold;
    width: 180px;
    border: none;
    height: 30px;
    border-radius: 5px;
    margin-left: auto;
}

#app h3 button {
    border: none;
    padding: 0;
    margin: 0;
    background: transparent;
    color: #FA7038;
    font-size: 11px;
}

#app .do-login:hover,
#app .do-login {
    font-size: 12px;
    color: #000;
    text-decoration: none;
    margin-right: auto;
}

#app .reset:hover,
#app .reset {
    font-size: 12px;
    color: #000;
    text-decoration: none;
    margin-right: auto;
}

#app .form-footer {
    display: flex;
}

input:focus,
button:focus {
    outline: none;
}
</style>