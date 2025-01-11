package projetsi.internapp.services;

import projetsi.internapp.entities.OffreStage;
import projetsi.internapp.entities.OffreFiliere;
import projetsi.internapp.repositories.OffreFiliereRepository;
import projetsi.internapp.repositories.OffreStageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OffreFiliereService {

    @Autowired
    private OffreFiliereRepository offreFiliereRepository;

    @Autowired
    private OffreStageRepository offreStageRepository;

    public OffreFiliere saveOffreFiliere(Long offreId, String filiereNom) {
        OffreStage offreStage = offreStageRepository.findById(offreId).orElseThrow(() -> new IllegalArgumentException("Invalid offre ID"));

        OffreFiliere offreFiliere = new OffreFiliere();
        offreFiliere.setOffre(offreStage);
        offreFiliere.setFiliereNom(filiereNom);

        return offreFiliereRepository.save(offreFiliere);
    }
}
