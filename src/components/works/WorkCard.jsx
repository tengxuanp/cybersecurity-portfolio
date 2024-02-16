import React from 'react';

const WorkCard = ({ workInfo }) => {
  const { id, name, url, category, description, tech, imgPath, demo } = workInfo;

  return (
    <div className="project-card">
      <img src={imgPath} alt={name} className="project-image" />
      <div className="project-details">
        <h3 className="project-name">{name}</h3>
        <p className="project-description">{description}</p>
        <div className="project-info">
          <p>
            <strong>Category:</strong> {category.join(', ')}
          </p>
          {tech && (
            <p>
              <strong>Tech:</strong> {tech.join(', ')}
            </p>
          )}
        </div>
        <div className="project-links">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              View Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
