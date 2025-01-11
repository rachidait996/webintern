package projetsi.internapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import projetsi.internapp.entities.Entreprise;
import projetsi.internapp.repositories.EntrepriseRepository;

import java.util.Arrays;
import java.util.List;

@Component
public class StartupRunner implements CommandLineRunner {

    @Autowired
    private EntrepriseRepository entrepriseRepository;

    @Override
    public void run(String... args) throws Exception {
        List<Entreprise> entreprises = Arrays.asList(
            new Entreprise("IBM", "Corporation", "1 New Orchard Road", "Armonk", "10504", "914-499-1900", "914-499-1900", "John Doe", "914-499-1900"),
            new Entreprise("Amazon", "Corporation", "410 Terry Ave N", "Seattle", "98109", "206-266-1000", "206-266-1000", "Jane Doe", "206-266-1000"),
            new Entreprise("Google", "Corporation", "1600 Amphitheatre Parkway", "Mountain View", "94043", "650-253-0000", "650-253-0000", "Larry Page", "650-253-0000"),
            new Entreprise("Microsoft", "Corporation", "One Microsoft Way", "Redmond", "98052", "425-882-8080", "425-882-8080", "Satya Nadella", "425-882-8080"),
            new Entreprise("Apple", "Corporation", "1 Apple Park Way", "Cupertino", "95014", "408-996-1010", "408-996-1010", "Tim Cook", "408-996-1010"),
            new Entreprise("Facebook", "Corporation", "1 Hacker Way", "Menlo Park", "94025", "650-543-4800", "650-543-4800", "Mark Zuckerberg", "650-543-4800"),
            new Entreprise("Twitter", "Corporation", "1355 Market St", "San Francisco", "94103", "415-222-9670", "415-222-9670", "Jack Dorsey", "415-222-9670"),
            new Entreprise("LinkedIn", "Corporation", "1000 W Maude Ave", "Sunnyvale", "94085", "650-687-3600", "650-687-3600", "Jeff Weiner", "650-687-3600"),
            new Entreprise("Netflix", "Corporation", "100 Winchester Circle", "Los Gatos", "95032", "408-540-3700", "408-540-3700", "Reed Hastings", "408-540-3700"),
            new Entreprise("Tesla", "Corporation", "3500 Deer Creek Road", "Palo Alto", "94304", "650-681-5000", "650-681-5000", "Elon Musk", "650-681-5000")
        );

        entrepriseRepository.saveAll(entreprises);
    }
}
