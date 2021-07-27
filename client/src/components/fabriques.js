import React from 'react'
import {useEffect,useState} from 'react'
import {ListGroup,Card,Button} from 'react-bootstrap'
import axios from 'axios'
import AddFab from './addFab'
import UpdateFab from './updateFab'
 function Fabriques() {
    const [fabriqueS, setFabriqueS] = useState([])
    // function to get al fabrique
    const getFabrique =()=>{
        axios.get('/simplon/fabrique/get').then(res=>
            setFabriqueS(res.data)
            //console.log('fabrique',res.data)
            
            )
           
            .catch(err=>console.error(err))
    }
    useEffect(() => {
       getFabrique()
    }, [])
    return (
        <div className='container mt-2'>
          <div className="d-flex justify-content-around">
           <img  className="mt-5 w-25" src="data:image/png;base64,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" alt="..." />
           <AddFab  getFabrique={getFabrique}/>
            </div>
            <h5 className="mt-4 mb-2">Simplon, réseau de Fabriques numériques et inclusives</h5>
            
            
            <div  className='d-flex justify-content-around mt-5'>
            {fabriqueS.map((el,key)=>(
               
                
                <Card key={key} style={{ width: '20rem' }}>
                <Card.Header> <p className="lab">Name</p> {el.name}</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item><p className="lab">Formateur</p> {el.formateurs}</ListGroup.Item>
                  <ListGroup.Item><p className="lab">Apprennants</p> {el.apprenants}</ListGroup.Item>
                  <ListGroup.Item><p className="lab">Description</p> {el.description}</ListGroup.Item>
                </ListGroup >
                <div className='d-flex justify-content-around'>
                <Button className="btn simplon my-2"><i class="fas fa-trash-alt  "></i></Button>
                <UpdateFab/>
                </div>
              </Card> 
                  
               
              
            ))}
           </div>
        </div>
    )
}

export default Fabriques