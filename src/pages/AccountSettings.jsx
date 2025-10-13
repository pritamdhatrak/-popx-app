import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export default function AccountSettings() {
  const { user } = useContext(UserContext);
  const randomImage = "https://picsum.photos/100"; 

  return (
    <div className="page">
      <h2>Account Settings</h2>
      <div className="profile-card">
        <img src={randomImage} alt="profile" className="simple-img" />
        <div className="profile-details">
          <h4>{user.name || "Guest User"}</h4>
          <p>{user.email || "No Email Available"}</p>
        </div>
      </div>
      <p>
        Lorem Ipsum Dolor Sit Amet, Consectetur Sadipsicing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
        Sed Diam
      </p>
    </div>
  );
}
