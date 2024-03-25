import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./fichelogement.css";
// ASSETS
import DataLogement from "../../data/logements.json";

//import composants
import Slide from "../../components/slide/slide";

//fonction pour gérer les évènements et éléments de la page logement
function Fichelogement() {
  // Récupérer l'ID du logement à partir de l'URL
  const [logement, setLogement] = useState(null);
  const { id } = useParams(); // Récupère l'id du logement dans l'url

  useEffect(() => {
    // Récupère les infos du logement en fonction de l'id
    const data = DataLogement.find((logement) => logement.id === id);
    if (data) {
      setLogement(data);
    } else {
      setLogement(null);
    }
  }, [id]);

  return (
    <div className="ficheslogement">
      {logement && (
        <>
          <Slide pictures={logement.pictures} />
          <h2>{logement.title}</h2>
          <div>
            <h3>{logement.host.name}</h3>
            <img className="imgcercle" src={logement.host.picture} />
          </div>
          <p>{logement.location}</p>
          <ul>
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
export default Fichelogement;
