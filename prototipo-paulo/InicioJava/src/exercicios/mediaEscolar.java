package exercicios;

import entities.Aluno;

import java.util.Scanner;

public class mediaEscolar {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Aluno aluno = new Aluno();
        aluno.Nome = sc.nextLine();
        aluno.M1 = sc.nextDouble();
        aluno.M2 = sc.nextDouble();
        aluno.M3 = sc.nextDouble();

        aluno.SomaM();
        System.out.println(aluno);
        if (aluno.MF>=60.00){
            System.out.println("PASS");
        }
        else {
            double missing = 60.00 - aluno.MF;
            System.out.println("FAILED");
            System.out.printf("MISSING "+ missing + " POINTS" );
        }
    }
}
