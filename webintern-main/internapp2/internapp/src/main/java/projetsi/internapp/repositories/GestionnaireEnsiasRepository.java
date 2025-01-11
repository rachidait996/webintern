package projetsi.internapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projetsi.internapp.entities.GestionnaireEnsias;
import java.util.Optional;

@Repository
public interface GestionnaireEnsiasRepository extends JpaRepository<GestionnaireEnsias, Long> {
    Optional<GestionnaireEnsias> findByEmailAdminEnsias(String email);
}