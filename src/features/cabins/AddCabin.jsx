import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Row from "../../ui/Row";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <Modal>
      <Modal.open opens="cabin-form">
        <Button>Add New Cabin</Button>
      </Modal.open>
      <Modal.window name="cabin-form">
        <CreateCabinForm />
      </Modal.window>
    </Modal>
  );
}

export default AddCabin;
