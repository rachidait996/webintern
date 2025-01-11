// Updated EtudiantController.java
package projetsi.internapp.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetsi.internapp.entities.Etudiant;
import projetsi.internapp.entities.Filiere;
import projetsi.internapp.dto.EtudiantDTO;
import projetsi.internapp.services.EtudiantService;
import projetsi.internapp.repositories.FiliereRepository;
import projetsi.internapp.entities.FiliereEnum; // Add this import statement

import java.util.Map;
import java.util.List;
import java.util.Base64;
import java.util.HashMap;
import java.util.Optional;

@RestController
@RequestMapping("/api/etudiants")
public class EtudiantController {

    @Autowired
    private EtudiantService etudiantService;

    @Autowired
    private FiliereRepository filiereRepository;

    @GetMapping
    public List<Etudiant> getAllEtudiants() {
        return etudiantService.getAllEtudiants();
    }

    @PostMapping
public ResponseEntity<?> addEtudiant(@RequestBody EtudiantDTO etudiantDTO) {
    try {
        FiliereEnum filiereEnum = FiliereEnum.fromString(etudiantDTO.getFiliere());
        Filiere filiere = filiereRepository.findByNomFiliere(filiereEnum)
            .orElseThrow(() -> new RuntimeException("Filiere not found"));

        Etudiant etudiant = new Etudiant();
        etudiant.setNomEtudiant(etudiantDTO.getNom());
        etudiant.setPrenomEtudiant(etudiantDTO.getPrenom());
        etudiant.setAdresseEtudiant(etudiantDTO.getEmail());
        etudiant.setTelephoneEtudiant(etudiantDTO.getTelephone());
        etudiant.setPromotionEtudiant(etudiantDTO.getPromotion());
        etudiant.setEmailEtudiant(etudiantDTO.getEmail());
        etudiant.setMotDePasseEtudiant(etudiantDTO.getMotDePasse());
        etudiant.setFiliere(filiere);

        Etudiant savedEtudiant = etudiantService.saveEtudiant(etudiant);
        return ResponseEntity.ok(savedEtudiant);
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }
}

@PostMapping("/login")
public ResponseEntity<?> loginEtudiant(@RequestBody Etudiant loginRequest) {
    Etudiant etudiant = etudiantService.authenticateEtudiant(
        loginRequest.getEmailEtudiant(),
        loginRequest.getMotDePasseEtudiant()
    );

    if (etudiant != null) {
        String token = generateToken(etudiant);
        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("etudiantId", etudiant.getNumeroEtudiant());
        response.put("nom", etudiant.getNomEtudiant());
        response.put("prenom", etudiant.getPrenomEtudiant());
        response.put("email", etudiant.getEmailEtudiant());
        // Ajouter uniquement les champs nécessaires pour le front-end
        if (etudiant.getFiliere() != null) {
            response.put("filiere", etudiant.getFiliere().getNomFiliere());
        }
        return ResponseEntity.ok(response);
    } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
            .body(Map.of("message", "Email ou mot de passe incorrect"));
    }
}
    private String generateToken(Etudiant etudiant) {
        return Base64.getEncoder().encodeToString((etudiant.getEmailEtudiant() + ":authenticated").getBytes());
    }

    @PutMapping("/{id}/profile")
    public ResponseEntity<?> updateEtudiantProfile(@PathVariable Long id, @RequestBody Etudiant etudiant) {
        try {
            Etudiant updatedEtudiant = etudiantService.updateEtudiantProfile(id, etudiant);
            return ResponseEntity.ok(updatedEtudiant);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateSearchStatus(@PathVariable Long id, @RequestBody Map<String, String> status) {
        try {
            String newStatus = status.get("status");
            Etudiant updatedEtudiant = etudiantService.updateSearchStatus(id, newStatus);
            return ResponseEntity.ok(updatedEtudiant);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEtudiant(@PathVariable Long id) {
        try {
            return etudiantService.deleteEtudiant(id);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

}
