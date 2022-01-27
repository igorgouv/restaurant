import java.util.Scanner;

public class exCombustivel {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Seja Bem-vindo! \nEscolha uma das opcoes abaixo.");
        System.out.println("1. Álcool\n2. Gasolina\n3. Diesel\n4. Fim");

        int x = sc.nextInt();

        int alcool = 0;
        int gasolina = 0;
        int diesel = 0;


        while (x < 4) {

            if (x == 1) {
                alcool += 1;
                System.out.println("Deseja abastecer novamente?");
                System.out.println("1. Álcool\n2. Gasolina\n3. Diesel\n4. Fim");
                x = sc.nextInt();

            } else if (x == 2) {
                gasolina += 1;
                System.out.println("Deseja abastecer novamente?");
                System.out.println("1. Álcool\n2. Gasolina\n3. Diesel\n4. Fim");
                x = sc.nextInt();
            }
            else if (x == 3){
                diesel += 1;
                System.out.println("Deseja abastecer novamente?");
                System.out.println("1. Álcool\n2. Gasolina\n3. Diesel\n4. Fim");
                x = sc.nextInt();
            }
            else {
                System.out.println("Opss! Nao temos essa opcao. Digite uma opcao valida.");
                System.out.println("1. Álcool\n2. Gasolina\n3. Diesel\n4. Fim");
                x = sc.nextInt();
            }
        }

        System.out.println("MUITO OBRIGADO!");
        System.out.println("Alcool:" + alcool);
        System.out.println("Gasolina:" + gasolina);
        System.out.println("Diesel:" + diesel);
    }
}