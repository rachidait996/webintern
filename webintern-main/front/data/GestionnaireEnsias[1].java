package projetsi.internapp.entities;

import java.util.*;

import jakarta.persistence.*;

@Entity
public class GestionnaireEnsias {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAdminEnsias;
    private String nomAdminEnsias;
    private String prenomAdminEnsias;
    private String emailAdminEnsias;
    private String motDePasseAdminEnsias;

    @OneToMany(mappedBy = "gestionnaireEnsias")
    private Set<OffreStage> offresStage;
}