package exercicios;

import entities.Employeee;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ExercicoList {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Employeee> emp = new ArrayList<>();

        System.out.print("How many employees Will be registered? ");
        int n = sc.nextInt();
        for (int i=1;i<=n;i++) {
            System.out.println("Employee #"+ i+ ":");
            System.out.print("Id: ");
            Integer id = sc.nextInt();
            sc.nextLine();
            System.out.print("Name: ");
            String name = sc.nextLine();
            System.out.print("Salary: ");
            double salary = sc.nextDouble();
            System.out.println();
            emp.add(new Employeee(id,name,salary));
        }
        System.out.print("Enter the employee id that will have salary increase : ");
        Integer n_id = sc.nextInt();

        Integer pos = position(emp,n_id);
        if (pos == null){
            System.out.println("This id does not exist!");
        }
        else {
            System.out.print("Enter the percentagem: ");
            double percent = sc.nextDouble();
            emp.get(pos).increaseSalary(percent);
        }
        System.out.println();
        System.out.println("List of employees:");
        for(Employeee emp1:emp){
            System.out.println(emp1);
        }
    }



    public static Integer position(List<Employeee> list, int id){
        for (int i =0; i< list.size(); i++){
            if (list.get(i).getId() == id){
                return i;
            }
        }
        return null;
    }
}
