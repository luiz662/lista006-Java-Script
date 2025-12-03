// Obtém o elemento de saída
const outputDivArrays = document.getElementById('output_arrays');

// Função de utilidade para ler N números inteiros
function lerNumeros(quantidade, promptTitulo) {
    const numeros = [];
    for (let i = 1; i <= quantidade; i++) {
        let entrada;
        let numero;
        do {
            entrada = prompt(`[${promptTitulo}] Digite o ${i}º número inteiro de ${quantidade}:`);
            numero = parseInt(entrada);

            if (isNaN(numero)) {
                alert("Entrada inválida. Por favor, digite um número inteiro.");
            }
        } while (isNaN(numero));
        numeros.push(numero);
    }
    return numeros;
}

// Função de utilidade para ler N nomes
function lerNomes(quantidade, promptTitulo) {
    const nomes = [];
    for (let i = 1; i <= quantidade; i++) {
        let nome;
        do {
            nome = prompt(`[${promptTitulo}] Digite o ${i}º nome de ${quantidade}:`);
            if (!nome || nome.trim() === "") {
                alert("Nome não pode ser vazio.");
            }
        } while (!nome || nome.trim() === "");
        nomes.push(nome.trim());
    }
    return nomes;
}

// Função principal para executar o exercício
function executarExercicioArrays(numero) {
    let titulo = `Resultado do Exercício ${numero}: `;
    let resultado = "";

    switch (numero) {
        case 1:
            resultado = exercicio1_arrays();
            break;
        case 2:
            resultado = exercicio2_arrays();
            break;
        case 3:
            resultado = exercicio3_arrays();
            break;
        case 4:
            resultado = exercicio4_arrays();
            break;
        case 5:
            resultado = exercicio5_arrays();
            break;
        case 6:
            resultado = exercicio6_arrays();
            break;
        case 7:
            resultado = exercicio7_arrays();
            break;
        case 8:
            resultado = exercicio8_arrays();
            break;
        case 9:
            resultado = exercicio9_arrays();
            break;
        case 10:
            resultado = exercicio10_arrays();
            break;
        case 11:
            resultado = exercicio11_arrays();
            break;
        case 12:
            resultado = exercicio12_arrays();
            break;
        case 13:
            resultado = exercicio13_arrays();
            break;
        case 14:
            resultado = exercicio14_arrays();
            break;
        case 15:
            resultado = exercicio15_arrays();
            break;
        default:
            resultado = "Exercício não encontrado.";
    }

    outputDivArrays.innerHTML = `${titulo}\n\n${resultado}`;
}

// --- Funções de Resolução ---

// 1) Leia 5 números inteiros e exiba-os na ordem inversa
function exercicio1_arrays() {
    const numeros = lerNumeros(5, "Ex 1 - Inverso");
    // O método .reverse() inverte o array
    const inversos = [...numeros].reverse(); 
    return `Números digitados: [${numeros.join(", ")}]\nOrdem Inversa: [${inversos.join(", ")}]`;
}

// 2) Leia 10 números inteiros e exiba a soma deles
function exercicio2_arrays() {
    const numeros = lerNumeros(10, "Ex 2 - Soma");
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return `Números lidos: [${numeros.join(", ")}]\nA soma dos 10 números é: ${soma}`;
}

// 3) Leia 7 números inteiros e exiba a média aritmética dos valores lidos
function exercicio3_arrays() {
    const numeros = lerNumeros(7, "Ex 3 - Média");
    let soma = 0;
    const quantidade = numeros.length;
    for (let i = 0; i < quantidade; i++) {
        soma += numeros[i];
    }
    const media = soma / quantidade;
    return `Números lidos: [${numeros.join(", ")}]\nMédia aritmética: ${media.toFixed(2)}`;
}

// 4) Leia 5 números inteiros e exiba quantos deles são pares
function exercicio4_arrays() {
    const numeros = lerNumeros(5, "Ex 4 - Pares");
    let pares = 0;
    let listaPares = "";
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares++;
            listaPares += numeros[i] + " ";
        }
    }
    return `Números lidos: [${numeros.join(", ")}]\nNúmeros pares encontrados (${pares}): ${listaPares.trim()}`;
}

// 5) Leia 5 números inteiros e exiba o maior e o menor valor digitado
function exercicio5_arrays() {
    const numeros = lerNumeros(5, "Ex 5 - Maior/Menor");
    // Inicializa com o primeiro elemento
    let maior = numeros[0]; 
    let menor = numeros[0];

    // Começa do segundo elemento
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    
    return `Números lidos: [${numeros.join(", ")}]\nMaior valor: ${maior}\nMenor valor: ${menor}`;
}

// 6) Leia 10 números inteiros e exiba-os em ordem crescente
function exercicio6_arrays() {
    const numeros = lerNumeros(10, "Ex 6 - Crescente");
    // O método .sort() com a função de comparação ordena em ordem crescente
    const crescente = [...numeros].sort((a, b) => a - b); 
    return `Números digitados: [${numeros.join(", ")}]\nOrdem Crescente: [${crescente.join(", ")}]`;
}

// 7) Leia 10 números inteiros e exiba quantos deles são positivos
function exercicio7_arrays() {
    const numeros = lerNumeros(10, "Ex 7 - Positivos");
    let positivos = 0;
    let listaPositivos = "";
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            positivos++;
            listaPositivos += numeros[i] + " ";
        }
    }
    return `Números lidos: [${numeros.join(", ")}]\nQuantidade de números positivos: ${positivos}\nLista: ${listaPositivos.trim()}`;
}

// 8) Leia 5 números inteiros e calcule a média dos valores pares e a média dos valores ímpares
function exercicio8_arrays() {
    const numeros = lerNumeros(5, "Ex 8 - Média Par/Ímpar");
    let somaPar = 0;
    let contaPar = 0;
    let somaImpar = 0;
    let contaImpar = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            somaPar += numeros[i];
            contaPar++;
        } else {
            somaImpar += numeros[i];
            contaImpar++;
        }
    }

    const mediaPar = contaPar > 0 ? (somaPar / contaPar).toFixed(2) : "N/A";
    const mediaImpar = contaImpar > 0 ? (somaImpar / contaImpar).toFixed(2) : "N/A";

    return `Números lidos: [${numeros.join(", ")}]\nMédia dos Pares (Total: ${contaPar}): ${mediaPar}\nMédia dos Ímpares (Total: ${contaImpar}): ${mediaImpar}`;
}

// 9) Leia 10 números inteiros e exiba a quantidade de números positivos e a quantidade de números negativos
function exercicio9_arrays() {
    const numeros = lerNumeros(10, "Ex 9 - Pos/Neg");
    let positivos = 0;
    let negativos = 0;
    let zeros = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            positivos++;
        } else if (numeros[i] < 0) {
            negativos++;
        } else {
            zeros++;
        }
    }

    return `Números lidos: [${numeros.join(", ")}]\nQuantidade de Positivos: ${positivos}\nQuantidade de Negativos: ${negativos}\nQuantidade de Zeros: ${zeros}`;
}

// 10) Leia 5 números inteiros e verifique se algum deles é igual a zero
function exercicio10_arrays() {
    const numeros = lerNumeros(5, "Ex 10 - Verificar Zero");
    let encontrouZero = false;
    
    // Podemos usar o for para parar na primeira ocorrência (otimização)
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === 0) {
            encontrouZero = true;
            break; 
        }
    }

    const mensagem = encontrouZero ? "SIM, pelo menos um zero foi encontrado." : "NÃO, nenhum zero foi encontrado.";
    return `Números lidos: [${numeros.join(", ")}]\nResultado: ${mensagem}`;
}

// 11) Leia 10 números inteiros e exiba a soma dos valores positivos e a soma dos valores negativos
function exercicio11_arrays() {
    const numeros = lerNumeros(10, "Ex 11 - Soma Pos/Neg");
    let somaPositivos = 0;
    let somaNegativos = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            somaPositivos += numeros[i];
        } else if (numeros[i] < 0) {
            somaNegativos += numeros[i];
        }
    }

    return `Números lidos: [${numeros.join(", ")}]\nSoma dos Valores Positivos: ${somaPositivos}\nSoma dos Valores Negativos: ${somaNegativos}`;
}

// 12) Leia 5 números inteiros e exiba-os em ordem decrescente
function exercicio12_arrays() {
    const numeros = lerNumeros(5, "Ex 12 - Decrescente");
    // O método .sort() com a função de comparação (b - a) ordena em ordem decrescente
    const decrescente = [...numeros].sort((a, b) => b - a);
    return `Números digitados: [${numeros.join(", ")}]\nOrdem Decrescente: [${decrescente.join(", ")}]`;
}

// 13) Leia 10 números inteiros e exiba quantos deles estão no intervalo de 10 a 50
function exercicio13_arrays() {
    const numeros = lerNumeros(10, "Ex 13 - Intervalo 10-50");
    let contagem = 0;
    let listaIntervalo = "";

    for (let i = 0; i < numeros.length; i++) {
        // Verifica se o número é maior ou igual a 10 E menor ou igual a 50
        if (numeros[i] >= 10 && numeros[i] <= 50) {
            contagem++;
            listaIntervalo += numeros[i] + " ";
        }
    }

    return `Números lidos: [${numeros.join(", ")}]\nQuantidade no intervalo [10, 50]: ${contagem}\nLista: ${listaIntervalo.trim()}`;
}

// 14) Leia 7 números inteiros e exiba apenas os números pares
function exercicio14_arrays() {
    const numeros = lerNumeros(7, "Ex 14 - Apenas Pares");
    let listaPares = "Números pares: ";

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            listaPares += numeros[i] + " ";
        }
    }
    
    return `Números lidos: [${numeros.join(", ")}]\n${listaPares.trim()}`;
}

// 15) Leia 5 nomes e exiba-os em ordem alfabética
function exercicio15_arrays() {
    const nomes = lerNomes(5, "Ex 15 - Ordem Alfabética");
    // O método .sort() em arrays de strings ordena por ordem alfabética (lexicográfica)
    const emOrdem = [...nomes].sort(); 
    return `Nomes digitados: [${nomes.join(", ")}]\nOrdem Alfabética:\n- ${emOrdem.join("\n- ")}`;
}