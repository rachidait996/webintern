package projetsi.internapp.entities;

import java.util.*;

import jakarta.persistence.*;
@Entity
public class TuteurInterne {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTuteurInterne;
    private String nomTuteurInterne;
    private String prenomTuteurInterne;
    private String telephoneTuteurInterne;

    @ManyToMany
    @JoinTable(
        name = "tuteur_offre_stage",
        joinColumns = @JoinColumn(name = "tuteur_id"),
        inverseJoinColumns = @JoinColumn(name = "offre_stage_id")
    )
    private Set<OffreStage> offresStage;
}
