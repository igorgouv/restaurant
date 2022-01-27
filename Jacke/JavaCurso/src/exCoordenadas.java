import java.util.Scanner;

public class exCoordenadas {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite o valor de x:");
        int x = sc.nextInt();
        System.out.println("Digite o valor de y:");
        int y = sc.nextInt();

        while (x != 0 && y != 0){
            if (x < 0 && y > 0){
                System.out.println("Segundo quadrante!");
                System.out.println("Digite o valor de x:");
                x = sc.nextInt();
                System.out.println("Digite o valor de y:");
                y = sc.nextInt();
            }
            else if (x > 0 && y > 0){
                System.out.println("Primeiro quadrante!");
                System.out.println("Digite o valor de x:");
                x = sc.nextInt();
                System.out.println("Digite o valor de y:");
                y = sc.nextInt();
            }
            else if (x < 0 && y < 0){
                System.out.println("Terceiro quadrante!");
                System.out.println("Digite o valor de x:");
                x = sc.nextInt();
                System.out.println("Digite o valor de y:");
                y = sc.nextInt();
            }
            else {
                System.out.println("Quarto quadrante!");
                System.out.println("Digite o valor de x:");
                x = sc.nextInt();
                System.out.println("Digite o valor de y:");
                y = sc.nextInt();
            }
        }

    }
}
