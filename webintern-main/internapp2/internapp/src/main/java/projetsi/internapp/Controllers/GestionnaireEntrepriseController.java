package projetsi.internapp.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetsi.internapp.entities.GestionnaireEntreprise;
import projetsi.internapp.entities.Entreprise;
import projetsi.internapp.services.GestionnaireEntrepriseService;
import projetsi.internapp.services.EntrepriseService;

import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/gestionnaires-entreprise")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {
        RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS
})
public class GestionnaireEntrepriseController {

    private static final Logger logger = Logger.getLogger(GestionnaireEntrepriseController.class.getName());

    @Autowired
    private GestionnaireEntrepriseService gestionnaireService;

    @Autowired
    private EntrepriseService entrepriseService;

    @GetMapping
    public ResponseEntity<List<GestionnaireEntreprise>> getAllGestionnaires() {
        try {
            List<GestionnaireEntreprise> gestionnaires = gestionnaireService.getAllGestionnaires();
            return ResponseEntity.ok(gestionnaires);
        } catch (Exception e) {
            logger.severe("Error getting all gestionnaires: " + e.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping
    public ResponseEntity<?> createGestionnaire(@RequestBody GestionnaireEntreprise gestionnaire) {
        try {
            if (gestionnaire.getEntreprise() == null || gestionnaire.getEntreprise().getRaisonSocialeEntreprise() == null) {
                return ResponseEntity.badRequest().body(Map.of("message", "L'entreprise associée est requise"));
            }
    
            // Fetch the associated Entreprise using raisonSocialeEntreprise
            Entreprise entreprise = entrepriseService
                    .getEntrepriseByRaisonSociale(gestionnaire.getEntreprise().getRaisonSocialeEntreprise())
                    .orElseThrow(() -> new IllegalArgumentException("Entreprise introuvable"));
    
            gestionnaire.setEntreprise(entreprise);
    
            GestionnaireEntreprise savedGestionnaire = gestionnaireService.saveGestionnaire(gestionnaire);
            return ResponseEntity.ok(savedGestionnaire);
    
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            logger.severe("Erreur lors de la création du gestionnaire : " + e.getMessage());
            return ResponseEntity.internalServerError().body(Map.of("message", "Erreur interne"));
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteGestionnaire(@PathVariable Long id) {
        try {
            if (gestionnaireService.getGestionnaireById(id).isPresent()) {
                gestionnaireService.deleteGestionnaireById(id);
                return ResponseEntity.ok()
                    .body(Map.of("message", "Gestionnaire supprimé avec succès"));
            } else {
                return ResponseEntity
                    .notFound()
                    .build();
            }
        } catch (Exception e) {
            logger.severe("Error deleting gestionnaire: " + e.getMessage());
            return ResponseEntity
                .internalServerError()
                .body(Map.of("message", "Erreur lors de la suppression du gestionnaire"));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getGestionnaireById(@PathVariable Long id) {
        try {
            return gestionnaireService.getGestionnaireById(id)
                    .map(ResponseEntity::ok)
                    .orElseGet(() -> ResponseEntity
                        .notFound()
                        .build());
        } catch (Exception e) {
            logger.severe("Error getting gestionnaire by ID: " + e.getMessage());
            return ResponseEntity
                .internalServerError()
                .body(Map.of("message", "Erreur lors de la récupération du gestionnaire"));
        }
    }

    @GetMapping("/by-entreprise/{raisonSociale}")
    public ResponseEntity<?> getGestionnairesByEntreprise(@PathVariable String raisonSociale) {
        try {
            List<GestionnaireEntreprise> gestionnaires = gestionnaireService
                .getGestionnairesByEntrepriseRaisonSociale(raisonSociale);
            return ResponseEntity.ok(gestionnaires);
        } catch (Exception e) {
            logger.severe("Error getting gestionnaires by entreprise: " + e.getMessage());
            return ResponseEntity
                .internalServerError()
                .body(Map.of("message", "Erreur lors de la récupération des gestionnaires"));
        }
    }
}