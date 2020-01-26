package by.epam.task3.system.entities;

public class User {
    private String login;
    private String email;
    private String password;

    public User(String login, String email, String password) {
        this.login = login;
        this.email = email;
        this.password = password;
    }

    public String getLogin() {
        return login;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) {
            return true;
        }
        if (object == null) {
            return false;
        }
        if (object.getClass() != User.class) {
            return false;
        }
        User other = (User)object;
        return other.login.equals(this.login) &&
                other.email.equals(this.email) &&
                other.password.equals(this.password);
    }

    @Override
    public int hashCode() {
        return Math.abs(3 * login.hashCode() + 5* email.hashCode() + password.hashCode()) ;
    }
}
