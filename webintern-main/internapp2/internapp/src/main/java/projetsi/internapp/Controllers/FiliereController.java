package projetsi.internapp.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import projetsi.internapp.services.FiliereService;
import projetsi.internapp.entities.Filiere;

import java.util.List;

@RestController
public class FiliereController {

    @Autowired
    private FiliereService filiereService;

    @GetMapping("/generate-filiere-data")
    public String generateFiliereData() {
        filiereService.generateRandomFiliereData(10); // Générer 10 entrées
        return "Filiere data generated successfully!";
    }

    @GetMapping("/api/filieres")
    public List<Filiere> getAllFilieres() {
        return filiereService.getAllFilieres();
    }
}
