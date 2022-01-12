package exercicios;

import entities.Employee;

import java.util.Scanner;

public class AlmentoDeSalario {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Employee employee = new Employee();
        System.out.print("Name: ");
        employee.Name = sc.nextLine();
        System.out.print("Gross salary: ");
        employee.GrossSalary = sc.nextDouble();
        System.out.print("Tax: ");
        employee.Tax = sc.nextDouble();

        System.out.println("Employee: " + employee + String.format("%.2f", employee.netSalary()));
        System.out.println("");
        System.out.print("Which percentage to increase salary? ");
        double percentage = sc.nextDouble();
        employee.increaseSalary(percentage);
        System.out.print("");
        System.out.println("Updated data: " + employee + String.format("%.2f", employee.NetSalary));

    }
}
