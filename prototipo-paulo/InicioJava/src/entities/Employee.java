package entities;

public class Employee {

    public String Name;
    public double GrossSalary;
    public double Tax;
    public double NetSalary;


    public double netSalary(){
        NetSalary = GrossSalary - Tax;
        return NetSalary;
    }
    public void increaseSalary(double percentagem){
        NetSalary += GrossSalary * (percentagem/100);
    }

    public String toString(){
        return Name
                +","
                + " $ ";
    }
}
