import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="project-heading">Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={`${process.env.PUBLIC_URL}/tamkeen1.png`} className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">TAMKEEN</h5>
                <p className="card-text">Tamkeen is an initiative to empower women with the necessary skills to showcase their unique creative products and achieve their goals.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={`${process.env.PUBLIC_URL}/CISCO.png`} className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">SOHO</h5>
                <p className="card-text">SOHO (Small Office/Home Office) project provides network solutions tailored for small businesses and home offices, ensuring seamless connectivity and security.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={`${process.env.PUBLIC_URL}/intelleverse.png`} className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">INTELLEVERSE</h5>
                <p className="card-text">A multiple intellengnece test to identify individual strengths and learning styles. empower users in making informed decisions based on their dominant intelligences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
