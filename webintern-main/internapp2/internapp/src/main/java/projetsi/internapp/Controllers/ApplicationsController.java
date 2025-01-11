package projetsi.internapp.Controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import projetsi.internapp.dto.ApplicationDetailsDTO;
import projetsi.internapp.services.PostulationService;

@RestController
@RequestMapping("/api/offres/applications")
@CrossOrigin(origins = "http://localhost:3000")  // Adjust this URL as needed
public class ApplicationsController {

    @Autowired
    private PostulationService postulationService;

    /**
     * Endpoint to fetch all applications.
     */
    @GetMapping
    public ResponseEntity<List<ApplicationDetailsDTO>> getApplications() {
        try {
            List<ApplicationDetailsDTO> applications = postulationService.getAllApplicationsWithDetails();
            if (applications.isEmpty()) {
                return ResponseEntity.noContent().build();  // Return 204 if no applications found
            }
            return ResponseEntity.ok(applications);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);  // Internal Server Error if something goes wrong
        }
    }

    /**
     * Endpoint to update the status of an application (postulation).
     */
    @PutMapping("/{id}/updateStatus")
    public ResponseEntity<String> updateStatus(@PathVariable Long id, @RequestBody String statut) {
        try {
            postulationService.updateStatus(id, statut);
            return ResponseEntity.ok("Status updated successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to update status");
        }
    }

    /**
     * Endpoint to delete an application (postulation).
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteApplication(@PathVariable Long id) {
        try {
            postulationService.deleteApplication(id);
            return ResponseEntity.ok("Application deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to delete application");
        }
    }
}

