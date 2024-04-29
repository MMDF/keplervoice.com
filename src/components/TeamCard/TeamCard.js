import React from "react";
import "../TeamCard/teamcard.css"

const TeamCard = ({ team1_image, test_name, role, test_des }) => {
  return (
  <div className="Team_cards">
      <div className="team_image">
        <img src={team1_image} alt="team1" className="teampic" />
      </div>
      <div className="team_content">
        <h2>{test_name}</h2>
        <p>{role}</p>
        <p>{test_des}</p>
      </div>
    </div>
    
  );
};
export default TeamCard;
