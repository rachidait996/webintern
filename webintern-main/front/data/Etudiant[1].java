package projetsi.internapp.entities;


import java.time.LocalDate;
import java.util.*;


import jakarta.persistence.*;
@Entity
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
    private String filiereEtudiant;
    private String emailEtudiant;
    private String motDePasseEtudiant;

    @ManyToOne
    @JoinColumn(name = "id_filiere")
    private Filiere filiere;
}