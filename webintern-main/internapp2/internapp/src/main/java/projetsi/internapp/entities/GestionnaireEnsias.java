package projetsi.internapp.entities;

import jakarta.persistence.*;
import java.util.Set;

@Entity
public class GestionnaireEnsias {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAdminEnsias;

    private String nomAdminEnsias;
    private String prenomAdminEnsias;
    private String emailAdminEnsias;
    private String motDePasseAdminEnsias;

    // Relation OneToMany : un gestionnaire peut avoir plusieurs offres de stage
    @OneToMany(mappedBy = "gestionnaireEnsias", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<OffreStage> offresStage;

    // Getters et Setters
    public Long getIdAdminEnsias() {
        return idAdminEnsias;
    }

    public void setIdAdminEnsias(Long idAdminEnsias) {
        this.idAdminEnsias = idAdminEnsias;
    }

    public String getNomAdminEnsias() {
        return nomAdminEnsias;
    }

    public void setNomAdminEnsias(String nomAdminEnsias) {
        this.nomAdminEnsias = nomAdminEnsias;
    }

    public String getPrenomAdminEnsias() {
        return prenomAdminEnsias;
    }

    public void setPrenomAdminEnsias(String prenomAdminEnsias) {
        this.prenomAdminEnsias = prenomAdminEnsias;
    }

    public String getEmailAdminEnsias() {
        return emailAdminEnsias;
    }

    public void setEmailAdminEnsias(String emailAdminEnsias) {
        this.emailAdminEnsias = emailAdminEnsias;
    }

    public String getMotDePasseAdminEnsias() {
        return motDePasseAdminEnsias;
    }

    public void setMotDePasseAdminEnsias(String motDePasseAdminEnsias) {
        this.motDePasseAdminEnsias = motDePasseAdminEnsias;
    }

    public Set<OffreStage> getOffresStage() {
        return offresStage;
    }

    public void setOffresStage(Set<OffreStage> offresStage) {
        this.offresStage = offresStage;
    }

    // Méthode toString pour faciliter le débogage
    @Override
    public String toString() {
        return "GestionnaireEnsias{" +
                "idAdminEnsias=" + idAdminEnsias +
                ", nomAdminEnsias='" + nomAdminEnsias + '\'' +
                ", prenomAdminEnsias='" + prenomAdminEnsias + '\'' +
                ", emailAdminEnsias='" + emailAdminEnsias + '\'' +
                '}';
    }
}
