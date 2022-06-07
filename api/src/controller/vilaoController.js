import { Router } from 'express'
import { adicionarVilao, listarViloes } from '../repository/vilaoRepository.js';

const server = Router();

server.post('/vilao', async (req, resp) => {
    try {
        const novo = req.body;
        const vilao = await adicionarVilao(novo);
        resp.send(vilao)
    }
    catch (err) {
        resp.send({
            erro: err.message
        })
    }
})

server.get('/vilao', async (req, resp) => {
    try {
        const resposta = await listarViloes();
        resp.send(resposta)
    }
    catch (err) {
        resp.send({
            erro: err.message
        })
    }
})

export default server;