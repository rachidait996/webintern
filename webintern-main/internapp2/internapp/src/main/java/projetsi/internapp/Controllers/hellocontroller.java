package projetsi.internapp.Controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class hellocontroller {
    
    @GetMapping(path = "/test")
    public String hello(){

        return "hello";
        }
}
