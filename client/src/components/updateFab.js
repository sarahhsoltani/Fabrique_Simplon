import React from 'react'
import {useEffect,useState} from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
function UpdateFab() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div >
             <>
      <Button className="btn btn-warning my-2" onClick={handleShow}>
      <><i class="fas fa-edit"></i></>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Fabrique</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="nom de fabrique" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>formateurs</Form.Label>
    <Form.Control type="text" placeholder="nom de formateur" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Apprenants</Form.Label>
    <Form.Control type="text" placeholder="nom de formateur" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Descriptions</Form.Label>
    <Form.Control type="text" placeholder="nom de formateur" />
  </Form.Group>
 
</Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn simplon" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        </div>
    )
}
export default UpdateFab;