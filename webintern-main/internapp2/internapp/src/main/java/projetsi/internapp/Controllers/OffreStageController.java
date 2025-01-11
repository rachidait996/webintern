package projetsi.internapp.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import projetsi.internapp.dto.OffreStageDTO;
import projetsi.internapp.entities.OffreStage;
import projetsi.internapp.services.OffreStageService;

@RestController
@RequestMapping("/api/offres")
public class OffreStageController {

    @Autowired
    private OffreStageService offreStageService;

    @PostMapping
    public ResponseEntity<OffreStage> createOffre(@RequestBody OffreStage offreStage) {
        OffreStage createdOffreStage = offreStageService.createOffre(offreStage);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOffreStage);
    }


    @GetMapping("/voirOffresEtudiant")
    public ResponseEntity<List<OffreStageDTO>> getInternshipOffers() {
        List<OffreStageDTO> offers = offreStageService.getAllInternshipOffersWithPostulations();
        if (offers.isEmpty()) {
            return ResponseEntity.noContent().build();  // Return 204 if no offers exist
        }
        return ResponseEntity.ok(offers);
    }
    @PutMapping("/toggleStatut/{id}")
    public ResponseEntity<Void> toggleOfferStatus(@PathVariable Long id) {
        offreStageService.toggleStatus(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/deleteOffre/{id}")
    public ResponseEntity<Void> deleteOffer(@PathVariable Long id) {
        offreStageService.deleteOffer(id);
        return ResponseEntity.ok().build();
    }
}
