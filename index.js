const customExpress= require('./config/customeExpress');
const conexao = require('./infra/connection');
const Tabelas =require('./infra/tabelas');
const app = customExpress();

conexao.connect((erro)=>{
    if(erro){
        console.error(erro);
    }else{
        Tabelas.init(conexao);
        console.log("Conectado com sucesso");
        app.listen(3000,(erro)=>{
            console.log("SERVIDOR RODANDO NA PORTA 3000");
        });
    }
})