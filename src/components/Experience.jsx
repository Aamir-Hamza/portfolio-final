import React from "react";
import certificates from "./data/certificates.json"; // Rename JSON file for clarity

const   Experience= () => {
  return (
    <div className="container certificate-section" id="certificates">
      <h1 className="text-center">CERTIFICATES</h1>
      {certificates.map((cert) => (
        <div
          key={cert.id}
          className="certificate-item text-center my-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="certificate-image">
            <img 
              src={cert.imageUrl} 
              alt={`Certificate for ${cert.title}`} 
              className="img-fluid"
            />
          </div>
          <div className="certificate-info">
            <h2>{cert.title}</h2>
            <h4>
              <span style={{ color: "yellowgreen" }}>
                {cert.startDate} - {cert.endDate}
              </span>{" "}
              | <span style={{ color: "yellow" }}>{cert.issuer}</span>
            </h4>
            <p className="description" style={{ color: "lightgray" }}>
              {cert.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
