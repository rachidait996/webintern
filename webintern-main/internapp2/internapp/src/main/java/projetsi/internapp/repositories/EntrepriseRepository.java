package projetsi.internapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import projetsi.internapp.entities.Entreprise;

public interface EntrepriseRepository extends JpaRepository<Entreprise, String> { // Updated to String for raisonSocialeEntreprise
    Entreprise findByRaisonSocialeEntreprise(String raisonSocialeEntreprise);
}
