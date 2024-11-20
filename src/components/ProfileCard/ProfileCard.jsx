import "./styles.css";
import { userData } from "./data";
import userAvatar from "../../assets//avatar.jpg";

function ProfileCard() {
  return (
    <div className="profile-card-wrapper">
      <div className="profile-card-title">{userData.name}</div>
      {/* 1 вариант */}
      <img src={userData.avatar} alt="user avatar"/>
      {/* 2 вариант */}
      {/* <img src={userAvatar} alt="user avatar"/> */}
      <div>{userData.profession}</div>
      <div>{userData.hobbies[0]}</div>
    </div>
  );
}

export default ProfileCard;
