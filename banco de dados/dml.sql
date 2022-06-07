USE tb_vilao;

-- adicionar viloes 
INSERT INTO tb_vilao(id_vilao, nm_vilao, ds_maldades, bt_poder)
			VALUES(1, 'coringa', 'matou geral', true);
            
-- consultar todos os viloes
SELECT id_vilao 		id, 
	   nm_vilao			nome,
       ds_maldades		maldades,
       bt_poder         poder
 FROM  tb_vilao;