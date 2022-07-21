import React, { useState, useEffect } from "react";
import axios from 'axios'
import Pacote from '../../image/pacote.svg'
import Trash from '../../image/trash.svg'
import { 
  Container, Image,    User } 
  from './styles'
import H1 from '../../components/Title'
import ContainerItens from '../../components/ConatinerItens'
import Button from "../../components/Button";

import {useNavigate} from 'react-router-dom'



function Users() {
  //jsx
  //const users = [];
  const [orders, setUsers] = useState([])
  const navigate = useNavigate()
 
 



  
  //use effect

  useEffect(() => {
    async function fetchUsers() {

      const { data: newUsers } = await axios.get("http://localhost:3001/order")

      setUsers(newUsers);
    }

    fetchUsers()
  }, [])







   async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/order/${userId}`)
    const newUsers = orders.filter(user => user.id !== userId)
    setUsers(newUsers)
  }


function goBackPage(){
navigate("/")

}


  return (
    <Container >

      <Image alt="logo-imagem" src={Pacote} />
      
        <H1> Pedidos </H1>
        

    
        <ul>
          {orders.map(user => (
            <User key={user.id}>
              <p> {user.orderr}</p>
              <p>{user.clientName}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lata-de-lixo" /></button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage} >Voltar</Button>
     
    </Container>
  );
}
// onClick={addNewUser}

//exportando app
export default Users