import java.util.Scanner;

public class FixacaoWhile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
//        System.out.println("Digite a senha que deseja criar:");
//        String senha = sc.next();

        System.out.println("Digite a senha criada para acessar:");
        int login = sc.nextInt();

        while (login != 2002) {
            System.out.println("Senha incorreta, digite novamente.");
            login = sc.nextInt();
        }
        System.out.println("Acesso permitido!");



    }
}
