import "./ModalPremiumCourse.scss"
import {Modal} from "antd";

const ModalPremiumCourse = ({show,close,text,title}) => {
    return (
<Modal
open={show}
title=""
onCancel={close}
footer={null}
>
    <div className="modal_premium">
    <div className="collapse_name">{text}</div> 
    <div className="text">{title}</div>
    </div>
</Modal>
    )

}

export default ModalPremiumCourse