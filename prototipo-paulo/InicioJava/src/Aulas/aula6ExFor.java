package Aulas;

import java.util.Scanner;

public class aula6ExFor {
    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);

        int x = sc.nextInt();

//        for (int i = 1; i<=x; i = i+2) {
//            System.out.println(i);
//        }

//        int in = 0;
//        int out =0;
//
//        for (int i = 0; i < x; i++){
//            int y = sc.nextInt();
//            if (y>=10 &&y<=20){
//                in = in+1;}
//            else {
//                out = out +1;
//            }
//        }
//        System.out.println(in + " in");
//        System.out.println(out + " out");

        for (int i = 0; i < x; i++){
            double y = sc.nextDouble();
            double z = sc.nextDouble();

            if (z !=0){
                double d = y/z;
            System.out.println( d);}
            else {
                System.out.println("divisao indisposnivel");
            }
        }
    }
}
