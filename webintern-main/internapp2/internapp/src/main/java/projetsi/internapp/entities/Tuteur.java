package projetsi.internapp.entities;

import java.util.*;

import jakarta.persistence.*;
@Entity
public class Tuteur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTuteur;
    private String entreprise;
    private String nomTuteur;
    private String prenomTuteur;
    private String telephoneTuteur;
}