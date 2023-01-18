import React, { useState } from "react";
import { Modal } from "antd";
import ModalDone from './ModalDone';
import ModalJoin from './ModalJoin';

const RegisterModal = ({show, setShow}) => {
  const [loading, setLoading] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  const handleFinish = () => {
    setShow(false);
    setOpenSecond(true);
  }

  return (
    <div>
      <Modal
        open={openSecond}
        title=""
        onCancel={() => setOpenSecond(false)}
        footer={[]}
      >
        <ModalDone />
      </Modal>

      <Modal
        open={show}
        title=""
        onCancel={() => setShow(false)}
        footer={null}
      >
        <ModalJoin handleFinish={handleFinish}/>
      </Modal>
    </div>
  );
};

export default RegisterModal;
