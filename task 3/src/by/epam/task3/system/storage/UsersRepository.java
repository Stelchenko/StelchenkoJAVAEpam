package by.epam.task3.system.storage;

import by.epam.task3.system.entities.User;

import java.util.ArrayList;
import java.util.List;

public class UsersRepository {
    private static UsersRepository repository;
    private List<User> users;

    private UsersRepository() {
        users = new ArrayList<>();
        users.add(new User("Stelchenko", "StelchenkoAV@gmail.com", "Password1234"));
    }

    public static synchronized UsersRepository getRepository() {
        if (repository == null) {
            repository = new UsersRepository();
        }
        return repository;
    }

    public User getUser(String login) {
        int index = getUserIndex(login);
        if (index != -1) {
            return users.get(index);
        }
        return null;
    }

    public boolean addUser(User user) {
        if (getUserIndex(user.getLogin()) == -1) {
            users.add(user);
            return true;
        }
        return false;
    }

    public boolean isUserExist(String login, String password) {
        int index = getUserIndex(login);
        if (index != -1) {
            return users.get(index).getPassword().equals(password);
        }
        return false;
    }

    /**
     * finds out whether a login is available
     * @param login user's login
     * @return returns a boolean value
     */
    public boolean isLoginAvailable(String login) {
        for (var user : users) {
            if (user.getLogin().equals(login)) {
                return false;
            }
        }
        return true;
    }

    public boolean isEmailAvailable(String email) {
        for (var user : users) {
            if (user.getEmail().equals(email)) {
                return false;
            }
        }
        return true;
    }

    private int getUserIndex(String login) {
        for (int index = 0; index < users.size(); index++) {
            if (users.get(index).getLogin().equals(login)) {
                return index;
            }
        }
        return -1;
    }
}
