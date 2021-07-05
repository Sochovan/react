import React from "react";

const Profile = (userData) => {
  return (
    <>
      <div className="profile__name">{`${userData.firstName} ${userData.lastName}`}</div>
      <div className="profile__birth">{`Was born ${userData.birthDate} in ${userData.birthPlace}`}</div>
    </>
  );
};
export default Profile;

const userData = {
  firstName: "John",
  lastName: "Doe",
  birthDate: "1991-01-17T11:11:11.819Z",
  birthPlace: "London",
};
