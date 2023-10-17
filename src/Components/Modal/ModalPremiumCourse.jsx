import {Modal} from "antd";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./ModalPremiumCourse.scss"

const ModalPremiumCourse = ({show, close, active}) => {
  return (
    <Modal
      open={show}
      title=""
      onCancel={close}
      footer={null}
    >
      <div className="modal_premium">
        <div className="collapse_name">{active.name}</div>
        <VideoPlayer url={active.videoUrl}/>

        <div className="details-description">
          <ul className="details-description__list">
            {active.list.map((theme, i) =>
              <li className="text" key={i}>{theme.title}</li>
            )}
          </ul>
        </div>
      </div>
    </Modal>
  )

}

export default ModalPremiumCourse