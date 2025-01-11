package projetsi.internapp.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
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
    @Transactional
    public void updateStatus(Long postulationId, String status) {
        // Convert string to enum
        statutpos newStatus;
        try {
            newStatus = statutpos.valueOf(status.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid status value: " + status + 
                ". Allowed values are: ENCOURS, ACCEPTE, REFUSE");
        }

        // Find and update the postulation
        Postulation postulation = postulationRepository.findById(postulationId)
            .orElseThrow(() -> new EntityNotFoundException("Postulation not found with id: " + postulationId));

        postulation.setStatut(newStatus);
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
