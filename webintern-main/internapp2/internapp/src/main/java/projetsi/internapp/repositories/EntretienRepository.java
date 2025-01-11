package projetsi.internapp.repositories;


import java.time.LocalDate;
import java.util.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import projetsi.internapp.entities.*;

@Repository
public interface EntretienRepository extends JpaRepository<Entretien, Long> {
    List<Entretien> findByEtudiantNumeroEtudiant(Long numeroEtudiant);
    List<Entretien> findByDateEntretienBetween(LocalDate debut, LocalDate fin);
    List<Entretien> findByStatutEntretien(String statut);
}
