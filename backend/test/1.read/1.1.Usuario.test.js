import assert from 'assert';
import AuthController from '../../src/controllers/AuthController.js';

describe('📦 GET', () => {
  describe('#getUsuario()\n        auth/login', () => {
    it('Deve retornar o token do usuário', async () => {

        // Nome do usuário p/ teste
        const mockLogin = {
          email: 'teste1@teste.com.br',
          senha: 'senha123'
          };

          // Cria a requisição com as informacoesde login
        const req = { body: mockLogin };

        // Objeto de resposta simulado
        const res = {
          statusCode: null,
          jsonData: null,
          status(code) {
            this.statusCode = code;
            return this;
          },
          json(data) {
            this.jsonData = data;
          }
        };
      

          // Chama a função do controlador para obter o usuário pelo ID
        await AuthController.loginAuth(req, res);

    });
  });

  describe('#verifyUsuario()\n        auth/verify', () => {
    it('Deve retornar o TRUE se for valido o usuário', async () => {

        // Nome do usuário p/ teste
        const mockToken = {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjYxYTRhNmQwNzhiN2JlNmJlMjk4YyIsImlhdCI6MTcxMDYzMjE5MX0.PKsHTK41eD9pUAhL0sqEpHCclen03n3CRNTwAyK8so8"
          };

          // Cria a requisição com as informacoesde login
        const req = { headers: mockToken };

        // Objeto de resposta simulado
        const res = {
          statusCode: null,
          jsonData: null,
          status(code) {
            this.statusCode = code;
            return this;
          },
          json(data) {
            this.jsonData = data;
          }
        };
      

          // Chama a função do controlador para obter o usuário pelo ID
        await AuthController.verifyToken(req, res);

        // console.log(res.jsonData);
        // console.log(res.statusCode);

    });
  })
});
