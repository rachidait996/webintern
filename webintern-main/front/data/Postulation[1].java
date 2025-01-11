package projetsi.internapp.entities;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name = "postulation")
public class Postulation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "numero_etudiant")
    private Etudiant etudiant;

    @ManyToOne
    @JoinColumn(name = "id_offre_de_stage")
    private OffreStage offreStage;

    @Column(name = "date_de_postulation")
    private LocalDate dateDePostulation;

    @Column(name = "lettre_de_motivation")
    private String lettreDeMotivation;

    @Column(name = "statut")
    private String statut;

    @Column(name = "cv")
    private String cv;

    @Column(name = "convention_de_stage")
    private String conventionDeStage;

    // Getters and setters
}