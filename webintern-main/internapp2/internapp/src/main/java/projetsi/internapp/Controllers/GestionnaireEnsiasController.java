package projetsi.internapp.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetsi.internapp.entities.GestionnaireEnsias;
import projetsi.internapp.services.GestionnaireEnsiasService;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
@RestController
@RequestMapping("/api/gestionnaires-ensias")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {
    RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS
})


public class GestionnaireEnsiasController {

    @Autowired
    private GestionnaireEnsiasService gestionnaireService;

    @GetMapping
    public ResponseEntity<List<GestionnaireEnsias>> getAllGestionnaires() {
        List<GestionnaireEnsias> gestionnaires = gestionnaireService.getAllGestionnaires();
        return ResponseEntity.ok(gestionnaires);
    }

    @PostMapping
    public ResponseEntity<GestionnaireEnsias> createGestionnaire(@RequestBody GestionnaireEnsias gestionnaire) {
        try {
            GestionnaireEnsias savedGestionnaire = gestionnaireService.saveGestionnaire(gestionnaire);
            return ResponseEntity.ok(savedGestionnaire);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGestionnaire(@PathVariable Long id) {
        if (gestionnaireService.getGestionnaireById(id).isPresent()) {
            gestionnaireService.deleteGestionnaireById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<GestionnaireEnsias> getGestionnaireById(@PathVariable Long id) {
        return gestionnaireService.getGestionnaireById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}