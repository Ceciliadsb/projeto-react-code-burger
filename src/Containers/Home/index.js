import React , {useState,useRef,} from  "react";
import axios from 'axios'
import { Container, H1,ContainerItens, Image, InputLabel, Input,Button }    from './styles'
import burger from "../../image/burger 1.svg"

//import H1 from '../../Components/Title'
//import ContainerItens from '../../Components/ContainerItens'
//import Button from "../../components/Button";


import { useNavigate} from 'react-router-dom'




function App() {
  //jsx
  //const users = [];
  const [orders, setUsers] = useState([])
  const InputPedido= useRef()
  const InputName = useRef()
  const navigate=useNavigate()



  async function addNewUser() {

    const {data: newUser}= await axios.post("http://localhost:3001/order",{
    
    clientName:InputName.current.value,
     orderr: InputPedido.current.value,});

    setUsers([
     ...orders,newUser]);



      navigate("/usuarios")

  
    }

  return (
    <Container >

      <Image alt="logo-imagem" src={burger} />
      <ContainerItens>
        <H1> Faça seu pedido! </H1>
        <InputLabel >Digite seu Pedido</InputLabel>
        <Input ref={InputPedido} placeholder="1 Coca-cola, 1-Xsalada"></Input>

        <InputLabel>Nome do cliente </InputLabel>
        <Input  ref={InputName} placeholder="Steve Jobs "></Input>

        <Button  onClick= {addNewUser}  >Novo Pedido  </Button>

       
      
      </ContainerItens>
    </Container>
  );
}

export default App