package exercicios;

import entities.Rectangle;

import java.util.Scanner;

public class programRectangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Rectangle rectangle = new Rectangle();
        System.out.println("Enter rectangle width and height;");
        rectangle.height = sc.nextDouble();
        rectangle.width = sc.nextDouble();

        System.out.println(rectangle);

    }
}
