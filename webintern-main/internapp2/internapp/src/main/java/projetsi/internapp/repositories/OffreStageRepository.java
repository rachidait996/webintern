package projetsi.internapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import projetsi.internapp.entities.OffreStage;
import projetsi.internapp.dto.OffreStageDTO;
import java.util.List;

@Repository
public interface OffreStageRepository extends JpaRepository<OffreStage, Long> {

    @Query("SELECT new projetsi.internapp.dto.OffreStageDTO(" +
           "o.idOffreStage, o.titreOffre, o.description, o.statutOffre, o.datePublication, " +
           "e.nomEtudiant, e.prenomEtudiant, COUNT(p.id)) " +
           "FROM OffreStage o " +
           "LEFT JOIN Postulation p ON o.idOffreStage = p.offreStage.idOffreStage " +
           "LEFT JOIN Etudiant e ON p.etudiant.numeroEtudiant = e.numeroEtudiant " +
           "GROUP BY o.idOffreStage, o.titreOffre, o.description, o.statutOffre, o.datePublication, " +
           "e.nomEtudiant, e.prenomEtudiant")
    List<OffreStageDTO> findAllOffersWithApplications();


}
