package projetsi.internapp.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import projetsi.internapp.dto.ApplicationDetailsDTO;
import projetsi.internapp.entities.Postulation;

@Repository
public interface PostulationRepository extends JpaRepository<Postulation, Long> {

    @Query("SELECT new projetsi.internapp.dto.ApplicationDetailsDTO(" +
       "p.id, o.idOffreStage, o.titreOffre, COALESCE(e.emailEtudiant, 'N/A'), " +
       "COALESCE(e.nomEtudiant, 'N/A'), p.statut, p.dateDePostulation, " +
       "COALESCE(p.lettreDeMotivation, 'N/A'), COALESCE(p.cv, '#')) " +
       "FROM Postulation p " +
       "JOIN p.offreStage o " +
       "LEFT JOIN p.etudiant e")
    List<ApplicationDetailsDTO> findAllApplicationsWithDetails();

   
}
