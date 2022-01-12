package exercicios;

import java.util.Scanner;

public class aula6Exercico {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

//        String criarsenha, senha;
//
//        System.out.println("Crie uma senha!");
//        System.out.print("DIgite a senha: ");
//        criarsenha = sc.next();
//        System.out.println("Pronto, agora vamos entrar!");
//        System.out.println("Digite sua senha");
//        senha = sc.next();
//        while (!senha.equals(criarsenha)){
//            System.out.println("Senha Invalida");
//            System.out.println("Digite novamente");
//            senha = sc.next();
//        }
//        System.out.println("Acesso Permitido");

        int alcool= 0, gasolina= 0, diesel = 0;

        System.out.println("Seja bem vindo ao melhor posto do Brasil");
        System.out.println("Qual conbustivel voce deseja?\n 1.Alcool \n 2.Gasolina \n 3.Diesel \n 4.finalizar a compra");
        System.out.println("");
        System.out.println("Digite apenas o numero");
        int conbustivel = sc.nextInt();
        while (conbustivel != 4){
            if (conbustivel == 1){
                alcool = alcool + 1;
                System.out.println("Voce escolheu Alcool");
                System.out.println("Deseja abastecer novamente?");
                conbustivel = sc.nextInt();}
            else if (conbustivel == 2){
                gasolina = gasolina + 1;
                System.out.println("Voce escolheu Gasolina");
                System.out.println("Deseja abastecer novamente?");
                conbustivel = sc.nextInt();}
            else if (conbustivel == 3) {
                diesel = diesel + 1;
                System.out.println("Voce escolheu Diesel");
                System.out.println("Deseja abastecer novamente?");
                conbustivel = sc.nextInt();}
            else {
                System.out.println("Numero invalido");
                System.out.println("Digite apenas os numeros  1,  2,  3,  4");
                conbustivel = sc.nextInt();
            }
        }
        System.out.printf("MUITO OBRIGADO \n Alcool %d \n Gasolina %d \n Diesel %d \n", alcool, gasolina,diesel);
        System.out.println("VOLTE SEMPRE");
    }

}