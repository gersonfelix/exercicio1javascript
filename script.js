let renda = Number (prompt("Insira o valor de sua renda"));
let idade = Number (prompt("Qual é a sua idade?"));
let emprestimo = Number (prompt("Qual o valor de empréstimo?"))
let i = 0;
if (idade >= 21 && idade <=  55){
    if(renda >= 1000){
        if(emprestimo<(renda*15)){
            if (!(emprestimo<500)){
                console.log(`Empréstimo aprovado!!! Você ganhou R$ ${emprestimo}`);
                let resposta1 = Number (prompt("Quer parcelar em quantas vezes?"));
                if (resposta1>3 && resposta1<25){
                    let parcela = (emprestimo/resposta1);
                    let tot = 0;
                    while(i<resposta1){
                        parcela += (parcela * (8.5/100));
                        console.log(`A parcela ${i+1} é: ${parseFloat(Math.ceil(parcela))}`);
                        i++;
                    }
                }else{
                    console.log("Infelizmente só parcelamos de 3 à 24 vezes.");
                }
                
            }else{
                console.log("Não trabalhamos com empréstimos menores que R$500 reais.");
            }
        }else{
            console.log(`A sua renda não permite empréstimos maiores que R$${renda*15}.`);
        }
    }else{
        console.log("Infelizmente a sua renda não permite empréstimos.");
    }
}else{
    console.log("Digite uma idade maior que 21 e menor que 55.");
}


