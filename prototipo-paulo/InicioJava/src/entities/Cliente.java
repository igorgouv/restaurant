package entities;

public class Cliente {
    private int account;
    private String holder;
    private double deposit;

    public int getAccount() {
        return account;
    }

    public void setHolder(String holder) {
        this.holder = holder;
    }

    public String getHolder() {
        return holder;
    }
      
    public double getDeposit() {
        return deposit;
    }

    public Cliente(int account , String holder){
        this.account= account;
        this.holder= holder;
    }
    public Cliente(int account , String holder, double inicialDeposit){
        this.account= account;
        this.holder= holder;
        depositar(inicialDeposit);
    }
    public void depositar( double deposit){
        this.deposit += deposit;
    }
    public void sacar(double saque){
        this.deposit-= (saque +5);
    }

    public String toString(){
        return "Account "
                + account
                + ", holder "
                + holder
                + ", balance $"
                + String.format("%.2f",deposit);
    }


}
