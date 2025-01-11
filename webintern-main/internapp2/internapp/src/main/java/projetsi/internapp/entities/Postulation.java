package projetsi.internapp.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "postulation")
public class Postulation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Many-to-one relationship with Etudiant
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "numero_etudiant", referencedColumnName = "numeroEtudiant") // FK referencing Etudiant
    private Etudiant etudiant;

    // Many-to-one relationship with OffreStage
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_offre_de_stage", referencedColumnName = "idOffreStage") // FK referencing OffreStage
    private OffreStage offreStage;

    @Column(name = "date_de_postulation")
    private LocalDate dateDePostulation;

    @Column(name = "lettre_de_motivation")
    private String lettreDeMotivation;

    @Column(name = "statut")
    @Enumerated(EnumType.STRING) // Ensure enum is stored as a string in the database
    private statutpos statut;

    @Column(name = "cv")
    private String cv;

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Etudiant getEtudiant() {
        return etudiant;
    }

    public void setEtudiant(Etudiant etudiant) {
        this.etudiant = etudiant;
    }

    public OffreStage getOffreStage() {
        return offreStage;
    }

    public void setOffreStage(OffreStage offreStage) {
        this.offreStage = offreStage;
    }

    public LocalDate getDateDePostulation() {
        return dateDePostulation;
    }

    public void setDateDePostulation(LocalDate dateDePostulation) {
        this.dateDePostulation = dateDePostulation;
    }

    public String getLettreDeMotivation() {
        return lettreDeMotivation;
    }

    public void setLettreDeMotivation(String lettreDeMotivation) {
        this.lettreDeMotivation = lettreDeMotivation;
    }

    public String getCv() {
        return cv;
    }

    public void setCv(String cv) {
        this.cv = cv;
    }

    public statutpos getStatut() {
        return statut;
    }

    public void setStatut(statutpos statut) {
        this.statut = statut;
    }
}
