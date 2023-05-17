import React from "react";

const Card = ({ users }) => {
  return (
    <div className="card-box">
      {users.map((user) => {
        return (
          <div key={user.id} className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" />
            <h4>Name: {user.name}</h4>
            <p>Job: {user.job}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
