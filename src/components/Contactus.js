// Contactus.js
import React from 'react';

const Contactus = () => {
  return (
    <div style={{ backgroundColor: '#f3e5f5', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ color: '#6a1b9a', marginBottom: '20px' }}>Contact me</h2>
      <div style={{ marginBottom: '20px' }}>
    
        <form>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name" style={{ color: '#6a1b9a' }}>Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #6a1b9a' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email" style={{ color: '#6a1b9a' }}>Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #6a1b9a' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="date" style={{ color: '#6a1b9a' }}>Date:</label>
            <input type="date" id="date" name="date" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #6a1b9a' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="description" style={{ color: '#6a1b9a' }}>Description:</label>
            <textarea id="description" name="description" rows="4" placeholder="Enter your message" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #6a1b9a' }}></textarea>
          </div>
          <button type="submit" style={{ backgroundColor: '#6a1b9a', color: '#ffffff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>
      <div>
        <h3 style={{ color: '#6a1b9a' }}>Follow me</h3>
        <ul className="social-icons" style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ display: 'inline-block', marginRight: '10px' }}><a href="mailto:210882@students.au.edu.pk" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope" style={{ color: '#6a1b9a', fontSize: '24px' }}></i></a></li>
          <li style={{ display: 'inline-block' }}><a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" style={{ color: '#6a1b9a', fontSize: '24px' }}></i></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contactus;
