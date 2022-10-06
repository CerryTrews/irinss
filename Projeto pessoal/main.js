let salarioBruto = 0;
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


let faixaInss = [1212.0, 1212.0, 2427.37, 3641.04];
let aliquotaIr = [7.5, 15, 22.5, 27.5];
let aliquotaInss = [7.5, 9, 12, 14];
let faixaIr = [1903.98, 2826.65, 3751.05, 4664.68];
let inss;
let salario;
let Ir;
let porcentagemInss = document.getElementsByClassName("porcentagemInss");
let porcentagemIr = document.getElementsByClassName("porcentagemIr");
let valoresInss = document.getElementsByClassName("valoresInss");
let valoresIr = document.getElementsByClassName("valoresIr");
let total = document.getElementsByClassName("total");
let totalIr = document.getElementsByClassName("totalIr");




for (aliquotaAtual = 0; aliquotaAtual < aliquotaInss.length; aliquotaAtual++) {
	porcentagemInss[aliquotaAtual].innerHTML = aliquotaInss[aliquotaAtual];
}

for (aliquotaAtual = 0; aliquotaAtual < aliquotaIr.length; aliquotaAtual++) {
	porcentagemIr[aliquotaAtual].innerHTML = aliquotaIr[aliquotaAtual];
}



function calculaInss() {

	if (salarioBruto <= faixaInss[0]) {
		inss = ((salarioBruto * aliquotaInss[0]) / 100).toFixed(2);

		valoresInss[0].innerHTML = ((salarioBruto * aliquotaInss[0]) / 100).toFixed(2);

	} else {
		if (salarioBruto > faixaInss[0] && salarioBruto <= faixaInss[2]) {

			inss = (((faixaInss[0] * aliquotaInss[0]) / 100)
				+ (((salarioBruto - faixaInss[0]) * aliquotaInss[1]) / 100)).toFixed(2);


			valoresInss[0].innerHTML = ((faixaInss[0] * aliquotaInss[0]) / 100).toFixed(2);
			valoresInss[1].innerHTML = (((salarioBruto - faixaInss[0]) * aliquotaInss[1]) / 100).toFixed(2);

		} else {
			if (salarioBruto >= faixaInss[2] && salarioBruto <= faixaInss[3]) {

				inss = (((faixaInss[0] * aliquotaInss[0]) / 100)
					+ (((faixaInss[2] - faixaInss[0]) * aliquotaInss[1]) / 100)
					+ (((salarioBruto - faixaInss[2]) * aliquotaInss[2]) / 100)).toFixed(2);

				valoresInss[0].innerHTML = ((faixaInss[0] * aliquotaInss[0]) / 100).toFixed(2);
				valoresInss[1].innerHTML = (((faixaInss[2] - faixaInss[0]) * aliquotaInss[1]) / 100).toFixed(2);
				valoresInss[2].innerHTML = (((salarioBruto - faixaInss[2]) * aliquotaInss[2]) / 100).toFixed(2);

			} else {
				if (salarioBruto > faixaInss[3]) {

					inss = (((faixaInss[0] * aliquotaInss[0]) / 100)
						+ (((faixaInss[2] - faixaInss[0]) * aliquotaInss[1]) / 100)
						+ (((faixaInss[3] - faixaInss[2]) * aliquotaInss[2]) / 100)
						+ (((salarioBruto - faixaInss[3]) * aliquotaInss[3]) / 100)).toFixed(2);


					valoresInss[0].innerHTML = ((faixaInss[0] * aliquotaInss[0]) / 100).toFixed(2);
					valoresInss[1].innerHTML = (((faixaInss[2] - faixaInss[0]) * aliquotaInss[1]) / 100).toFixed(2);
					valoresInss[2].innerHTML = (((faixaInss[3] - faixaInss[2]) * aliquotaInss[2]) / 100).toFixed(2);
					valoresInss[3].innerHTML = (((salarioBruto - faixaInss[3]) * aliquotaInss[3]) / 100).toFixed(2);


				}

			}


		}


	}
	console.log(inss);
	total[0].innerHTML = ((inss / salarioBruto) * 100).toFixed(2);
	total[1].innerHTML = inss;


}

function calculaIr() {

	let salario = salarioBruto - inss;
		
	if (dependente > 0) {
		
		salario = salario - (dependente * 189.59)
	}
	
	if (pensao > 0) {
		salario = salario - pensao
	}

	if (salario <= faixaIr[0]) {

		valoresIr[0].innerHTML = 'isento';
		valoresIr[1].innerHTML = 'isento';
		valoresIr[2].innerHTML = 'isento';
		valoresIr[3].innerHTML = 'isento';
	} else {
		if (salario > faixaIr[0] && salario <= faixaIr[1]) {

			Ir = (((salario - faixaIr[0]) * aliquotaIr[0]) /100).toFixed(2);

			valoresIr[0].innerHTML = (((salario - faixaIr[0]) * aliquotaIr[0]) / 100).toFixed(2);
			valoresIr[1].innerHTML = 0;
			valoresIr[2].innerHTML = 0;
			valoresIr[3].innerHTML = 0;
		} else {
			if (salario > faixaIr[1] && salario <= faixaIr[2]) {

				Ir = ((((faixaIr[1] - faixaIr[0]) * aliquotaIr[0]) /100) + (((salario - faixaIr[1]) * aliquotaIr[1]) /100)).toFixed(2);

				valoresIr[0].innerHTML = (((faixaIr[1] - faixaIr[0]) * aliquotaIr[0]) /100).toFixed(2);
				valoresIr[1].innerHTML = (((salario - faixaIr[1]) * aliquotaIr[1]) /100).toFixed(2);
				valoresIr[2].innerHTML = 0;
				valoresIr[3].innerHTML = 0;
			} else {
				if (salario > faixaIr[2] && salario <= faixaIr[3]) {

					Ir = ((((faixaIr[1] - faixaIr[0]) * aliquota[0]) /100) + (((faixaIr[2] - faixaIr[1]) * aliquota[1]) /100) + (((salario - faixaIr[2]) * aliquotaIr[2]) /100)).toFixed(2);

					valoresIr[0].innerHTML = (((faixaIr[1] - faixaIr[0]) * aliquotaIr[0]) /100).toFixed(2);
					valoresIr[1].innerHTML = (((faixaIr[2] - faixaIr[1]) * aliquotaIr[1]) /100).toFixed(2);
					valoresIr[2].innerHTML = (((salario - faixaIr[2]) * aliquotaIr[2]) /100).toFixed(2);
					valoresIr[3].innerHTML = 0;
				} else {
					if (salario > faixaIr[3]) {

						Ir = ((((faixaIr[1] - faixaIr[0]) * aliquota[0]) /100) + (((faixaIr[2] - faixaIr[1]) * aliquotaIr[1]) /100) + (((faixaIr[3] - faixaIr[2]) * aliquotaIr[2]) /100) + (((salario - faixaIr[3]) * aliquota[3]) /100)).toFixed(2);

						valoresIr[0].innerHTML = (((faixaIr[1] - faixaIr[0]) * aliquotaIr[0]) /100).toFixed(2);
						valoresIr[1].innerHTML = (((faixaIr[2] - faixaIr[1]) * aliquotaIr[1]) /100).toFixed(2);
						valoresIr[2].innerHTML = (((faixaIr[3] - faixaIr[2]) * aliquotaIr[2]) /100).toFixed(2);
						valoresIr[3].innerHTML = (((salario - faixaIr[3]) * aliquotaIr[3]) /100).toFixed(2);
					}
				}
			}
		}
	}
	console.log(Ir);
	totalIr[0].innerHTML = ((Ir / salario) * 100).toFixed(2);
	totalIr[1].innerHTML = Ir;
}

function limpaCampo() {

	total[0].innerHTML = 0;
	total[1].innerHTML = 0;
	valoresInss[0].innerHTML = 0;
	valoresInss[1].innerHTML = 0;
	valoresInss[2].innerHTML = 0;
	valoresInss[3].innerHTML = 0;
	valoresIr[0].innerHTML = 0;
	valoresIr[1].innerHTML = 0;
	valoresIr[2].innerHTML = 0;
	valoresIr[3].innerHTML = 0;

}




	// getElementsyId("aliquotaEfetiva").innerHTML = `Alíquota Efetiva: ${(((inss / salarioBruto) * 100).toFixed(2))}%`;




// inss funciona pq o valor vem direto do html mas o ir não pois o valor sai do calculo do inss ( arrumar )


//--------------------------------------------------------------------------------------------------------------------------------------------------------

