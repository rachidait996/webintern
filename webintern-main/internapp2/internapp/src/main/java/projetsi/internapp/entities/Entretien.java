package projetsi.internapp.entities;


import java.time.LocalDate;
import java.util.*;

import jakarta.persistence.*;

@Entity
public class Entretien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEntretien;
    private LocalDate dateEntretien;
    private String lieuEntretien;
    private String statutEntretien;
    private String commentaireEntretien;

    @ManyToOne
    @JoinColumn(name = "numero_etudiant")
    private Etudiant etudiant;

    @ManyToOne
    @JoinColumn(name = "id_offre_stage")
    private OffreStage offreStage;
}