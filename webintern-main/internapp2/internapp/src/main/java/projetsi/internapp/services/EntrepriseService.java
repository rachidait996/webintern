package projetsi.internapp.services;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import projetsi.internapp.entities.Entreprise;
import projetsi.internapp.repositories.EntrepriseRepository;

@Service
@Transactional
public class EntrepriseService {

    private static final Logger logger = Logger.getLogger(EntrepriseService.class.getName());

    @Autowired
    private EntrepriseRepository entrepriseRepository;

    public List<Entreprise> getAllEntreprises() {
        logger.info("Fetching all entreprises");
        return entrepriseRepository.findAll();
    }

   

    public Optional<Entreprise> getEntrepriseByRaisonSociale(String raisonSociale) {
        logger.info("Fetching entreprise with raison sociale: " + raisonSociale);
        return Optional.ofNullable(entrepriseRepository.findByRaisonSocialeEntreprise(raisonSociale));
    }
}
