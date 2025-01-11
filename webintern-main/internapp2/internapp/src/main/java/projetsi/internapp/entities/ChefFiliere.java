package projetsi.internapp.entities;


import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

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

    public String getNomCf() {
        return nomCf;
    }

    public void setNomCf(String nomCf) {
        this.nomCf = nomCf;
    }

    public Long getNumCf() {
        return numCf;
    }

    public void setNumCf(Long numCf) {
        this.numCf = numCf;
    }

    public LocalDate getDateDembauche() {
        return dateDembauche;
    }

    public void setDateDembauche(LocalDate dateDembauche) {
        this.dateDembauche = dateDembauche;
    }

    public String getMotDePasseCf() {
        return motDePasseCf;
    }

    public void setMotDePasseCf(String motDePasseCf) {
        this.motDePasseCf = motDePasseCf;
    }

    public String getEmailCf() {
        return emailCf;
    }

    public void setEmailCf(String emailCf) {
        this.emailCf = emailCf;
    }

    public String getPrenomCf() {
        return prenomCf;
    }

    public void setPrenomCf(String prenomCf) {
        this.prenomCf = prenomCf;
    }
}