
public class TestaEscopo {
	public static void main(String[] args) {
		System.out.println("Testando condicionais");
		int idade = 18;
		int quantidadePessoas = 1;
		// boolean acompanhado = false;
		// boolean acompanhado = quantidadePessoas >= 2;
		// boolean é apenas para condições true ou false
		boolean acompanhado;

		if (quantidadePessoas >= 2) {
			acompanhado = true;
		} else {
			acompanhado = false;
		}
		if (idade >= 18 && acompanhado == true) {

			// || indica OU no java
			// && indica E no java
			System.out.println("Seja bem vindo");
		} else {
			System.out.println("Infelizmente você não atinge os parametros");

		}

	}
}