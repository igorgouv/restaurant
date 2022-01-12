package Aulas;

import entities.Triangle;

import java.util.Scanner;

public class aula8ComPOO {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Triangle x, y;
        x = new Triangle();
        y = new Triangle();

        System.out.println("Enter the measures of triangle X: ");
        x.a = sc.nextDouble();
        x.a = sc.nextDouble();
        x.c = sc.nextDouble();
        System.out.println("Enter the measures of triangle Y: ");
        y.a = sc.nextDouble();
        y.b = sc.nextDouble();
        y.b = sc.nextDouble();

        double areaX = x.areaT();
        double areay = y.areaT();

        System.out.printf("Triangle X area: %.4f%n", areaX);
        System.out.printf("Triangle y area: %.4f%n", areay);

        if (areaX > areay){
            System.out.println("Larger area: X ");
        }
        else {
            System.out.println("Larger area: Y ");
        }
        sc.close();
    }
}
