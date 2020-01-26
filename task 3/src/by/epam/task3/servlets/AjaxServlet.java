package by.epam.task3.servlets;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.IOException;

/**
 * describes http servlets for ajax requests
 */
public abstract class AjaxServlet extends HttpServlet {
    protected JSONObject getRequest(HttpServletRequest request) {
        try {
            BufferedReader reader = request.getReader();
            StringBuilder builder = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                builder.append(line);
            }
            JSONParser parser = new JSONParser();
            return (JSONObject) parser.parse(builder.toString());
        }
        catch (IOException | ParseException e) {
            return null;
        }
    }
}
