package projetsi.internapp.dto;


import java.time.LocalDate;

import projetsi.internapp.entities.statutpos;

public class ApplicationDetailsDTO {
    private Long postulationId;
    private Long offreStageId;
    private String titreOffre;
    private String applicantName;
    private String email;
    private statutpos statut;
    private LocalDate dateDePostulation;
    private String lettreDeMotivation;
    private String cvUrl;

    public ApplicationDetailsDTO(Long postulationId, Long offreStageId, String titreOffre,
                                 String applicantName, String email, statutpos statut,
                                 LocalDate dateDePostulation, String lettreDeMotivation,
                                 String cvUrl) {
        this.postulationId = postulationId;
        this.offreStageId = offreStageId;
        this.titreOffre = titreOffre;
        this.applicantName = applicantName != null ? applicantName : "N/A";
        this.email = email != null ? email : "N/A";
        this.statut = statut;
        this.dateDePostulation = dateDePostulation;
        this.lettreDeMotivation = lettreDeMotivation != null ? lettreDeMotivation : "N/A";
        this.cvUrl = cvUrl != null ? cvUrl : "#";
    }

    // Getters and Setters

    public Long getPostulationId() {
        return postulationId;
    }

    public void setPostulationId(Long postulationId) {
        this.postulationId = postulationId;
    }

    public Long getOffreStageId() {
        return offreStageId;
    }

    public void setOffreStageId(Long offreStageId) {
        this.offreStageId = offreStageId;
    }

    public String getTitreOffre() {
        return titreOffre;
    }

    public void setTitreOffre(String titreOffre) {
        this.titreOffre = titreOffre;
    }

    public String getApplicantName() {
        return applicantName;
    }

    public void setApplicantName(String applicantName) {
        this.applicantName = applicantName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public statutpos getStatut() {
        return statut;
    }

    public void setStatut(statutpos statut) {
        this.statut = statut;
    }

    public LocalDate getDateDePostulation() {
        return dateDePostulation;
    }

    public void setDateDePostulation(LocalDate dateDePostulation) {
        this.dateDePostulation = dateDePostulation;
    }

    public String getLettreDeMotivation() {
        return lettreDeMotivation;
    }

    public void setLettreDeMotivation(String lettreDeMotivation) {
        this.lettreDeMotivation = lettreDeMotivation;
    }

    public String getCvUrl() {
        return cvUrl;
    }

    public void setCvUrl(String cvUrl) {
        this.cvUrl = cvUrl;
    }

   
}
