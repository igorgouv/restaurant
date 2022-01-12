package exercicios;

import entities.Mesas;
import entities.Quartos;

import java.util.Scanner;

public class restalrante {
    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);

        Mesas[] vect = new Mesas[9];
        System.out.print("How many table will be rented? ");
        int n = sc.nextInt();

        for (int i = 1; i<=n; i++){
            sc.nextLine();
            System.out.println("Rent #" + i + ":");
            System.out.print("Name: ");
            String name = sc.nextLine();
            System.out.print("Email: ");
            String email = sc.nextLine();
            System.out.print("room: ");
            int room = sc.nextInt();
            vect[room] = new Mesas(name,email);
        }
        System.out.println("Seja be,");

        System.out.println();
        System.out.println("Busy rooms:");
        for (int i= 0;i< vect.length;i++){
            if (vect[i] != null){
                System.out.printf("%d: %s%n",i  , vect[i]);
            } 
        }
    }
}
