package projetsi.internapp.repositories;

import java.util.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import projetsi.internapp.entities.*;

@Repository
public interface TuteurRepository extends JpaRepository<Tuteur, Long> {
    List<Tuteur> findByEntreprise(String entreprise);
}
