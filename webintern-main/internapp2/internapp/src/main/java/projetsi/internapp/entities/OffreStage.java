package projetsi.internapp.entities;

import java.time.LocalDate;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

@Entity
public class OffreStage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idOffreStage;
    private String titreOffre;
    private String description;
    private LocalDate dateDebutStage;
    private LocalDate datePublication;
    private LocalDate dateFinStage;
    

    private String lieu;
    private Locations Location;
    private String nombredeplace;
    private String conventionDeStage;

    @Enumerated(EnumType.STRING)
    private Statusoffre statutOffre;  // New status field

    @ManyToOne
    @JoinColumn(name = "raison_sociale_entreprise")  // Foreign key referencing Entreprise
    private Entreprise entreprise;

    @ManyToOne
    @JoinColumn(name = "id_admin_ensias")
    private GestionnaireEnsias gestionnaireEnsias;

    @ManyToMany(mappedBy = "offresStage")
    private Set<TuteurInterne> tuteursInternes;

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

    public LocalDate getDateFinStage() {
        return dateFinStage;
    }

    public void setDateFinStage(LocalDate dateFinStage) {
        this.dateFinStage = dateFinStage;
    }

    
    public Locations getLocation() {
        return Location;
    }

    public void setLocation(Locations location) {
        this.Location = location;
    }

    public Entreprise getEntreprise() {
        return entreprise;
    }

    public void setEntreprise(Entreprise entreprise) {
        this.entreprise = entreprise;
    }

    

    public LocalDate getDatePublication() {
        return datePublication;
    }

    public void setDatePublication(LocalDate datePublication) {
        this.datePublication = datePublication;
    }

    public String getNombredeplace() {
        return nombredeplace;
    }

    public void setNombredeplace(String nombredeplace) {
        this.nombredeplace = nombredeplace;
    }

    public String getConventionDeStage() {
        return conventionDeStage;
    }

    public void setConventionDeStage(String conventionDeStage) {
        this.conventionDeStage = conventionDeStage;
    }

    public String getLieu() {
        return lieu;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }

    public Statusoffre getStatutOffre() {
        return statutOffre;
    }

    public void setStatutOffre(Statusoffre statutOffre) {
        this.statutOffre = statutOffre;
    }
}
