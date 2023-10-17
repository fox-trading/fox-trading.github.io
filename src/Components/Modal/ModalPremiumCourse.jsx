import {Modal} from "antd";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import {CoursePremiumDetails} from "../../Pages/CoursePremium/CoursePremiumDetails";
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
        <div className="details-title">{active.name}</div>
        {active.videoUrl && <VideoPlayer url={active.videoUrl}/>}
        <CoursePremiumDetails active={active}/>
      </div>
    </Modal>
  )

}

export default ModalPremiumCourse