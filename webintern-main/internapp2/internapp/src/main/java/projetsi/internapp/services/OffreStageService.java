package projetsi.internapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import projetsi.internapp.dto.OffreStageDTO;
import projetsi.internapp.entities.OffreStage;
import projetsi.internapp.entities.Statusoffre;
import projetsi.internapp.repositories.OffreStageRepository;

@Service
public class OffreStageService {

    @Autowired
    private OffreStageRepository offreStageRepository;

    public OffreStage createOffre(OffreStage offreStage) {
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
