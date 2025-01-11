package projetsi.internapp.entities;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "etudiants"})
public class Filiere {

    @Id
    @Enumerated(EnumType.STRING) // Primary Key
    private FiliereEnum nomFiliere;

    private String descriptionFiliere;
    private LocalDate dateCreation;

    @OneToMany(mappedBy = "filiere", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Etudiant> etudiants;

    // Constructor
    public Filiere() {
    }

    public Filiere(FiliereEnum nomFiliere, String descriptionFiliere, LocalDate dateCreation) {
        this.nomFiliere = nomFiliere;
        this.descriptionFiliere = descriptionFiliere;
        this.dateCreation = dateCreation;
    }

    // Getters and Setters
    public FiliereEnum getNomFiliere() {
        return nomFiliere;
    }

    public void setNomFiliere(FiliereEnum nomFiliere) {
        this.nomFiliere = nomFiliere;
    }

    public String getDescriptionFiliere() {
        return descriptionFiliere;
    }

    public void setDescriptionFiliere(String descriptionFiliere) {
        this.descriptionFiliere = descriptionFiliere;
    }

    public LocalDate getDateCreation() {
        return dateCreation;
    }

    public void setDateCreation(LocalDate dateCreation) {
        this.dateCreation = dateCreation;
    }

    public Set<Etudiant> getEtudiants() {
        return etudiants;
    }

    public void setEtudiants(Set<Etudiant> etudiants) {
        this.etudiants = etudiants;
    }
}
