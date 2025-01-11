package projetsi.internapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetsi.internapp.entities.Filiere;
import projetsi.internapp.repositories.FiliereRepository;

import java.util.List;

@Service
public class FiliereService {

    @Autowired
    private FiliereRepository filiereRepository;

    public List<Filiere> getAllFilieres() {
        return filiereRepository.findAll();
    }

    public void generateRandomFiliereData(int count) {
        // Exemple de génération de données aléatoires si nécessaire
    }
}
