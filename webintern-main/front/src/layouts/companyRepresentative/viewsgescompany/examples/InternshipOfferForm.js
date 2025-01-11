import React, { useState } from "react";
import "react-quill/dist/quill.snow.css"; // Import Rich Text Editor Styles
import ReactQuill from "react-quill";

const InternshipOfferForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: [""],
    startDate: "",
    endDate: "",
    stipend: "",
    location: "on-site",
    positions: "",
    contactEmail: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRequirementChange = (index, value) => {
    const newRequirements = [...formData.requirements];
    newRequirements[index] = value;
    setFormData((prev) => ({ ...prev, requirements: newRequirements }));
  };

  const addRequirement = () => {
    setFormData((prev) => ({ ...prev, requirements: [...prev.requirements, ""] }));
  };

  const removeRequirement = (index) => {
    const newRequirements = formData.requirements.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, requirements: newRequirements }));
  };

  const handleFileUpload = (e) => {
    setFormData((prev) => ({ ...prev, document: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <div style={styles.formContainer}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Post Your Internship Offer</h1>
        <p style={styles.headerDescription}>Fill out the form to post a new internship offer for students.</p>
      </div>
      <div style={styles.formCard}>
        <form onSubmit={handleSubmit}>
          {/* Internship Title */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Internship Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter internship title"
              required
              style={styles.input}
            />
          </div>

          {/* Internship Description */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Internship Description</label>
            <ReactQuill
              value={formData.description}
              onChange={(value) => setFormData((prev) => ({ ...prev, description: value }))}
              placeholder="Describe the internship role and responsibilities"
              style={styles.reactQuill}
            />
          </div>

          {/* Requirements */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Requirements</label>
            {formData.requirements.map((req, index) => (
              <div key={index} style={styles.requirementField}>
                <input
                  type="text"
                  value={req}
                  onChange={(e) => handleRequirementChange(index, e.target.value)}
                  placeholder={`Requirement #${index + 1}`}
                  style={styles.input}
                />
                <button
                  type="button"
                  style={styles.btnRemove}
                  onClick={() => removeRequirement(index)}
                  disabled={formData.requirements.length === 1}
                >
                  ✕
                </button>
              </div>
            ))}
            <button type="button" style={styles.btnAdd} onClick={addRequirement}>
              + Add Requirement
            </button>
          </div>

          {/* Duration */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Duration</label>
            <div style={styles.dateFields}>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
          </div>

          {/* Stipend */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Stipend (Optional)</label>
            <input
              type="number"
              name="stipend"
              value={formData.stipend}
              onChange={handleChange}
              placeholder="Enter stipend amount"
              style={styles.input}
            />
          </div>

          {/* Location */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Location</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              style={styles.select}
            >
              <option value="on-site">On-Site</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          {/* Number of Positions */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Number of Positions</label>
            <input
              type="number"
              name="positions"
              value={formData.positions}
              onChange={handleChange}
              placeholder="Enter number of positions"
              required
              style={styles.input}
            />
          </div>

          {/* Contact Email */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Contact Email</label>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              placeholder="Enter contact email"
              required
              style={styles.input}
            />
          </div>

          {/* Upload Supporting Document */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Upload Supporting Document (Optional)</label>
            <input type="file" onChange={handleFileUpload} style={styles.fileInput} />
          </div>

          {/* Submit and Preview */}
          <div style={styles.formButtons}>
            <button type="submit" style={styles.btnSubmit}>
              Post Offer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    backgroundColor: "#f1f1f1",
    minHeight: "100vh",
    flexDirection: "column",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  headerTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#333",
  },
  headerDescription: {
    fontSize: "18px",
    color: "#555",
  },
  formCard: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "700px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "8px",
  },
  formGroup: {
    marginBottom: "24px",
  },
  input: {
    width: "100%",
    padding: "14px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginTop: "8px",
    fontSize: "16px",
    color: "#333",
  },
  reactQuill: {
    height: "200px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginTop: "8px",
  },
  requirementField: {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
  },
  btnRemove: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "6px 12px",
    marginLeft: "12px",
    cursor: "pointer",
    borderRadius: "4px",
  },
  btnAdd: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 18px",
    marginTop: "12px",
    cursor: "pointer",
    borderRadius: "4px",
  },
  dateFields: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  select: {
    width: "100%",
    padding: "14px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginTop: "8px",
    fontSize: "16px",
    color: "#333",
  },
  fileInput: {
    marginTop: "8px",
    padding: "8px",
    fontSize: "16px",
  },
  formButtons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  },
  btnSubmit: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "14px 28px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
  },
};

export default InternshipOfferForm;
