package projetsi.internapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import projetsi.internapp.entities.Etudiant;
import projetsi.internapp.repositories.EtudiantRepository;
import java.util.*;

@Service
public class EtudiantService {

    @Autowired
    private EtudiantRepository etudiantRepository;

    // Garder les méthodes existantes
    public List<Etudiant> getAllEtudiants() {
        return etudiantRepository.findAll();
    }

  

    public Etudiant saveEtudiant(Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    public ResponseEntity<?> deleteEtudiant(Long id) {
        return etudiantRepository.findById(id)
                .map(etudiant -> {
                    etudiantRepository.delete(etudiant);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Nouvelles méthodes
    public Optional<Etudiant> getEtudiantById(Long id) {
        return etudiantRepository.findById(id);
    }

    public Etudiant updateEtudiantProfile(Long id, Etudiant updatedEtudiant) {
        return etudiantRepository.findById(id)
            .map(existingEtudiant -> {
                existingEtudiant.setNomEtudiant(updatedEtudiant.getNomEtudiant());
                existingEtudiant.setPrenomEtudiant(updatedEtudiant.getPrenomEtudiant());
                existingEtudiant.setAdresseEtudiant(updatedEtudiant.getAdresseEtudiant());
                existingEtudiant.setTelephoneEtudiant(updatedEtudiant.getTelephoneEtudiant());
                return etudiantRepository.save(existingEtudiant);
            })
            .orElseThrow(() -> new RuntimeException("Étudiant non trouvé"));
    }

    public boolean changePassword(Long id, String currentPassword, String newPassword) {
        return etudiantRepository.findById(id)
            .map(etudiant -> {
                if (etudiant.getMotDePasseEtudiant().equals(currentPassword)) {
                    etudiant.setMotDePasseEtudiant(newPassword);
                    etudiantRepository.save(etudiant);
                    return true;
                }
                return false;
            })
            .orElse(false);
    }

    public Etudiant updateSearchStatus(Long id, String status) {
        return etudiantRepository.findById(id)
            .map(etudiant -> {
                etudiant.setStatusRechercheEtudiant(status);
                return etudiantRepository.save(etudiant);
            })
            .orElseThrow(() -> new RuntimeException("Étudiant non trouvé"));
    }
    public Etudiant authenticateEtudiant(String email, String motDePasse) {
        System.out.println("Tentative de connexion - Email: " + email); // Log de debug
        Etudiant etudiant = etudiantRepository.findByEmailEtudiantAndMotDePasseEtudiant(email, motDePasse);
        if (etudiant == null) {
            System.out.println("Échec de l'authentification - Aucun étudiant trouvé");
        } else {
            System.out.println("Authentification réussie pour: " + etudiant.getNomEtudiant());
        }
        return etudiant;
    }
    


}