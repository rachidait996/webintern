package projetsi.internapp.entities;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Etudiant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numeroEtudiant;

    private String nomEtudiant;
    private String prenomEtudiant;
    private String adresseEtudiant;
    private LocalDate dateDeNaissanceEtudiant;
    private String telephoneEtudiant;
    private String statusRechercheEtudiant;
    private String promotionEtudiant;
    private String emailEtudiant;
    private String motDePasseEtudiant;

    // Many-to-one relationship with Filiere
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_filiere") // FK referencing Filiere
    private Filiere filiere;

    // Getters and Setters
    public Long getNumeroEtudiant() {
        return numeroEtudiant;
    }

    public void setNumeroEtudiant(Long numeroEtudiant) {
        this.numeroEtudiant = numeroEtudiant;
    }

    public String getNomEtudiant() {
        return nomEtudiant;
    }

    public void setNomEtudiant(String nomEtudiant) {
        this.nomEtudiant = nomEtudiant;
    }

    public String getPrenomEtudiant() {
        return prenomEtudiant;
    }

    public void setPrenomEtudiant(String prenomEtudiant) {
        this.prenomEtudiant = prenomEtudiant;
    }

    public String getAdresseEtudiant() {
        return adresseEtudiant;
    }

    public void setAdresseEtudiant(String adresseEtudiant) {
        this.adresseEtudiant = adresseEtudiant;
    }

    public LocalDate getDateDeNaissanceEtudiant() {
        return dateDeNaissanceEtudiant;
    }

    public void setDateDeNaissanceEtudiant(LocalDate dateDeNaissanceEtudiant) {
        this.dateDeNaissanceEtudiant = dateDeNaissanceEtudiant;
    }

    public String getTelephoneEtudiant() {
        return telephoneEtudiant;
    }

    public void setTelephoneEtudiant(String telephoneEtudiant) {
        this.telephoneEtudiant = telephoneEtudiant;
    }

    public String getStatusRechercheEtudiant() {
        return statusRechercheEtudiant;
    }

    public void setStatusRechercheEtudiant(String statusRechercheEtudiant) {
        this.statusRechercheEtudiant = statusRechercheEtudiant;
    }

    public String getPromotionEtudiant() {
        return promotionEtudiant;
    }

    public void setPromotionEtudiant(String promotionEtudiant) {
        this.promotionEtudiant = promotionEtudiant;
    }

    public String getEmailEtudiant() {
        return emailEtudiant;
    }

    public void setEmailEtudiant(String emailEtudiant) {
        this.emailEtudiant = emailEtudiant;
    }

    public String getMotDePasseEtudiant() {
        return motDePasseEtudiant;
    }

    public void setMotDePasseEtudiant(String motDePasseEtudiant) {
        this.motDePasseEtudiant = motDePasseEtudiant;
    }

    public Filiere getFiliere() {
        return filiere;
    }

    public void setFiliere(Filiere filiere) {
        this.filiere = filiere;
    }
}
