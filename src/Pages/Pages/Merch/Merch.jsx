import "./Merch.scss";
import shirt from "../../../Imgs/Merch.png";

const Merch = () => {
  return (
    <div className="merch">
      <div className="merch_content">
        <div className="merch_content_text">Мерч</div>
        <div >
          <img src={shirt} alt="" className="merch_img"/>
        </div>
      </div>
    </div>
  );
};

export default Merch;
