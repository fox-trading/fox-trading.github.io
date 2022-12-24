import "./Stats.scss";
import stats from "../../../Imgs/Stats.png";

const Stats = () => {
  return (
    <div className="stats">
      <div className="stats_content">
        <div className="stats_text">Статистика трейдеров команды</div>
        <div className="stats_img">
          <img src={stats} alt="" className="stats_img" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
