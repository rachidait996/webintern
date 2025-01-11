package projetsi.internapp;

import projetsi.internapp.entities.Filiere;
import projetsi.internapp.entities.FiliereEnum;
import projetsi.internapp.repositories.FiliereRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@Component
class StartupRunner1 implements CommandLineRunner {

    @Autowired
    private FiliereRepository filiereRepository;

    @Override
    public void run(String... args) {
        List<Filiere> filieres = Arrays.asList(
            new Filiere(FiliereEnum.BIA, "Business Intelligence & Analytics", LocalDate.of(2010, 1, 1)),
            new Filiere(FiliereEnum.GD, "Génie de la Data", LocalDate.of(2011, 2, 1)),
            new Filiere(FiliereEnum.GL, "Génie Logiciel", LocalDate.of(2012, 3, 1)),
            new Filiere(FiliereEnum.D2S, "Data and Software Sciences", LocalDate.of(2013, 4, 1)),
            new Filiere(FiliereEnum.CCSC, "Cybersécurité, Cloud et Informatique Mobile", LocalDate.of(2014, 5, 1)),
            new Filiere(FiliereEnum.S2CL, "Smart Supply Chain & Logistics", LocalDate.of(2015, 6, 1)),
            new Filiere(FiliereEnum.I2A, "Ingénierie de l'Intelligence Artificielle", LocalDate.of(2016, 7, 1)),
            new Filiere(FiliereEnum.IDF, "Ingénierie Digitale pour la Finance", LocalDate.of(2017, 8, 1))
        );

        filiereRepository.saveAll(filieres);
    }
}
