package projetsi.internapp.repositories;


import java.util.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import projetsi.internapp.entities.*;

@Repository
public interface TuteurInterneRepository extends JpaRepository<TuteurInterne, Long> {
    List<TuteurInterne> findByNomTuteurInterneContaining(String nom);
}