package projetsi.internapp.entities;


import java.util.*;

import jakarta.persistence.*;
@Entity
public class AdminSystem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAdmin;
    private String nomAdmin;
    private String prenomAdmin;
    private String emailAdmin;
    private String motDePasseAdmin;
}