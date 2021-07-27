import axios from 'axios';
import React from 'react'
import {useEffect,useState} from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
function AddFab() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [input, setInput] = useState({name:"",formateurs:"",apprenants:"",description:""})
    
    const changeHandler=(e)=>{
      const {name,value}=e.target
      setInput({
          ...input,
          [name]:value
      })
      console.log(input)
    }
    const addFabrique=fab=>{
        axios.post('/simplon/fabrique/add',{
            name:fab.name,
            formateurs:fab.formateurs,
            apprenants:fab.apprenants,
            description:fab.description
        }).then(res=>console.log('dddddddddddddddd',res.data))
        .catch(err => console.error(err));
    }
    return (
        <div className="mt-5">
             <>
      <Button className="btn simplon px-5" onClick={handleShow}>
       Add Fabrique
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Fabrique</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control  name="name" type="text" placeholder="nom de fabrique"  onChange={changeHandler}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>formateurs</Form.Label>
    <Form.Control name="formateurs"  type="text" placeholder="nom de formateur" onChange={changeHandler} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Apprenants</Form.Label>
    <Form.Control name="apprenants"  type="text" placeholder="nom de formateur" onChange={changeHandler} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Descriptions</Form.Label>
    <Form.Control  name="description" type="text" placeholder="nom de formateur" onChange={changeHandler} />
  </Form.Group>
 
</Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn simplon" onClick={addFabrique}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        </div>
    )
}
export default AddFab;