import React from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";

const DetailsModal = ({ isOpen, toggle, details }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Détails de la Postulation</ModalHeader>
      <ModalBody>
        <p><strong>Nom:</strong> {details.nomEtudiant} {details.prenomEtudiant}</p>
        <p><strong>Email:</strong> {details.emailEtudiant}</p>
        <p><strong>Filière:</strong> {details.filiereEtudiant}</p>
        <p><strong>Promotion:</strong> {details.promotionEtudiant}</p>
        <p><strong>Statut de Recherche:</strong> {details.statutRechercheEtudiant}</p>
        <p><strong>Offre de Stage:</strong> {details.offreStageTitle}</p>
        <p><strong>Date de Postulation:</strong> {details.dateDePostulation}</p>
        <p><strong>Statut de la Postulation:</strong> {details.statutPostulation}</p>
        <Button color="primary" onClick={() => window.open(details.cvUrl, "_blank")}>
          Voir le CV
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default DetailsModal;
