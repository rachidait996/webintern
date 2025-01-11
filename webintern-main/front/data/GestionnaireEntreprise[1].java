package projetsi.internapp.entities;

import jakarta.persistence.*;

@Entity
public class GestionnaireEntreprise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idGestionnaire;

    private String nomGestionnaire;
    private String prenomGestionnaire;
    private String emailGestionnaire;
    private String motDePasseGestionnaire;

    @ManyToOne
    @JoinColumn(name = "siret_entreprise", nullable = false) // Foreign key in the GestionnaireEntreprise table
    private Entreprise entreprise;

    // Getters and Setters
    public Long getIdGestionnaire() {
        return idGestionnaire;
    }

    public void setIdGestionnaire(Long idGestionnaire) {
        this.idGestionnaire = idGestionnaire;
    }

    public String getNomGestionnaire() {
        return nomGestionnaire;
    }

    public void setNomGestionnaire(String nomGestionnaire) {
        this.nomGestionnaire = nomGestionnaire;
    }

    public String getPrenomGestionnaire() {
        return prenomGestionnaire;
    }

    public void setPrenomGestionnaire(String prenomGestionnaire) {
        this.prenomGestionnaire = prenomGestionnaire;
    }

    public String getEmailGestionnaire() {
        return emailGestionnaire;
    }

    public void setEmailGestionnaire(String emailGestionnaire) {
        this.emailGestionnaire = emailGestionnaire;
    }

    public String getMotDePasseGestionnaire() {
        return motDePasseGestionnaire;
    }

    public void setMotDePasseGestionnaire(String motDePasseGestionnaire) {
        this.motDePasseGestionnaire = motDePasseGestionnaire;
    }

    public Entreprise getEntreprise() {
        return entreprise;
    }

    public void setEntreprise(Entreprise entreprise) {
        this.entreprise = entreprise;
    }
}
