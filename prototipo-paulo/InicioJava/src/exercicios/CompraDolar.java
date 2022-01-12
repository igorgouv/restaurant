package exercicios;

import entities.CurrencyConverter;

import java.util.Scanner;

public class CompraDolar {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("What is the dollar price? ");
        double price = sc.nextDouble();
        System.out.print("How many dollars will de bought? ");
        double bought = sc.nextDouble();
        double total = CurrencyConverter.converter(price, bought);
        System.out.printf("Amount to be pain in reais = %.2f", total);
    }
}
