package exercicios;

import entities.Cliente;

import java.util.Scanner;

public class Banco {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Cliente cliente;


        System.out.print("Enter account number: ");
        int account = sc.nextInt();
        sc.nextLine();
        System.out.print("Enter account holder: ");
        String holder = sc.nextLine();



        System.out.print("Is there na initial deposit (y/n)? ");
        char num = sc.next().charAt(0);
        if (num == 'y'){
            System.out.print("Enter initial deposit value:");
            double deposit = sc.nextDouble();
             cliente = new Cliente(account,holder,deposit);
        }
        else {
            cliente = new Cliente(account,holder);
        }
        double saldo = cliente.getDeposit();
        System.out.println();
        System.out.println("Account data");
        System.out.println(cliente);
        System.out.println();

        System.out.print("Enter a deposit value: ");
        double deposit = sc.nextDouble();
        cliente.depositar(deposit);
        System.out.println("Updated account data:");
        System.out.println(cliente);
        System.out.println();

        System.out.print("Enter a withdraw value:");
        double saque = sc.nextDouble();
        cliente.sacar(saque);
        System.out.println("Updated account data:");
        System.out.println(cliente);




    }
}