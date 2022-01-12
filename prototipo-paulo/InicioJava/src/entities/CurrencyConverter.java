package entities;

public class CurrencyConverter {
    public static double converter(double price, double bought){
        bought += (bought * 0.06);
        double converter = (price * bought) ;
        return converter;
    }
}
