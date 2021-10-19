import axios from "axios";
/**
 * Receber code(string) -> codigo para recuperar token
 * Recuperar o access_token no github -> token que o github vai disponibilizar pra ter acesso as informações
 * Verificar se o usuário existe no DB
 * ------ SIM = Gera um token
 * ------ Não = Cria no DB, gera um access_token
 * Retornar o token com as infos do usuário logado
 **/

class AuthenticateUserService {
    async execute(code: string) {
        const url = "https://github.com/login/oauth/access_token";
        
        // chamada do tipo post
        const response = await axios.post(url,null, {
            // parametros de acesso ao token
            params:{
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code
            },
            headers:{
                "Accept": "application/json"
            }
        });

        return response.data;
    }
}

export { AuthenticateUserService };