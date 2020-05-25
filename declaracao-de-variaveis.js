//var, let e const
//com var
function iniciarTimeCidade_declarado_com_var(iniciaJogo) {
    var nome = 'Messi e inimigos!';
    if (iniciaJogo) {
        var cidade = 'em casa do caralho pra dentro!';
    }
    console.log(nome + " vao jogar " + cidade);
}
//com let
function iniciarTimeCidade_declarado_com_let(iniciaJogo) {
    var nome = 'Messi e inimigos!';
    var cidade = 'nada';
    if (iniciaJogo) {
        cidade = 'em casa do caralho pra dentro com let!';
    }
    console.log(nome + " vao jogar " + cidade);
}
//com  const (constante)
function iniciarTimeCidade_declarado_com_const(iniciaJogo) {
    var nome = 'Messi e inimigosooooo!';
    var cidade = 'nada';
    if (iniciaJogo) {
        cidade = 'em casa do caralho pra dentro com let!';
    }
    //nome = 'pele e amigo'; //erro pois nao posso atribuir um valor a constante
    console.log(nome + " vao jogar " + cidade);
}
iniciarTimeCidade_declarado_com_var(false);
iniciarTimeCidade_declarado_com_let(false);
iniciarTimeCidade_declarado_com_const(true);
