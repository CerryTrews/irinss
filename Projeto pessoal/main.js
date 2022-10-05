let salarioBruto = 0;
let dependente = 0;
let pensao = 0;


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
let aliquota = [aliquotaIr, aliquotaInss];
let faixaIr = [1903.98, 2826.65, 3751.05, 4664.68];
let faixaInss = [1212.0, 1212.0, 2427.37, 3641.04];
let faixa = [faixaIr, faixaInss];
let inss;
let salario;
let Ir;
let porcentagemInss = document.getElementsByClassName("porcentagemInss");
let porcentagemIr = document.getElementsByClassName("porcentagemIr");
let valoresInss = document.getElementsByClassName("valoresInss");



for (i = 0; i < aliquotaInss.length; i++) {
	porcentagemInss[i].innerHTML = aliquotaInss[i];
}

for (i = 0; i < aliquotaIr.length; i++) {
	porcentagemIr[i].innerHTML = aliquotaIr[i];
}



function calculaInss() {



	if (salarioBruto <= faixaInss[0]) {
		valoresInss[0].innerHTML = ((salarioBruto * aliquotaInss[0]) / 100).toFixed(2);
	} else {
		if (salarioBruto > faixaInss[0] && salarioBruto <= faixaInss[2]) {
			valoresInss[0].innerHTML = ((faixaInss[0] * aliquotaInss[0]) / 100).toFixed(2);
			valoresInss[1].innerHTML = (((salarioBruto - faixaInss[0]) * aliquotaInss[1]) / 100).toFixed(2);
		} else {
			if (salarioBruto > faixaInss[2] && salarioBruto <= faixaInss[3]) {
				valoresInss[0].innerHTML = ((faixaInss[0] * aliquotaInss[0]) / 100).toFixed(2);
				valoresInss[1].innerHTML = (((faixaInss[2] - faixaInss[0]) * aliquotaInss[1]) / 100).toFixed(2);
				valoresInss[2].innerHTML = (((salarioBruto - faixaInss[2]) * aliquotaInss[2]) / 100).toFixed(2);
			} else {
				if (salarioBruto > faixaInss[3]) {
					valoresInss[0].innerHTML = ((faixaInss[0] * aliquotaInss[0]) / 100).toFixed(2);
					valoresInss[1].innerHTML = (((faixaInss[2] - faixaInss[0]) * aliquotaInss[1]) / 100).toFixed(2);
					valoresInss[2].innerHTML = (((faixaInss[3] - faixaInss[2]) * aliquotaInss[2]) / 100).toFixed(2);
					valoresInss[3].innerHTML = (((salarioBruto - faixaInss[3]) * aliquotaInss[3]) / 100).toFixed(2);
				}
			}
		}
	}





	if (salarioBruto <= faixa[1][0]) {

		inss = (salarioBruto * aliquota[1][0]) / 100




		// document.getElementById("aliquota1").innerHTML = `Alíquota 1: ${(aliquota[1][0])}%`;

	} else {
		if (salarioBruto > faixa[1][0] && salarioBruto <= faixa[1][2]) {

			inss = ((faixa[1][0] * aliquota[1][0]) / 100)
				+ ((salarioBruto - faixa[1][0]) * aliquota[1][1]) / 100

		} else {
			if (salarioBruto >= faixa[1][2] && salarioBruto <= faixa[1][3]) {

				inss = ((faixa[1][0] * aliquota[1][0]) / 100)
					+ (((faixa[1][2] - faixa[1][0]) * aliquota[1][1]) / 100)
					+ ((salarioBruto - faixa[1][2]) * aliquota[1][2]) / 100


			} else {
				if (salarioBruto > faixa[1][3]) {

					inss = ((faixa[1][0] * aliquota[1][0]) / 100)
						+ (((faixa[1][2] - faixa[1][0]) * aliquota[1][1]) / 100)
						+ (((faixa[1][3] - faixa[1][2]) * aliquota[1][2]) / 100)
						+ ((salarioBruto - faixa[1][3]) * aliquota[1][3]) / 100

				}
			}

		}
	}

	document.getElementById("inss").innerHTML = "Seu INSS é de R$" + (inss.toFixed(2));
	document.getElementById("aliquotaEfetiva").innerHTML = `Alíquota Efetiva: ${(((inss / salarioBruto) * 100).toFixed(2))}%`;
}

// inss funciona pq o valor vem direto do html mas o ir não pois o valor sai do calculo do inss ( arrumar )
function calculaIr() {

	if (dependente > 0 && pensao > 0) {
		salario = salarioBruto - (dependente * 189.59) - pensao



	} else {
		if (dependente > 0 && pensao == 0) {
			salario = salarioBruto - (dependente * 189.59)

		} else {
			if (dependente == 0 && pensao > 0) {
				salario = salarioBruto - pensao

			} else {
				if (dependente == 0 && pensao == 0) {
					salario = salarioBruto

				}
			}
		}
	}


	if (salario > faixa[0][0] && salario <= faixa[0][1]) {

		Ir = ((salario - faixa[0][0]) * aliquota[0][0]) / 100

	} else {
		if (salario > faixa[0][1] && salario <= faixa[0][2]) {

			Ir = (((faixa[0][1] - faixa[0][0]) * aliquota[0][0]) / 100)
				+ ((salario - faixa[0][1]) * aliquota[0][1]) / 100

		} else {
			if (salario >= faixa[0][2] && salario <= faixa[0][3]) {

				Ir = (((faixa[0][1] - faixa[0][0]) * aliquota[0][0]) / 100)
					+ (((faixa[0][2] - faixa[0][1]) * aliquota[0][1]) / 100)
					+ ((salario - faixa[0][2]) * aliquota[0][2]) / 100

			} else {
				if (salario > faixa[0][3]) {

					Ir = (((faixa[0][1] - faixa[0][0]) * aliquota[0][0]) / 100)
						+ (((faixa[0][2] - faixa[0][1]) * aliquota[0][1]) / 100)
						+ (((faixa[0][3] - faixa[0][2]) * aliquota[0][2]) / 100)
						+ ((salario - faixa[0][3]) * aliquota[0][3]) / 100


				}
			}
		}
	}
	console.log(Ir)

}

//--------------------------------------------------------------------------------------------------------------------------------------------------------

