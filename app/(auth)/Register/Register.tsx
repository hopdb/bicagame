import { Modal } from "antd";

export default function Register({ handleOpen, open }) {
  return (
    <Modal
      title="Vertically centered modal dialog"
      centered
      open={open}
      // onOk={() => setModal2Open(false)}
      onCancel={handleOpen}
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  );
}
