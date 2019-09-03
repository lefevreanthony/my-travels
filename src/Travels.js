import React from "react";
import Travel from "./Travel";

const travels = [
    {
        destination: " Paris",
        country: " France",
        photo: "https://www.deplacementspros.com/wp-content/uploads/2019/03/paris-est-la-ville-la-plus-chere-du-monde.jpg",
        distance: "50 km",
    },
    {
        destination: " Madrid",
        country: " Espagne",
        photo: "https://www.spaneasylearning.com/wp-content/uploads/2019/06/Experiencia-Madrid-menos-peso.jpg",
        distance: "1000 km",
    },
    {
        destination: " Rome",
        country: " Italie",
        photo: "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg",
        distance: "1700 km",
    },

    
  ];
  
  const Travels = () => (
    <div>
      {travels.map(travel => <Travel {...travel} />
  
      )}
    </div>
  );
  
  export default Travels;