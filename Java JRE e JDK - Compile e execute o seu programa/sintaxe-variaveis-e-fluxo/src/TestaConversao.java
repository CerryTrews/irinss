
public class TestaConversao {

	public static void main(String[] args) {

		double salario = 1270.50;
		// int valor = salario;
		// Não converte o valor de double para int, apenas o usando o int valor = (int)
		// salario; para converter um valor aproximado.

		int valor = (int) salario;

		System.out.println(valor);

		double idade = 30.0;
		System.out.println("A idade é " + (int) idade + "!");

	}

}
