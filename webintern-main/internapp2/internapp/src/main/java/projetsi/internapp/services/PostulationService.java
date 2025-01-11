package projetsi.internapp.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import projetsi.internapp.dto.ApplicationDetailsDTO;
import projetsi.internapp.entities.Postulation;
import projetsi.internapp.entities.statutpos;
import projetsi.internapp.repositories.PostulationRepository;

@Service
public class PostulationService {

    @Autowired
    private PostulationRepository postulationRepository;

    /**
     * Fetch all applications with their details.
     */
    public List<ApplicationDetailsDTO> getAllApplicationsWithDetails() {
        return postulationRepository.findAllApplicationsWithDetails();
    }

    /**
     * Update the status of a postulation (application).
     */
    public void updateStatus(Long id, String statut) {
        Postulation postulation = postulationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Postulation not found with ID: " + id));

        statutpos statutEnum = statutpos.valueOf(statut.toUpperCase());
        postulation.setStatut(statutEnum);
        postulationRepository.save(postulation);
    }

    /**
     * Delete an application (postulation).
     */
    public void deleteApplication(Long id) {
        Postulation postulation = postulationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Postulation not found with ID: " + id));
        postulationRepository.delete(postulation);
    }
}
