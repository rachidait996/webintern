package projetsi.internapp.entities;

import jakarta.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
public class Entreprise {

    @Id
    @Column(name = "raisonSocialeEntreprise", unique = true, nullable = false)
    private String raisonSocialeEntreprise; // Primary key

    private String formeJuridique;
    private String adresseEntreprise;
    private String villeEntreprise;
    private String codePostalEntreprise;
    private String telephoneEntreprise;
    private String faxEntreprise;
    private String contactEntreprise;
    private String telContact;

    @OneToMany(mappedBy = "entreprise", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<GestionnaireEntreprise> gestionnaires;

    // Default constructor
    public Entreprise() {}

    // Full constructor
    public Entreprise(String raisonSocialeEntreprise, String formeJuridique, String adresseEntreprise,
                      String villeEntreprise, String codePostalEntreprise, String telephoneEntreprise,
                      String faxEntreprise, String contactEntreprise, String telContact) {
        this.raisonSocialeEntreprise = raisonSocialeEntreprise;
        this.formeJuridique = formeJuridique;
        this.adresseEntreprise = adresseEntreprise;
        this.villeEntreprise = villeEntreprise;
        this.codePostalEntreprise = codePostalEntreprise;
        this.telephoneEntreprise = telephoneEntreprise;
        this.faxEntreprise = faxEntreprise;
        this.contactEntreprise = contactEntreprise;
        this.telContact = telContact;
    }

    // Getters and Setters
    public String getRaisonSocialeEntreprise() {
        return raisonSocialeEntreprise;
    }

    public void setRaisonSocialeEntreprise(String raisonSocialeEntreprise) {
        this.raisonSocialeEntreprise = raisonSocialeEntreprise;
    }

    public String getFormeJuridique() {
        return formeJuridique;
    }

    public void setFormeJuridique(String formeJuridique) {
        this.formeJuridique = formeJuridique;
    }

    public String getAdresseEntreprise() {
        return adresseEntreprise;
    }

    public void setAdresseEntreprise(String adresseEntreprise) {
        this.adresseEntreprise = adresseEntreprise;
    }

    public String getVilleEntreprise() {
        return villeEntreprise;
    }

    public void setVilleEntreprise(String villeEntreprise) {
        this.villeEntreprise = villeEntreprise;
    }

    public String getCodePostalEntreprise() {
        return codePostalEntreprise;
    }

    public void setCodePostalEntreprise(String codePostalEntreprise) {
        this.codePostalEntreprise = codePostalEntreprise;
    }

    public String getTelephoneEntreprise() {
        return telephoneEntreprise;
    }

    public void setTelephoneEntreprise(String telephoneEntreprise) {
        this.telephoneEntreprise = telephoneEntreprise;
    }

    public String getFaxEntreprise() {
        return faxEntreprise;
    }

    public void setFaxEntreprise(String faxEntreprise) {
        this.faxEntreprise = faxEntreprise;
    }

    public String getContactEntreprise() {
        return contactEntreprise;
    }

    public void setContactEntreprise(String contactEntreprise) {
        this.contactEntreprise = contactEntreprise;
    }

    public String getTelContact() {
        return telContact;
    }

    public void setTelContact(String telContact) {
        this.telContact = telContact;
    }

    public List<GestionnaireEntreprise> getGestionnaires() {
        return gestionnaires;
    }

    public void setGestionnaires(List<GestionnaireEntreprise> gestionnaires) {
        this.gestionnaires = gestionnaires;
    }

    // Overriding equals and hashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Entreprise that = (Entreprise) o;
        return Objects.equals(raisonSocialeEntreprise, that.raisonSocialeEntreprise);
    }

    @Override
    public int hashCode() {
        return Objects.hash(raisonSocialeEntreprise);
    }

    // Overriding toString
    @Override
    public String toString() {
        return "Entreprise{" +
                "raisonSocialeEntreprise='" + raisonSocialeEntreprise + '\'' +
                ", formeJuridique='" + formeJuridique + '\'' +
                ", adresseEntreprise='" + adresseEntreprise + '\'' +
                ", villeEntreprise='" + villeEntreprise + '\'' +
                ", codePostalEntreprise='" + codePostalEntreprise + '\'' +
                ", telephoneEntreprise='" + telephoneEntreprise + '\'' +
                ", faxEntreprise='" + faxEntreprise + '\'' +
                ", contactEntreprise='" + contactEntreprise + '\'' +
                ", telContact='" + telContact + '\'' +
                '}';
    }
}
