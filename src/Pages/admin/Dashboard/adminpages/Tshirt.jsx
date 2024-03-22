import React from 'react'
import Table from 'react-bootstrap/Table';

const Tshirt = () => {
  return (
    <>
    <div className="justify-content-between " style={{display:"flex"}}>
      <h2 >T-Shirt List</h2>
      <button className='btn btn-success  float-lg-end'  >Add [+]</button>
    </div>
    <Table striped bordered hover size="sm" style={{marginTop:"50px",fontSize:"18px"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        
      </tbody>
    </Table>
    </>
    
  )
}

export default Tshirt