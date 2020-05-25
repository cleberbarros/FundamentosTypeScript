//var, let e const

//com var
function iniciarTimeCidade_declarado_com_var(iniciaJogo: boolean){
    var nome: string = 'Messi e inimigos!';

    if (iniciaJogo){
        var cidade: string = 'em casa do caralho pra dentro!';
    }

    console.log(`${nome} vao jogar ${cidade}`)
}

//com let
function iniciarTimeCidade_declarado_com_let(iniciaJogo: boolean){
    let nome: string = 'Messi e inimigos!';
    let cidade: string ='nada';

    if (iniciaJogo){ 
        cidade = 'em casa do caralho pra dentro com let!';
    }

    console.log(`${nome} vao jogar ${cidade}`)
}

//com  const (constante)
function iniciarTimeCidade_declarado_com_const(iniciaJogo: boolean){
    const nome: string = 'Messi e inimigosooooo!';
    let cidade: string ='nada';

    if (iniciaJogo){
        cidade = 'em casa do caralho pra dentro com let!';
    }

    //nome = 'pele e amigo'; //erro pois nao posso atribuir um valor a constante
    console.log(`${nome} vao jogar ${cidade}`)
}

iniciarTimeCidade_declarado_com_var(false);

iniciarTimeCidade_declarado_com_let(false);

iniciarTimeCidade_declarado_com_const(true);

