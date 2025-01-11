package projetsi.internapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetsi.internapp.entities.GestionnaireEntreprise;
import projetsi.internapp.repositories.GestionnaireEntrepriseRepository;

import java.util.List;
import java.util.Optional;

@Service
public class GestionnaireEntrepriseService {

    @Autowired
    private GestionnaireEntrepriseRepository gestionnaireRepository;

    // Get all gestionnaires
    public List<GestionnaireEntreprise> getAllGestionnaires() {
        return gestionnaireRepository.findAll();
    }

    // Get gestionnaire by ID
    public Optional<GestionnaireEntreprise> getGestionnaireById(Long id) {
        return gestionnaireRepository.findById(id);
    }

    // Save a new gestionnaire
    public GestionnaireEntreprise saveGestionnaire(GestionnaireEntreprise gestionnaire) {
        return gestionnaireRepository.save(gestionnaire);
    }

    // Delete a gestionnaire by ID
    public void deleteGestionnaireById(Long id) {
        gestionnaireRepository.deleteById(id);
    }

    // Get gestionnaires by entreprise raison sociale
    public List<GestionnaireEntreprise> getGestionnairesByEntrepriseRaisonSociale(String raisonSociale) {
        return gestionnaireRepository.findAll()
                .stream()
                .filter(gestionnaire -> raisonSociale.equalsIgnoreCase(gestionnaire.getEntreprise().getRaisonSocialeEntreprise()))
                .toList();
    }

    // Find gestionnaire by email
   
}
