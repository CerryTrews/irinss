public class TesteIR2 {

	public static void main(String[] args) {

		double salario = 4000.0;
		double aliquota = 1;
		double deducao = 0.0;

		if (salario >= 1990.0 && salario <= 2800.0) {

			aliquota = aliquota * 7.5;
			deducao = deducao + 142;
			double valorIr = ((salario - deducao) * aliquota) / 100;

			System.out.println("O valor do seu imposto de renda é de R$" + valorIr);
			System.out.println("Sua aliquota é de 7.5%");

		} else if (salario >= 2800.01 && salario <= 3751.0) {

			aliquota = aliquota * 15;
			deducao = deducao + 350;
			double valorIr = ((salario - deducao) * aliquota) / 100;

			System.out.println("O valor do seu imposto de renda é de R$" + valorIr);
			System.out.println("Sua aliquota é de 15%");

		} else if (salario >= 3751.01 && salario <= 4664.00) {

			aliquota = aliquota * 22.5;
			deducao = deducao + 636;
			double valorIr = ((salario - deducao) * aliquota) / 100;

			System.out.println("O valor do seu imposto de renda é de R$" + valorIr);
			System.out.println("Sua aliquota é de 22.5%");

		} else if (salario >= 4664.01 && salario <= (4664.01 + 1990.0)) {
			aliquota = aliquota * (22.5 + 7.5);

			deducao = deducao + (636 + 142);
			double valorIr = ((salario - deducao) * aliquota) / 100;

			System.out.println("O valor do seu imposto de renda é de R$" + valorIr);
			System.out.println("Sua aliquota é de " + aliquota);

		} else if (salario > (4664.01 + 1990.01)) {
			System.out.println("Seu salário é grande demais, BIXO!");

		}
	}
}
