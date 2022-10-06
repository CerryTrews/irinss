let salarioBruto = 3000;
let dependente = 0;
let pensao = 0;


function inputDinheiro() {
	salarioBruto = document.getElementById("salario").value;
	console.log(salarioBruto);
	// 	document.getElementById("dinheiro").innerHTML = "Seu salário é de R$" + salarioBruto;
}

function inputDependente() {
	dependente = document.getElementById("dependente").value;
	console.log(dependente);

}

function inputPensao() {
	pensao = document.getElementById("pensao").value;
	console.log(pensao);

}


// fazer o html input number para dependente e pensão e a função para puxar esse valor pro js
function imprime(texto) {
	console.log(texto);
}
function tabela(texto) {
	console.table(texto);
}




//--------------------------------------------------------------------------------------------------------------------------------------------------------

let aliquotaIr = [7.5, 15, 22.5, 27.5];
let aliquotaInss = [7.5, 9, 12, 14];
let faixaIr = [1903.98, 2826.65, 3751.05, 4664.68];
let faixaInss = [1212.0, 1212.0, 2427.37, 3641.04];
let inss;
let salario;
let Ir;
let porcentagemInss = document.getElementsByClassName("porcentagemInss");
let porcentagemIr = document.getElementsByClassName("porcentagemIr");
// let valoresInss = document.getElementsByClassName("valoresInss");



for (aliquotaAtual = 0; aliquotaAtual < aliquotaInss.length; aliquotaAtual++) {
	porcentagemInss[aliquotaAtual].innerHTML = aliquotaInss[aliquotaAtual];
}

for (aliquotaAtual = 0; aliquotaAtual < aliquotaIr.length; aliquotaAtual++) {
	porcentagemIr[aliquotaAtual].innerHTML = aliquotaIr[aliquotaAtual];
}



function calculaInss() {

	for (i = 0; i < faixaInss.length; i++) {

		if ( salarioBruto <= 1212.0) {

			salarioBruto = (salarioBruto * aliquotaInss[i]) /100;
		}


		// while (salarioBruto >= faixaInss[i]) {

		// 	let faixaAtual = faixaInss[i];
		// 	let faixaAnterior = faixaInss[i] - 1;

		// 	let salarioInss = (((salarioBruto - faixaAnterior) + (salarioBruto - faixaAtual)) * aliquotaInss[i]) / 100;
		// }
	}
	console.log(calculaInss())

	//  document.getElementById("inss").innerHTML = "Seu INSS é de R$" + (inss.toFixed(2));
	//  document.getElementById("aliquotaEfetiva").innerHTML = `Alíquota Efetiva: ${(((inss / salarioBruto) * 100).toFixed(2))}%`;
}

// inss funciona pq o valor vem direto do html mas o ir não pois o valor sai do calculo do inss ( arrumar )


//--------------------------------------------------------------------------------------------------------------------------------------------------------

