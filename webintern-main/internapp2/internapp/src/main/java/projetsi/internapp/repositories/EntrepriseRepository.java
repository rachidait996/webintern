package projetsi.internapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import projetsi.internapp.entities.Entreprise;

import java.util.Optional;

public interface EntrepriseRepository extends JpaRepository<Entreprise, String> { // Updated to String for raisonSocialeEntreprise
    Optional<Entreprise> findByRaisonSocialeEntreprise(String raisonSocialeEntreprise);
}
