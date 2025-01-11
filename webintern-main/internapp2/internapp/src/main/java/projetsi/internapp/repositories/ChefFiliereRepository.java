package projetsi.internapp.repositories;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projetsi.internapp.entities.ChefFiliere;

@Repository
public interface ChefFiliereRepository extends JpaRepository<ChefFiliere, Long> {
    Optional<ChefFiliere> findByFiliereNomFiliere(String nomFiliere);
}
