import React, { useState } from "react";

const Indexgescompany = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    location: "ONSITE", // Valeur par défaut
    positions: "",
    document: null,
  });

  const locationOptions = ["ONSITE", "REMOTE", "HYBRID"];

  // Gestion des changements de formulaire
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Envoi des données au backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      titreOffre: formData.title,
      description: formData.description,
      dateDebutStage: formData.startDate,
      dateFinStage: formData.endDate,
      lieu: formData.location,
      nombredeplace: formData.positions,
      conventionDeStage: formData.document ? formData.document.name : "",
    };

    try {
      const response = await fetch("http://localhost:8080/api/offres", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi de l'offre.");
      }

      const data = await response.json();
      alert("Offre publiée avec succès !");
      console.log("Réponse du backend:", data);
      setFormData({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        location: "ONSITE",
        positions: "",
        document: null,
      });
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur s'est produite lors de la publication de l'offre.");
    }
  };

  // Styles (facultatif)
  const styles = {
    container: {
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    btnSubmit: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    btnSubmitHover: {
      backgroundColor: "#45a049",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Publier une Offre de Stage</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Titre de l'offre"
          value={formData.title}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          style={styles.input}
          rows="5"
          required
        />
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          style={styles.input}
          required
        >
          {locationOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="positions"
          placeholder="Nombre de places"
          value={formData.positions}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="file"
          name="document"
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.btnSubmit}>
          Publier l'Offre
        </button>
      </form>
    </div>
  );
};

export default Indexgescompany;