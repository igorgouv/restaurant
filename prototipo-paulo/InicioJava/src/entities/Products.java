package entities;

public class Products {
    private String name;
    private double price;

    public Products(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrince() {
        return price;
    }

    public void setPrince(double price) {
        this.price = price;
    }
}
