package projetsi.internapp.entities;


import jakarta.persistence.*;

@Entity
public class OffreFiliere {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "offre_id", nullable = false)
    private OffreStage offre;

    @Column(nullable = false)
    private String filiereNom;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public OffreStage getOffre() {
        return offre;
    }

    public void setOffre(OffreStage offre) {
        this.offre = offre;
    }

    public String getFiliereNom() {
        return filiereNom;
    }

    public void setFiliereNom(String filiereNom) {
        this.filiereNom = filiereNom;
    }
}
