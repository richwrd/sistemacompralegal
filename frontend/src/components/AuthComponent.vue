
<script>
import axios from 'axios';

export default {
    name: 'AuthComponent',
    data() {
        return {
            authenticated: false,
            token: null,
        };
    },
    created() {
        // Verificar o token ao criar o componente
        this.verificarToken();
    },
    methods: {
        async verificarToken() {
            const token = localStorage.getItem('accessToken');
            if (token) {
                try {
                    const response = await axios.post('http://localhost:3000/auth/verify', { token });
                    if (response.status === 200) {
                        this.authenticated = true;
                        this.token = token;
                    }
                } catch (error) {
                    console.error('Falha ao verificar o token:', error);
                    // Se a verificação do token falhar, você pode redirecionar o usuário para a página de login
                    this.$router.push('/login');
                }
            } else {
                // Se não houver token no armazenamento local, redirecionar o usuário para a página de login
                this.$router.push('/login');
            }
        },
    },
};
</script>


<style>

.loader {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(#ee280e, #15a0f7, #6ed15a);
    animation: animate7712 1.2s linear infinite;
}

@keyframes animate7712 {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.loader span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(#ee280e, #15a0f7, #5ad15a);
}

.loader:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: #333;
    border: solid #333 10px;
    border-radius: 50%;
}

.loader span:nth-child(1) {
    filter: blur(5px);
}

.loader span:nth-child(2) {
    filter: blur(10px);
}

.loader span:nth-child(3) {
    filter: blur(25px);
}

.loader span:nth-child(4) {
    filter: blur(50px);
}
</style>