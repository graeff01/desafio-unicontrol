import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid.js";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 20px;  /* Ajuste a distância do topo conforme necessário */
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 36px; 
  font-weight: bold;
  font-family: 'Poppins', sans-serif; 
  text-align: center;  
  text-transform: uppercase; 
  letter-spacing: 2px;  
  background-clip: text;  
  padding: 20px 0; 
  color: rgb(17, 17, 17);
  
  /* Sombra brilhante em torno das letras */
  text-shadow: 0 0 5px rgb(255, 255, 255), 0 0 10px rgb(206, 206, 206), 0 0 15px rgb(219, 219, 219), 0 0 20px rgb(255, 255, 255);
`;



function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error.message || "Erro ao carregar os usuários.");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <GlobalStyle />
      <TitleContainer>
        <Title>Desafio Tec. UniControl</Title>
      </TitleContainer>
      <Container>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION?.BOTTOM_LEFT || "bottom-left"} />
    </>
  );
}

export default App;
