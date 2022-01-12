package exercicios;

import entities.Employeee;
import entities.Mesas;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class restalrante {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Mesas> mesas = new ArrayList<>();


        int n = 0;
        String nome;
        int mesa = 0;

        System.out.println("Seja bem vindo ao La Forneria");
        while (mesa == 0) {
            System.out.print("O senhor tem reserva? (y/n)");
            String reserv = sc.nextLine();
            if (reserv.equals("n")) {
                System.out.print("gostaria de reservar uma mesa? (y/n)");
                String reserva = sc.nextLine();
                if (reserva.equals("y")) {
                    System.out.print("Quantas mesas serão reaservadas? ");
                    n = sc.nextInt();
                    for (int i = 1; i <= n; i++) {
                        sc.nextLine();
                        System.out.println("Rent #" + i + ":");
                        System.out.print("Name: ");
                        nome = sc.nextLine();
                        System.out.print("Email: ");
                        String email = sc.nextLine();
                        System.out.print("mesa: ");
                        mesa = sc.nextInt();
                        mesas.add(new Mesas(nome, email, mesa));
                    }
                }
            } else {
                System.out.println("Difite o numero da mesa por favor para conferirmos a sua reserva");
                int vericicadorDereserva = sc.nextInt();
                String verificador = validador(mesas, vericicadorDereserva);
                if (verificador == null) {
                    System.out.println("Desculpe o senhor nao tem reserva por favor faca uma.");
                } else {
                    System.out.println("Esta aqui! seja bem vindo senhor " + verificador);
                }
            }
        }

        System.out.println(mesas.get(0).getMesa());

        System.out.println("Difite o numero da mesa por favor para conferirmos a sua reserva");
        int vericicadorDereserva = sc.nextInt();
        String verificador = validador(mesas, vericicadorDereserva);
        if (verificador == null) {
            System.out.println("Desculpe o senhor nao tem reserva por favor faca uma.");
        } else {
            System.out.println("Esta aqui! seja bem vindo senhor " + verificador);
        }
    }
    public static String validador(List<Mesas> list, int mesa){
        for (int i =0; i< list.size(); i++){
            if (list.get(i).getMesa() == mesa){
                return  list.get(i).getName();
            }
        }
        return null;
    }
}


