package exercicios;

import entities.Mesas;
import entities.Pratos;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class restalrante{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Mesas> mesas = new ArrayList<>();
        List<Pratos> pedidos = new ArrayList<>();

        List<Pratos> cardapio = new ArrayList<>();
        String prato1 = "pizza de camarao";
        Double preco1 = 40.0;
        Integer id1 = 1;
        cardapio.add(new Pratos(id1, prato1, preco1));
        String prato2 = "pizza de nordestina";
        Double preco2 = 35.0;
        Integer id2 = 2;
        cardapio.add(new Pratos(id2, prato2, preco2));
        String prato3 = "pizza de calabresa";
        Double preco3 = 22.0;
        Integer id3 = 3;
        cardapio.add(new Pratos(id3, prato3, preco3));


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
                    sc.nextLine();
                }
            } else {
                System.out.println("Difite o seu Email por favor para conferirmos a sua reserva");
                String vericicadorDereserva = sc.nextLine();
                String verificador = validador(mesas, vericicadorDereserva);
                if (verificador == null) {
                    System.out.println("Desculpe o senhor nao tem reserva por favor faca uma.");
                    sc.nextLine();
                } else {
                    System.out.println("Esta aqui! seja bem vindo senhor " + verificador);
                }
            }
        }

        System.out.println("Difite o seu Email por favor para conferirmos a sua reserva");
        String vericicadorDereserva = sc.nextLine();
        String verificador = validador(mesas, vericicadorDereserva);
        if (verificador == null) {
            System.out.println("Desculpe o senhor nao tem reserva por favor faca uma.");
        } else {
            System.out.println("Esta aqui! seja bem vindo senhor " + verificador);
        }
        System.out.println("esse aqui e o nosso cardapio!");
        for (Pratos prato : cardapio) {
            System.out.println(prato.toString());
        }
        String naoPedir = null;
        System.out.println("Oque voce gostaria de pedir?");
        System.out.println("digite apenas o numero");
        Integer pedido = sc.nextInt();
        sc.nextLine();
        primeiroPedido(cardapio, pedido, pedidos);
        System.out.println("gostaria de pedir mais alguma coisa?(y/n)");
        naoPedir = sc.nextLine();
        System.out.println("vamos la");

        while (naoPedir.equals("y")) {
            System.out.println("digite apenas o numero");
            pedido = sc.nextInt();
            sc.nextLine();
            pedidos.add(carrinho(cardapio, pedido, pedidos)) ;
            System.out.println("gostaria de pedir mais alguma coisa?(y/n)");
            naoPedir = sc.nextLine();
            if (naoPedir.equals("y")) {
                System.out.println("vamos la");
            } else {
                naoPedir = "n";
            }
        }

        System.out.println("carrinho");
        for (Pratos test : pedidos) {
            System.out.println(test.toStringCarrinho());
        }

    }
    public static String validador(List<Mesas> list, String email){
        for (int i =0; i< list.size(); i++){
            if (list.get(i).getEmail().equals(email)){
                return  list.get(i).getName();
            }
        }
        return null;
    }

    public static Pratos primeiroPedido(List<Pratos> list, Integer pedido, List<Pratos> pedidos){
        for (int i =0; i< list.size(); i++){
            if (list.get(i).getId()== pedido){
                pedidos.add(new Pratos(list.get(i).getId(),list.get(i).getNome(),list.get(i).getPreco(),list.get(i).getQuantidade()));
            }
        }
        return null;
    }
    public static Pratos carrinho(List<Pratos> list, Integer pedido, List<Pratos> pedidos){
        for (int i =0; i< list.size(); i++){
            if (list.get(i).getId()== pedido){
                for (int j =0; j< pedidos.size(); i++){
                    if (pedidos.get(j).getId()== pedido){
                        pedidos.get(j).maiscomida();
                    }
                    else {
                        pedidos.add(new Pratos(list.get(i).getId(),list.get(i).getNome(),list.get(i).getPreco(),list.get(i).getQuantidade()));
                    }
                }
            }
        }
        return null;
    }

}


