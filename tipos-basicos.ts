//boolean
let estaPago: boolean = true;

//number
let idade: number = 20;
let valor: number=29.99;

//string
let empresa: string = 'Softagil';
let cliente: string = "cleber";

//Template Strings
let nome: string = 'João';
console.log(`Olá meu nome é ${nome} e tenho ${idade} anos`);


//arrays
let notas: number[] = [6,8,7,9];

//tuple
let alunos: [string, number] = ['Clebao',38 ];
console.log(alunos[0]);
console.log(alunos[1]);


//Enum
enum Cor {Verde, Amarelo, Azul, Branco};
let corFundo: Cor = Cor.Verde;
console.log(corFundo);

//Any - Não legal usar muito
let algumValor: any = 4;
algumValor = 'Agora é ums string';
algumValor = true;

//void
function alerta(): void{
    //alert('OPeração não permitida');
}