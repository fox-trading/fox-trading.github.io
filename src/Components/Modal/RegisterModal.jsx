import React, { useState } from "react";
import { Modal } from "antd";
import ModalDone from './ModalDone';
import ModalJoin from './ModalJoin';

const RegisterModal = ({show, setShow}) => {
  const [loading, setLoading] = useState(false);
  // const [openSecond, setOpenSecond] = useState(false);

  const handleOk = () => {
    
  };

  const handleCancel = () => {
    setShow(false);
  };

  const onFinishFailed = (errorinfo) => {
    console.log("Failed", errorinfo);
  };

  return (
    <div>
      {/* <Modal
        open={openSecond}
        title=""
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <ModalDone />
      </Modal> */}

      <Modal
        open={show}
        title=""
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <ModalJoin />
      </Modal>
    </div>
  );
};

export default RegisterModal;
