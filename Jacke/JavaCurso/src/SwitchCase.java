import java.util.Scanner;

public class SwitchCase {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Qual dia da semana?");
        String dia = sc.next();
        String diadasemana;

        switch (dia) {
            case "domingo":
                diadasemana = "domingo";
                break;
            case "segunda":
                diadasemana = "Segunda";
                break;
            case "terca":
                diadasemana = "terca";
                break;
            default:
                diadasemana = "dia inexistente";
                break;
        }

        System.out.println(diadasemana);
    }
}
