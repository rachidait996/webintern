package projetsi.internapp.entities;

public enum FiliereEnum {
    BIA,     // Business Intelligence & Analytics
    GD,      // Génie de la Data
    GL,      // Génie Logiciel
    D2S,     // Data and Software Sciences
    CCSC,    // Cybersécurité, Cloud et Informatique Mobile
    S2CL,    // Smart Supply Chain & Logistics
    I2A,     // Ingénierie de l'Intelligence Artificielle
    IDF;     // Ingénierie Digitale pour la Finance

    public static FiliereEnum fromString(String value) {
        try {
            return FiliereEnum.valueOf(value.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new RuntimeException("Invalid FiliereEnum value: " + value);
        }
    }
}
