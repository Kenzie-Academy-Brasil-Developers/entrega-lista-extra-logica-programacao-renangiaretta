function calculateSalary(fixo, vendas){
    let comissaoMenos = 0.03
    let comissaoMais = 0.05
    let salarioTotal = 0
    if(vendas <= 1200){
        salarioTotal = (fixo+(vendas*comissaoMenos))
    }
    if(vendas > 1200){
        salarioTotal = (fixo+(vendas*comissaoMais))
    }
    return 'O salário deste mês do vendedor foi R$ ' + salarioTotal
}
console.log(calculateSalary(5000, 12000))

// function cashMachine (saque, fixo, vendas){
//     let notas200 = 0
//     let notas100 = 0
//     let notas50 = 0
//     let notas20 = 0
//     let notas10 = 0
//     let notas5 = 0
//     let notas2 = 0
//     let valorTotal = calculateSalary

//     if(saque >= 200){
//         notas200 = (parseInt(saque/200))
//         console.log(notas200)
//         resto = (saque - (notas200 * 200))
//         console.log(resto)
//     }
//     else if(resto >= 100 && resto < 200){
//         notas100 = (parseInt(resto / 100))
//         resto = resto - 100
//         console.log(notas100)
//         console.log(resto)
//     }
//     else if(resto >= 50 && resto < 100){
//         notas50 = (parseInt(resto/50))
//         console.log(notas50)
//         resto = resto - 50
//         console.log(resto)
//     }
//     else if(resto >= 20 && resto < 50){
//         notas20 = (parseInt(resto/20))
//         console.log(notas20)
//         resto = (resto - (notas20 * 20))
//         console.log(resto)
//     }
//     else if(resto >= 10 && resto < 20){
//         notas10 = (parseInt(resto / 10))
//         console.log(notas10)
//         resto = (resto - (notas10 * 10))
//         console.log(resto)
//     }
//     else if(resto == 9){
//         notas5 = 1
//         notas2 = 2
//     }
//     else if(resto == 8){
//         notas2 = 4
//     }
//     else if(resto = 7){
//         notas5 = 1
//         notas2 = 1
//     }
//     else if(resto = 6){
//         notas2 = 3
//     }
//     else if(resto = 5){
//         notas5 = 1
//     }
//     else if(resto = 4){
//         notas2 = 2
//     }
//     else if(resto = 3)[
//         notas2 = 1
//     ]
//     else if (resto = 2){
//         notas2 = 1
//     }
//     return `Foram retiradas ${notas200} notas de R$200, ${notas100} notas de R$100, ${notas50}, notas de R$50, ${notas20} notas de R$20, ${notas10} notas de R$10, ${notas5} notas de R$5 e ${notas2} notas de R$2`
// }
// console.log(cashMachine(1000, 2000, 10000))

function calculateStock(qtAtual, qtMax, qtMin){
    let media = qtMax / qtMin
    if (qtAtual >= media){
        return 'Não efetuar compra'
    }
    else if(qtAtual < media){
        return 'Efetuar compra'
    }
}
console.log(calculateStock(1000, 2000, 100))

function calculateAge(anoNasc, anoAtual){
    let idadeAnos = anoAtual - anoNasc
    let idadeMeses = idadeAnos * 12
    let idadeDias = idadeAnos * 365
    let idadeSemanas = idadeAnos * 48
    return `A idade da pessoa é ${idadeAnos} anos, que corresponde a ${idadeMeses} meses ou ${idadeDias} dias ou ${idadeSemanas} semanas.` 
}
console.log(calculateAge(1992, 2022))

function getDiagonal(matriz){
    let diagonalMatriz = [];
    for(let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            if((i) == (j)){
                diagonalMatriz.push(matriz[i][j]);
            }
        }
    }
    return diagonalMatriz;
}
console.log(getDiagonal([
    [8, 9, 0],
    [0, 1, 5],
    [27, 56, 1]
]))