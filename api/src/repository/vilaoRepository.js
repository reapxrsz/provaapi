import { con } from './connection.js'

export async function adicionarVilao(vilao){
    const comando =
    `INSERT INTO tb_vilao(id_vilao, nm_vilao, ds_maldades, bt_poder)
			VALUES(?, ?, ?, ?);`
    

    const [resposta] = await con.query(comando, [vilao.id, vilao.nome, vilao.maldades, vilao.poder]);
    vilao.id = resposta.insertId;

    return vilao;
}

export async function listarViloes(){
    const comando =
    `SELECT id_vilao 		id, 
            nm_vilao	    nome,
            ds_maldades		maldades,
            bt_poder        poder
       FROM tb_vilao;`

       const [linhas] = await con.query(comando);
       return linhas;
}