package Aulas;

import java.util.Scanner;

public class Aula10 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        double[] vect = new double[n];

        for (int i=0;i<n;i++){
            vect[i] = sc.nextDouble();
        }

        double sam = 0.0;
        for (int i =0; i<n;i++){
            sam += vect[i];
        }
        double avg = sam/n;
        System.out.println("AVERAGE HEIGHT " + String.format("%.2f", avg));
    }
}
