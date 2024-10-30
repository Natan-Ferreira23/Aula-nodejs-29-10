class Tabela {
    init(conexao){
        this.conexao = conexao;
        this.criarLogin();
        //se tiver mais tabela para criar, chamar ela aqui e declarar ela em baixo
    }
    criarLogin(){
        let sql = "CREATE TABLE IF NOT EXISTS login"+
        " (id_login_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,"+
        "email VARCHAR(250) UNIQUE NOT NULL,"+
        "senha VARCHAR(100) DEFAULT 'senha12345'"+
        ");"
        this.conexao.query(sql,(erro)=>{
            if(erro){
                console.error(erro);
            }else{
                console.log("Tabela login criada com sucesso")
            }
        })
    }
}

module.exports =new Tabela;