package entities;

public class Mesas {
        private String nome;
        private String email;
        private int mesa;

        public Mesas(String name, String email, int mesa) {
            this.nome = name;
            this.email = email;
            this.mesa = mesa;

        }

        public String getName() {
            return nome;
        }

        public void setName(String nome) {
            this.nome = nome;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public int getMesa() {return mesa;}

        public void setMesa(int mesa) {this.mesa = mesa;}

    @Override
        public String toString() {
            return nome +
                    ", " +
                    email ;
        }
}
