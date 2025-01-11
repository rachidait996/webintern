package projetsi.internapp.entities;

import java.util.*;

import jakarta.persistence.*;

// Classe Entreprise
@Entity
public class Entreprise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long siretEntreprise;
    private String raisonSocialeEntreprise;
    private String formeJuridique;
    private String adresseEntreprise;
    private String villeEntreprise;
    private String codePostalEntreprise;
    private String telephoneEntreprise;
    private String faxEntreprise;
    private String contactEntreprise;
    private String telContact;

    @OneToMany(mappedBy = "entreprise", cascade = CascadeType.ALL)
    private List<OffreStage> offresStage;

    @OneToMany(mappedBy = "entreprise", cascade = CascadeType.ALL)
    private List<GestionnaireEntreprise> gestionnaires;

    public Long getSiretEntreprise() {
        return siretEntreprise;
    }

    public void setSiretEntreprise(Long siretEntreprise) {
        this.siretEntreprise = siretEntreprise;
    }

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

    public String getVilleEntreprise() {
        return villeEntreprise;
    }

    public void setVilleEntreprise(String villeEntreprise) {
        this.villeEntreprise = villeEntreprise;
    }

    public String getAdresseEntreprise() {
        return adresseEntreprise;
    }

    public void setAdresseEntreprise(String adresseEntreprise) {
        this.adresseEntreprise = adresseEntreprise;
    }

    public String getTelContact() {
        return telContact;
    }

    public void setTelContact(String telContact) {
        this.telContact = telContact;
    }

    public String getContactEntreprise() {
        return contactEntreprise;
    }

    public void setContactEntreprise(String contactEntreprise) {
        this.contactEntreprise = contactEntreprise;
    }

    public String getFaxEntreprise() {
        return faxEntreprise;
    }

    public void setFaxEntreprise(String faxEntreprise) {
        this.faxEntreprise = faxEntreprise;
    }

    public String getTelephoneEntreprise() {
        return telephoneEntreprise;
    }

    public void setTelephoneEntreprise(String telephoneEntreprise) {
        this.telephoneEntreprise = telephoneEntreprise;
    }

    public String getCodePostalEntreprise() {
        return codePostalEntreprise;
    }

    public void setCodePostalEntreprise(String codePostalEntreprise) {
        this.codePostalEntreprise = codePostalEntreprise;
    }

   
}