import React, { useState } from "react";
import styles from "../styles/Start.module.scss";

const Start = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    zip: "",
    homePrice: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Form submitted! " + JSON.stringify(formData, null, 2));
  };

  return (
    <div className={styles.startContainer}>
      <h1>🚀 Get Started with Your Mortgage</h1>
      <p>Fill in the details below to begin your home loan journey.</p>

      <form onSubmit={handleSubmit} className={styles.startForm}>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>ZIP Code</label>
          <input
            type="text"
            name="zip"
            required
            value={formData.zip}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Home Price ($)</label>
          <input
            type="number"
            name="homePrice"
            value={formData.homePrice}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Continue →
        </button>
      </form>
    </div>
  );
};

export default Start;
