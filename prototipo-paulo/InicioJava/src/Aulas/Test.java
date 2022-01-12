package Aulas;

public class Test {
    public static void main(String[] args) {
    System.out.println("Hello World!!");
    int idade = 20;
    double altura = 1.70786563;
    double x = 52.63473;
    String nome = "Maria";
    double renda = 4000.0;
    System.out.printf("%.2f%n", altura);
    System.out.println(idade);
    System.out.println("RESULTADO = " + x + " METROS");
    System.out.printf("RESULTADO = %.2f metros%n", x);
    System.out.printf("%s tem %d anos e ganha R$ %.2f reais%n", nome, idade, renda);

    String product1 = "Computer";
    String product2 = "Office desk";
    int age = 30;
    int code =5290;
    char gender = 'F';

    double price1 = 2100.0;
    double price2 = 650.50;
    double measure = 53.234567;

    System.out.println("Products: \n "+ product1+", which prince is $"+ price1 + "\n Office disk, which is $"+ price2 );
    System.out.printf("Record: %d years old, code %d and gender: %c",age, code, gender);
    System.out.printf("Measure with eight decimal place: %f \n Rouded (three decimal place): %.3f \n US decimal point: %.3f", measure, measure, measure);
    }
}
