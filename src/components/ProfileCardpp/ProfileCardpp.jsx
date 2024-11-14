import "./styles.css";
import { userData } from "./data";
import userAvatar from "../../assets///picture.jpg";

function ProfileCardpp() {
  return (
    <div className="profile-card">
      <img 
        className="profile-avatar" src={userAvatar} alt="User Avatar" 
      />
      <h2 className="profile-name">{userData.name[1]}</h2>
      <div>{userData.profession[0]}</div>
      <div>{userData.hobby[2]}</div>
    </div>
  );
};

export default ProfileCardpp;
