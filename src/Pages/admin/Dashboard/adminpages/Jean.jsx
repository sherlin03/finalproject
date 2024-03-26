import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link} from 'react-router-dom';

const Jean = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:4000/jean');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error('Failed to fetch users.');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  




  return (




    
    <>
    <div className="justify-content-between " style={{display:"flex"}}>
      <h2 >Jean List</h2>
      <Link to='/addjean' className='btn btn-success text-center float-lg-end'  style={{textDecoration:"none",paddingTop:"10px"}}> Add [+] </Link>
    </div>
    <Table striped bordered hover size="sm" style={{marginTop:"50px",fontSize:"18px"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Offer</th>
          <th>Discription</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      
      </thead>
      <tbody>
      {users.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td><img src={user.image} alt="Profile" style={{ width: '50px', height: '50px' }} /></td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
    
  )
}

export default Jean