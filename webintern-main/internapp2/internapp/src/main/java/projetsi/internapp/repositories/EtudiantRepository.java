package projetsi.internapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projetsi.internapp.entities.Etudiant;

@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
    Etudiant findByEmailEtudiantAndMotDePasseEtudiant(String emailEtudiant, String motDePasseEtudiant);
}

