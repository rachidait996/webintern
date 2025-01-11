package projetsi.internapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import projetsi.internapp.entities.Filiere;
import projetsi.internapp.entities.FiliereEnum;
import java.util.Optional;

public interface FiliereRepository extends JpaRepository<Filiere, FiliereEnum> {
    Optional<Filiere> findByNomFiliere(FiliereEnum nomFiliere);
}
