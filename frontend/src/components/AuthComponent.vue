
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
