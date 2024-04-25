import React from "react";
import "../TeamCard/teamcard.css"

const TeamCard = ({ team1_image, test_name, test_des }) => {
  return (
  <div className="Team_cards">
      <div className="team_image">
        <img src={team1_image} alt="team1" className="teampic" />
      </div>
      <div className="team_content">
        <h3>{test_name}</h3>
        <p>{test_des}</p>
      </div>
    </div>
    
  );
};
export default TeamCard;
