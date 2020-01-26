package by.epam.task3.servlets;

import by.epam.task3.system.JsonConverter;
import by.epam.task3.system.entities.User;
import by.epam.task3.system.storage.UsersRepository;
import org.json.simple.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/login")
@SuppressWarnings("unchecked")
public class AuthorizationServlet extends AjaxServlet {
    private UsersRepository repository;

    @Override
    public void init() throws ServletException {
        super.init();
        repository = UsersRepository.getRepository();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        JSONObject requestObject = getRequest(req);
        JSONObject responseObject = new JSONObject();
        if (requestObject != null) {
            String action = requestObject.getOrDefault("action", "none").toString();
            switch (action) {
                case "signIn":
                    doSignIn(JsonConverter.getUser(requestObject), responseObject);
                    break;
                case "signUp":
                    doSignUp(JsonConverter.getUser(requestObject), responseObject);
                    break;
                default:
                    responseObject.put("status", "null_request");
                    break;
            }
        }
        else {
            responseObject.put("status", "error");
        }
        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("application/json");
        PrintWriter writer = resp.getWriter();
        writer.write(responseObject.toJSONString());
        writer.close();
    }

    private void doSignUp(User user, JSONObject response) {
        if (!repository.isLoginAvailable(user.getLogin())) {
            response.put("status", "login_error");
        }
        else if (!repository.isEmailAvailable(user.getEmail())) {
            response.put("status", "email_error");
        }
        else {
            repository.addUser(user);
            response.put("status", "success");
        }
    }

    private void doSignIn(User user, JSONObject response) {
        if (repository.isUserExist(user.getLogin(), user.getPassword())) {
            response.put("status", "success");
        }
        else {
            response.put("status", "SignIn_error");
        }
    }
}
