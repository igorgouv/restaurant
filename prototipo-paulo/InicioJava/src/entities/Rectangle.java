package entities;

public class Rectangle {
    public double width;
    public double height;

    public double area(){
        return width * height;
    }
    public double perimeter(){
        return (width *2) + (height * 2);
    }
    public double diagonal(){
        double d = Math.pow(width,2) +Math.pow(height,2);
        return Math.sqrt(d);
    }

    public String toString(){
        return "AREA = "
                +  String.format("%.2f", area())
                + "\nPERIMETER = "
                + String.format("%.2f", perimeter())
                + "\nDIAGONAL = "
                + String.format("%.2f", diagonal());
    }
}
