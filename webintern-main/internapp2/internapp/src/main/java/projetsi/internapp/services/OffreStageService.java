package projetsi.internapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import projetsi.internapp.dto.OffreStageDTO;
import projetsi.internapp.entities.Entreprise;
import projetsi.internapp.entities.OffreStage;
import projetsi.internapp.entities.Statusoffre;
import projetsi.internapp.repositories.EntrepriseRepository;
import projetsi.internapp.repositories.OffreStageRepository;

@Service
public class OffreStageService {

    @Autowired
    private OffreStageRepository offreStageRepository;

     @Autowired
    private EntrepriseRepository entrepriseRepository;

    public OffreStage createOffre(OffreStage offreStage) {
        // Fetch the Entreprise based on the provided raisonSocialeEntreprise
        Entreprise entreprise = entrepriseRepository.findByRaisonSocialeEntreprise(offreStage.getEntreprise().getRaisonSocialeEntreprise());
        offreStage.setEntreprise(entreprise); // Set the Entreprise to the OffreStage

        return offreStageRepository.save(offreStage);
    }

    public List<OffreStageDTO> getAllInternshipOffersWithPostulations() {
        return offreStageRepository.findAllOffersWithApplications();  // Fetch offers with postulations count
    }

    public void toggleStatus(Long id) {
        OffreStage offre = offreStageRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Offer not found with ID: " + id));
        offre.setStatutOffre(offre.getStatutOffre() == Statusoffre.active ? Statusoffre.inactive : Statusoffre.active);
        offreStageRepository.save(offre);
    }

    public void deleteOffer(Long id) {
        offreStageRepository.deleteById(id);
    }
}
