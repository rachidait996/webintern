package projetsi.internapp.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import projetsi.internapp.entities.GestionnaireEntreprise;

public interface GestionnaireEntrepriseRepository extends JpaRepository<GestionnaireEntreprise, Long> {

    Optional<GestionnaireEntreprise> findByEmailGestionnaire(String email);

}
