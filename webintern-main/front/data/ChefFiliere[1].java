package projetsi.internapp.entities;


import java.time.LocalDate;
import java.util.*;

import jakarta.persistence.*;

@Entity
public class ChefFiliere {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numCf;
    private String nomCf;
    private String prenomCf;
    private String emailCf;
    private String motDePasseCf;
    private LocalDate dateDembauche;

    @OneToOne
    @JoinColumn(name = "id_filiere")
    private Filiere filiere;
}