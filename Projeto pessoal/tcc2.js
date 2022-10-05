let salarioBruto = 5292.00
let dependente = 3
let pensao = 900

//--------------------------------------------------------------------------------------------------------------------------------------------------------

let aliquotaIr = [7.5, 15, 22.5, 27.5]
let aliquotaInss = [7.5, 9, 12, 14]
let aliquota = [aliquotaIr, aliquotaInss]
let faixaIr = [1903.98, 2826.65, 3751.05, 4664.68]
let faixaInss = [1212.0, 1212.0, 2427.37, 3641.04]
let faixa = [faixaIr, faixaInss]
let inss;
let Ir;

//--------------------------------------------------------------------------------------------------------------------------------------------------------

function imprime(texto) {
	console.log(texto);
}
function tabela(texto) {
	console.table(texto);
}

if (salarioBruto <= faixa[1][0]) {
	inss = (salarioBruto * aliquota[1][0]) / 100
	
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

if (salarioBruto <= faixa[1][0]) {

	valoresInss = [
		{
			"Aliquota 1(%)": `${aliquota[1][0]}%`,
			"Aliquota Efetiva(%)": `R$${((inss / salarioBruto) * 100).toFixed(2)}%`,
			"Aliquota 1(R$)": `R$${((salarioBruto * aliquota[1][0]) / 100).toFixed(2)}`,
			"INSS": `R$${inss.toFixed(2)}`
		}
	]

} else {
	if (salarioBruto > faixa[1][0] && salarioBruto <= faixa[1][2]) {

		valoresInss = [
			{
				"Aliquota 1(%)": `${aliquota[1][0]}%`,
				"Aliquota 2(%)": `${aliquota[1][1]}%`,
				"Aliquota Efetiva(%)": `R$${((inss / salarioBruto) * 100).toFixed(2)}%`,
				"Aliquota 1(R$)": `R$${((faixa[1][0] * aliquota[1][0]) / 100).toFixed(2)}`,
				"Aliquota 2(R$)": `R$${(((salarioBruto - faixa[1][0]) * aliquota[1][1]) / 100).toFixed(2)}`,
				"INSS": `R$${inss.toFixed(2)}`
			}
		]

	} else {
		if (salarioBruto >= faixa[1][2] && salarioBruto <= faixa[1][3]) {

			valoresInss = [
				{
					"Aliquota 1(%)": `${aliquota[1][0]}%`,
					"Aliquota 2(%)": `${aliquota[1][1]}%`,
					"Aliquota 3(%)": `${aliquota[1][2]}%`,
					"Aliquota Efetiva(%)": `R$${((inss / salarioBruto) * 100).toFixed(2)}%`,
					"Aliquota 1(R$)": `R$${((faixa[1][0] * aliquota[1][0]) / 100).toFixed(2)}`,
					"Aliquota 2(R$)": `R$${(((faixa[1][2] - faixa[1][0]) * aliquota[1][1]) / 100).toFixed(2)}`,
					"Aliquota 3(R$)": `R$${(((salarioBruto - faixa[1][2]) * aliquota[1][2]) / 100).toFixed(2)}`,
					"INSS": `R$${inss.toFixed(2)}`
				}
			]

		} else {
			if (salarioBruto > faixa[1][3]) {
				valoresInss = [
					{
						"Aliquota 1(%)": `${aliquota[1][0]}%`,
						"Aliquota 2(%)": `${aliquota[1][1]}%`,
						"Aliquota 3(%)": `${aliquota[1][2]}%`,
						"Aliquota 4(%)": `${aliquota[1][3]}%`,
						"Aliquota Efetiva(%)": `R$${((inss / salarioBruto) * 100).toFixed(2)}%`,
						"Aliquota 1(R$)": `R$${((faixa[1][0] * aliquota[1][0]) / 100).toFixed(2)}`,
						"Aliquota 2(R$)": `R$${(((faixa[1][2] - faixa[1][0]) * aliquota[1][1]) / 100).toFixed(2)}`,
						"Aliquota 3(R$)": `R$${(((faixa[1][3] - faixa[1][2]) * aliquota[1][2]) / 100).toFixed(2)}`,
						"Aliquota 4(R$)": `R$${(((salarioBruto - faixa[1][3]) * aliquota[1][2]) / 100).toFixed(2)}`,
						"INSS": `R$${inss.toFixed(2)}`
					}
				]
			}
		}
	}
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------

if (dependente > 0 && pensao > 0) {
	salario = salarioBruto - inss - (dependente * 189.59) - pensao
	imprime(`
Salário bruto = R$${salarioBruto}`)
	imprime(`
Salário com dedução do INSS = R$${((salarioBruto - inss)).toFixed(2)}

`)

} else {
	if (dependente > 0 && pensao == 0) {
		salario = salarioBruto - inss
		imprime(`
Salário bruto = R$${salarioBruto}`)
		imprime(`
Salário com dedução do INSS = R$${((salarioBruto - inss)).toFixed(2)}

`)

	} else {
		if (dependente == 0 && pensao > 0) {
			salario = salarioBruto - pensao
			imprime(`
Salário bruto = R$${salarioBruto}`)
			imprime(`
Salário com dedução do INSS = R$${((salarioBruto - inss)).toFixed(2)}

`)
		} else {
			if (dependente === 0 && pensao === 0) {
				salario = salarioBruto - inss
				imprime(`
Salário bruto = R$${salarioBruto}`)
				imprime(`
Salário com dedução do INSS = R$${((salarioBruto - inss)).toFixed(2)}`)

			}
		}
	}
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

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


// ------------------------------------------------------------------------------------------------------------------------------------------------------

if (salario <= faixa[0][0]) {
	imprime(`
Você está isento do imposto de renda.
	`)
} else {
	if (salario > faixa[0][0] && salario <= faixa[0][1]) {
		valoresIr = [
			{
				"Aliquota 1(%)": `${aliquota[0][0]}%`,
				"Aliquota Efetiva(%)": `R$${((Ir / salario) * 100).toFixed(2)}%`,
				"Aliquota 1(R$)": `R$${(((salario - faixa[0][0]) * aliquota[0][0]) / 100).toFixed(2)}`,
				"Imposto de Renda": `R$${Ir.toFixed(2)}`
			}
		]
	} else {
		if (salario > faixa[0][1] && salario <= faixa[0][2]) {
			valoresIr = [
				{
					"Aliquota 1(%)": `${aliquota[0][0]}%`,
					"Aliquota 2(%)": `${aliquota[0][1]}%`,
					"Aliquota Efetiva(%)": `R$${((Ir / salario) * 100).toFixed(2)}%`,
					"Aliquota 1(R$)": `R$${(((faixa[0][1] - faixa[0][0]) * aliquota[0][0]) / 100).toFixed(2)}`,
					"Aliquota 2(R$)": `R$${(((salario - faixa[0][1]) * aliquota[0][1]) / 100).toFixed(2)}`,
					"Imposto de Renda": `R$${Ir.toFixed(2)}`
				}
			]
		} else {
			if (salario >= faixa[0][2] && salario <= faixa[0][3]) {
				valoresIr = [
					{
						"Aliquota1 (%)": `${aliquota[0][0]}%`,
						"Aliquota 2(%)": `${aliquota[0][1]}%`,
						"Aliquota 3(%)": `${aliquota[0][2]}%`,
						"Aliquota Efetiva(%)": `R$${((Ir / salario) * 100).toFixed(2)}%`,
						"Aliquota 1(R$)": `R$${(((faixa[0][1] - faixa[0][0]) * aliquota[0][0]) / 100).toFixed(2)}`,
						"Aliquota 2(R$)": `R$${(((faixa[0][2] - faixa[0][1]) * aliquota[0][1]) / 100).toFixed(2)}`,
						"Aliquota 3(R$)": `R$${(((salario - faixa[0][2]) * aliquota[0][2]) / 100).toFixed(2)}`,
						"Imposto de Renda": `R$${Ir.toFixed(2)}`
					}
				]
			} else {
				if (salario > faixa[0][3]) {
					valoresIr = [
						{
							"Aliquota 1(%)": `${aliquota[0][0]}%`,
							"Aliquota 2(%)": `${aliquota[0][1]}%`,
							"Aliquota 3(%)": `${aliquota[0][2]}%`,
							"Aliquota 4(%)": `${aliquota[0][3]}%`,
							"Aliquota Efetiva(%)": `R$${((Ir / salario) * 100).toFixed(2)}%`,
							"Aliquota 1(R$)": `R$${(((faixa[0][1] - faixa[0][0]) * aliquota[0][0]) / 100).toFixed(2)}`,
							"Aliquota 2(R$)": `R$${(((faixa[0][2] - faixa[0][1]) * aliquota[0][1]) / 100).toFixed(2)}`,
							"Aliquota 3(R$)": `R$${(((faixa[0][3] - faixa[0][2]) * aliquota[0][2]) / 100).toFixed(2)}`,
							"Aliquota 4(R$)": `R$${(((salario - faixa[0][3]) * aliquota[0][3]) / 100).toFixed(2)}`,
							"Imposto de Renda": `R$${Ir.toFixed(2)}`
						}
					]
				}
			}
		}
	}
}

if (dependente > 0 && pensao > 0 && salario > faixa[0][0]) {

	imprime(`Número de dependentes: ${dependente}
Valor deduzido dos dependentes: R$${(dependente * 189.59).toFixed(2)}
Valor deduzido com a pensão alimentícia: R$${pensao.toFixed(2)}
				`)
} else {
	if (dependente > 0 && pensao == 0 && salario > faixa[0][0]) {

		imprime(`Número de dependentes: ${dependente}
Valor deduzido dos dependentes: R$${(dependente * 189.59).toFixed(2)}
				`)
	}
}

if (salario <= faixa[0][0]) {
	tabela(valoresInss)
} else {

	// let listaValores = [...valoresInss, ...valoresIr]

	// tabela(listaValores)
	tabela(valoresInss)
	tabela(valoresIr)
}
