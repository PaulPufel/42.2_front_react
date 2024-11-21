import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedbacks() {
    const [likes, setLikes] = = useState(0);
    const [dislikes, setDislikes] = = useState(0);
  
    const clickLike = () => setLikes((prevValue) => prevValue+1) ;
    const clickDislike = () => setDisLikes((prevValue) => prevValue+1) ;
    const resetResults = () => {
      setLikes(0);
      setDislikes(0);
    };
  
    return (
      <div className="feedbacks-container">
        <div className="feedbacks-controls">
          <span className="feedbacks-count">{likes}</span>
          <Button name="Like" onClick={clickLike} />
          <Button name="Dislike" onClick={clickDislike} />
          <span className="feedbacks-count">{dislikes}</span>
        </div>
        <Button name="Reset Results" onClick={resetResults} />
      </div>
    );
  }

    export default Feedbacks;
