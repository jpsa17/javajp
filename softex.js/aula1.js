const medalhas = ["ouro" , "prata" , "bronze" , "nada"];

function medalhaDeAcordodoComposicao(posicao) {
    if (posicao == 1 || posicao == 2 )
        return medalhas [0];
    

if (posicao ==2) {
    return medalhas [1];
}

if (posicao == 3) {
    return medalhas [2];
}else{

    return medalhas [3];
}

}

console.log (
     "Parabens, você ganhou a medalha de ${medalhaDeAcordodoComposicao"(1));

