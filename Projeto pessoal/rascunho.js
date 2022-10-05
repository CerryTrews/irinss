let faixaInss = [1212.0, 1212.0, 2427.37, 3641.04];
let aliquotaInss = [7.5, 9, 12, 14];

let salarioBruto = 0;
let dependente = 0;
let pensao = 0;

let porcentagemInss = document.getElementsByClassName("porcentagemInss");
let porcentagemIr = document.getElementsByClassName("porcentagemIr");
let valoresInss = document.getElementsByClassName("valoresInss");

for (i = 0; i < aliquotaInss.length; i++) {
	porcentagemInss[i].innerHTML = aliquotaInss[i];
}



function inputDinheiro() {
	salarioBruto = document.getElementById("salario").value;
	console.log(salarioBruto);
	// document.getElementById("dinheiro").innerHTML = "Seu salário é de R$" + salarioBruto;
}

function inputDependente() {
	dependente = document.getElementById("dependente").value;
	console.log(dependente);

}

function inputPensao() {
	pensao = document.getElementById("pensao").value;
	console.log(pensao);

}




function calculaInss() {

	for (i = 0; i < faixaInss.length; i++) {
		if (salarioBruto <= faixaInss[i]) {
			
			console.log(`Esse é o i: ${[i]}`);
			console.log(`Essa é faixa INSS: ${faixaInss[i]}`);
			console.log(`Essa é aliquota Inss: ${aliquotaInss[i]}`);
			console.log(`Esse é o salario bruto: ${salarioBruto}`);

			console.log(`a conta deu certo`);
			
			} else {
				if (salarioBruto > faixaInss[i]) {
				console.log(`nao deu nao`);
			}
			// valoresInss[j].innerHTML = ((salarioBruto * aliquotaInss[j]) / 100).toFixed(2);

		}
	}
}




// function calculaInss() {

//     if (salarioBruto <= faixaInss[0]) {
//         valoresInss[0].innerHTML = ((salarioBruto * aliquotaInss[0]) / 100).toFixed(2);
//     } else {
//         if (salarioBruto > faixaInss[0] && salarioBruto <= faixaInss[2]) {
//             valoresInss[0].innerHTML = ((faixaInss[0] * aliquotaInss[0]) / 100).toFixed(2);
//             valoresInss[1].innerHTML = (((salarioBruto - faixaInss[0]) * aliquotaInss[1]) / 100).toFixed(2);
//         } else {
//             if (salarioBruto > faixaInss[2] && salarioBruto <= faixaInss[3]) {
//                 valoresInss[0].innerHTML = ((faixaInss[0] * aliquotaInss[0]) / 100).toFixed(2);
//                 valoresInss[1].innerHTML = (((faixaInss[2] - faixaInss[0]) * aliquotaInss[1]) / 100).toFixed(2);
//                 valoresInss[2].innerHTML = (((salarioBruto - faixaInss[2]) * aliquotaInss[2]) / 100).toFixed(2);
//             } else {
//                 if (salarioBruto > faixaInss[3]) {
//                     valoresInss[0].innerHTML = ((faixaInss[0] * aliquotaInss[0]) / 100).toFixed(2);
//                     valoresInss[1].innerHTML = (((faixaInss[2] - faixaInss[0]) * aliquotaInss[1]) / 100).toFixed(2);
//                     valoresInss[2].innerHTML = (((faixaInss[3] - faixaInss[2]) * aliquotaInss[2]) / 100).toFixed(2);
//                     valoresInss[3].innerHTML = (((salarioBruto - faixaInss[3]) * aliquotaInss[3]) / 100).toFixed(2);
//                 }
//             }
//         }
//     }
// }