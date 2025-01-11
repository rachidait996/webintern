package projetsi.internapp.entities;


import java.time.LocalDate;
import java.util.*;

import jakarta.persistence.*;

@Entity
public class Filiere {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFiliere;
    private String nomFiliere;
    private String descriptionFiliere;
    private LocalDate dateCreation;

    @OneToMany(mappedBy = "filiere")
    private Set<Etudiant> etudiants;
}