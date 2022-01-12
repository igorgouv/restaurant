package entities;

public class Employeee {
    private int id;
    private String name;
    private double salary;

    public Employeee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
    public double increaseSalary(double p){
        this.salary += salary * (p/100);
        return salary;
    }

    public String toString() {
        return id+", "+
                name+", "+
                salary;
    }
}
