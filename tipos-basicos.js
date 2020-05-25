//boolean
var estaPago = true;
//number
var idade = 20;
var valor = 29.99;
//string
var empresa = 'Softagil';
var cliente = "cleber";
//Template Strings
var nome = 'João';
console.log("Ol\u00E1 meu nome \u00E9 " + nome + " e tenho " + idade + " anos");
//arrays
var notas = [6, 8, 7, 9];
//tuple
var alunos = ['Clebao', 38];
console.log(alunos[0]);
console.log(alunos[1]);
//Enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
console.log(corFundo);
//Any - Não legal usar muito
var algumValor = 4;
algumValor = 'Agpra é ums string';
algumValor = true;
//void
function alerta() {
    //alert('OPeração não permitida');
}
