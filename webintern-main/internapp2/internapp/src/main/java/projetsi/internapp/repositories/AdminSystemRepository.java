package projetsi.internapp.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import projetsi.internapp.entities.AdminSystem;

@Repository
public interface AdminSystemRepository extends JpaRepository<AdminSystem, Long> {
    Optional<AdminSystem> findByEmailAdmin(String email);
}
