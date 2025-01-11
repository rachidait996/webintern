package projetsi.internapp.Controllers;

import projetsi.internapp.entities.OffreFiliere;
import projetsi.internapp.services.OffreFiliereService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/offrefiliere")
public class OffreFiliereController {

    @Autowired
    private OffreFiliereService offreFiliereService;

    @PostMapping
    public ResponseEntity<OffreFiliere> associateOffreWithFiliere(@RequestBody OffreFiliereRequest request) {
        OffreFiliere offreFiliere = offreFiliereService.saveOffreFiliere(request.getOffreId(), request.getFiliereNom());
        return ResponseEntity.ok(offreFiliere);
    }

    // Request DTO
    public static class OffreFiliereRequest {
        private Long offreId;
        private String filiereNom;

        public Long getOffreId() {
            return offreId;
        }

        public void setOffreId(Long offreId) {
            this.offreId = offreId;
        }

        public String getFiliereNom() {
            return filiereNom;
        }

        public void setFiliereNom(String filiereNom) {
            this.filiereNom = filiereNom;
        }
    }
}
