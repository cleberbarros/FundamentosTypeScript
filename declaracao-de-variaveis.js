//var, let e const
//com var
function iniciarTimeCidade_declarado_com_var(iniciaJogo) {
    var nome = 'Messi e amigos!';
    if (iniciaJogo) {
        var cidade = 'Petrolina-PE!';
    }
    console.log(nome + " vao jogar " + cidade);
}
//com let
function iniciarTimeCidade_declarado_com_let(iniciaJogo) {
    var nome = 'Messi e amigos!';
    var cidade = 'nada';
    if (iniciaJogo) {
        cidade = 'Petrolina-PE!';
    }
    console.log(nome + " vao jogar " + cidade);
}
//com  const (constante)
function iniciarTimeCidade_declarado_com_const(iniciaJogo) {
    var nome = 'Messi e amigos!';
    var cidade = 'nada';
    if (iniciaJogo) {
        cidade = 'Petrolina-PE!!';
    }
    //nome = 'pele e amigo'; //erro pois nao posso atribuir um valor a constante
    console.log(nome + " vao jogar " + cidade);
}
iniciarTimeCidade_declarado_com_var(false);
iniciarTimeCidade_declarado_com_let(false);
iniciarTimeCidade_declarado_com_const(true);
