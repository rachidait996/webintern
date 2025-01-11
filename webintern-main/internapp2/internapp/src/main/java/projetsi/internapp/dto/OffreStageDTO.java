package projetsi.internapp.dto;

import java.time.LocalDate;
import projetsi.internapp.entities.Locations;
import projetsi.internapp.entities.Statusoffre;

public class OffreStageDTO {
    private Long idOffreStage;
    private String titreOffre;
    private String description;
    private LocalDate dateDebutStage;
    private LocalDate datePublication;
    private String niveauStage;
    private LocalDate dateFinStage;
    private String nombreSemaine;
    private String lieu;
    private Locations location;
    private String nombreDePlace;
    private String conventionDeStage;
    private Long idGestionnaireEnsias; // ID of related GestionnaireEnsias
    private Statusoffre statutOffre;
    private String etudiantNom;
    private String etudiantPrenom;
    private Long nombrePostulations;

    // Constructor with all fields
    public OffreStageDTO(Long idOffreStage, String titreOffre, String description, Statusoffre statutOffre, LocalDate datePublication, String etudiantNom, String etudiantPrenom, Long nombrePostulations) {
        this.idOffreStage = idOffreStage;
        this.titreOffre = titreOffre;
        this.description = description;
        this.statutOffre = statutOffre;
        this.datePublication = datePublication;
        this.etudiantNom = etudiantNom;
        this.etudiantPrenom = etudiantPrenom;
        this.nombrePostulations = nombrePostulations;
    }

    // Getters and Setters
    public Long getIdOffreStage() {
        return idOffreStage;
    }

    public void setIdOffreStage(Long idOffreStage) {
        this.idOffreStage = idOffreStage;
    }

    public String getTitreOffre() {
        return titreOffre;
    }

    public void setTitreOffre(String titreOffre) {
        this.titreOffre = titreOffre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDateDebutStage() {
        return dateDebutStage;
    }

    public void setDateDebutStage(LocalDate dateDebutStage) {
        this.dateDebutStage = dateDebutStage;
    }

    public LocalDate getDatePublication() {
        return datePublication;
    }

    public void setDatePublication(LocalDate datePublication) {
        this.datePublication = datePublication;
    }

    public String getNiveauStage() {
        return niveauStage;
    }

    public void setNiveauStage(String niveauStage) {
        this.niveauStage = niveauStage;
    }

    public LocalDate getDateFinStage() {
        return dateFinStage;
    }

    public void setDateFinStage(LocalDate dateFinStage) {
        this.dateFinStage = dateFinStage;
    }

    public String getNombreSemaine() {
        return nombreSemaine;
    }

    public void setNombreSemaine(String nombreSemaine) {
        this.nombreSemaine = nombreSemaine;
    }

    public String getLieu() {
        return lieu;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }

    public Locations getLocation() {
        return location;
    }

    public void setLocation(Locations location) {
        this.location = location;
    }

    public String getNombreDePlace() {
        return nombreDePlace;
    }

    public void setNombreDePlace(String nombreDePlace) {
        this.nombreDePlace = nombreDePlace;
    }

    public String getConventionDeStage() {
        return conventionDeStage;
    }

    public void setConventionDeStage(String conventionDeStage) {
        this.conventionDeStage = conventionDeStage;
    }

   
    public Long getIdGestionnaireEnsias() {
        return idGestionnaireEnsias;
    }

    public void setIdGestionnaireEnsias(Long idGestionnaireEnsias) {
        this.idGestionnaireEnsias = idGestionnaireEnsias;
    }

    public Statusoffre getStatutOffre() {
        return statutOffre;
    }

    public void setStatutOffre(Statusoffre statutOffre) {
        this.statutOffre = statutOffre;
    }

    public String getEtudiantNom() {
        return etudiantNom;
    }

    public void setEtudiantNom(String etudiantNom) {
        this.etudiantNom = etudiantNom;
    }

    public String getEtudiantPrenom() {
        return etudiantPrenom;
    }

    public void setEtudiantPrenom(String etudiantPrenom) {
        this.etudiantPrenom = etudiantPrenom;
    }

    public Long getNombrePostulations() {
        return nombrePostulations;
    }

    public void setNombrePostulations(Long nombrePostulations) {
        this.nombrePostulations = nombrePostulations;
    }
}
