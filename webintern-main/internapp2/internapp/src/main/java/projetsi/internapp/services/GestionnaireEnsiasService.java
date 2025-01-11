package projetsi.internapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetsi.internapp.entities.GestionnaireEnsias;
import projetsi.internapp.repositories.GestionnaireEnsiasRepository;
import java.util.List;
import java.util.Optional;

@Service
public class GestionnaireEnsiasService {

    @Autowired
    private GestionnaireEnsiasRepository gestionnaireRepository;

    public List<GestionnaireEnsias> getAllGestionnaires() {
        return gestionnaireRepository.findAll();
    }

    public Optional<GestionnaireEnsias> getGestionnaireById(Long id) {
        return gestionnaireRepository.findById(id);
    }

    public GestionnaireEnsias saveGestionnaire(GestionnaireEnsias gestionnaire) {
        // Validation basique
        if (gestionnaire.getNomAdminEnsias() == null || 
            gestionnaire.getPrenomAdminEnsias() == null ||
            gestionnaire.getEmailAdminEnsias() == null ||
            gestionnaire.getMotDePasseAdminEnsias() == null) {
            throw new IllegalArgumentException("Tous les champs sont obligatoires");
        }
        
        // Vérifier si l'email existe déjà
        Optional<GestionnaireEnsias> existingGestionnaire = gestionnaireRepository
            .findByEmailAdminEnsias(gestionnaire.getEmailAdminEnsias());
            
        if (existingGestionnaire.isPresent()) {
            throw new IllegalArgumentException("Cet email est déjà utilisé");
        }

        return gestionnaireRepository.save(gestionnaire);
    }

    public void deleteGestionnaireById(Long id) {
        gestionnaireRepository.deleteById(id);
    }
}