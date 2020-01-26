package by.epam.task3.system;

import by.epam.task3.system.entities.User;
import org.json.simple.JSONObject;

@SuppressWarnings("unchecked")
public class JsonConverter {

    public static User getUser(JSONObject jsonObject) {
        String login = jsonObject.getOrDefault("login", "none").toString();
        String email = jsonObject.getOrDefault("email", "none").toString();
        String password = jsonObject.getOrDefault("password", "none").toString();

        return new User(login, email, password);
    }

    public static JSONObject getJsonUser(User user) {
        JSONObject jsonUser = new JSONObject();
        jsonUser.put("login", user.getLogin());
        jsonUser.put("email", user.getEmail());
        jsonUser.put("password", user.getPassword());

        return jsonUser;
    }
}
