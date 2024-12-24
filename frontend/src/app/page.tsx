"use client";

import React, { useState } from 'react';

const HomePage = () => {
  const [linkedinId, setLinkedinId] = useState('');
  const [githubId, setGithubId] = useState('');
  const [codeforcesId, setCodeforcesId] = useState('');

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>All In One Wrapped</h1>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="linkedinId" style={styles.label}>LinkedIn:</label>
          <input
            type="text"
            id="linkedinId"
            value={linkedinId}
            onChange={(e) => setLinkedinId(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="githubId" style={styles.label}>GitHub:</label>
          <input
            type="text"
            id="githubId"
            value={githubId}
            onChange={(e) => setGithubId(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="codeforcesId" style={styles.label}>Codeforces:</label>
          <input
            type="text"
            id="codeforcesId"
            value={codeforcesId}
            onChange={(e) => setCodeforcesId(e.target.value)}
            style={styles.input}
          />
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#1e3a8a', // Dark blue background
    padding: '1rem',
  },
  header: {
    marginBottom: '2rem',
    fontSize: '2.5rem',
    color: '#facc15', // Vibrant yellow color for the header
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 0 15px rgba(0,0,0,0.2)',
    backgroundColor: '#f0f4c3', // Light yellow background for the form
  },
  formGroup: {
    marginBottom: '1rem',
    width: '100%',
  },
  label: {
    marginBottom: '.5rem',
    display: 'block',
    color: '#111827', // Dark text color for labels
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '.75rem',
    borderRadius: '8px',
    border: '2px solid #2563eb', // Blue border for inputs
    fontSize: '1rem',
  },
};

export default HomePage;
