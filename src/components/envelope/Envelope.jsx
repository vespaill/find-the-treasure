import "./Envelope.css";
import heart from "../../assets/heart-rotated.png";

const Envelope = () => (
   <div className="envelope">
      <svg className="triangle" viewBox="0 0 100 100">
         <polygon points="0,0 100,0 50.0,43.3"></polygon>
      </svg>
      <div className="envelope-front"></div>

      <img id="heart" src={heart}></img>
   </div>
);

export default Envelope;