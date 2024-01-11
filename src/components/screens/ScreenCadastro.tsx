import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import img from '../img/Categarios.png'
// import Card from '../../components/card/Card' ;


function ScreenCadastro(){

  async function UsuarioDataGet(){
    var usuarioNameInput = document.getElementById("usuarioName") as HTMLInputElement || null;
    var usuarioLastNameInput = document.getElementById(" usuarioLastName") as HTMLInputElement || null;
    var usuarioCpfInput = document.getElementById("usuarioCpf") as HTMLInputElement || null;
    var usuarioEmailInput = document.getElementById("usuarioEmail") as HTMLInputElement || null;
    var usuarioHorarioInput = document.getElementById("usuarioHorario") as HTMLInputElement || null;
    var usuarioPelagemInput = document.getElementById("usuarioPelagem") as HTMLInputElement || null;
    var usuarioEspecieInput = document.getElementById("usuarioEspecie") as HTMLInputElement || null;
    var usuarioRacaInput = document.getElementById("usuarioRaca") as HTMLInputElement || null;
    var newDiv = document.getElementById("newDiv") as HTMLDivElement; 
  



 async function ScreensUsers(){
  const [nome, setName] = useState("");
  const [lastName, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [horario, setHorario] = useState("");
  const [pelagem, setPelagem] = useState("");
  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");

  const dataUser = () => {
    return {
      name: nome,
      lastName: lastName,
      cpf: cpf,
      email: email,
      horario: horario,
      pelagem: pelagem,
      especie: especie,
      raca: raca,
    };
  };

  await axios
      .post("http://localhost:4000/api/user", dataUser, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        maxRedirects: 0,
      })
      .then((response) => {
        console.log(response);
        alert("Dados cadastrados com sucesso")
      })
      .catch((error) => {
        console.log(error);
        alert("Não foi possível cadastrar , por favor tente novamente mais tarde!!!")
      });
      
  }

}

  return (
    

<div className="ContainerInput">
        <h1>Cadastro</h1>


        <div className="lyrics"> Nome:</div>
        <div className="Children">
          <input
            className="MyInput"
            type="text"
            placeholder="Name"
            rel="noopener noreferrer"
            id="usuarioName"
          />
          <p></p>

            <div className="lyrics"> Sobrenome:</div>
          <input
            className="MyInput"
            type="text"
            placeholder="Sobrenome"
            rel="noopener noreferrer"
            id="usuarioLastName"
          />
           <p></p>

            <div className="lyrics"> Cpf:</div>
          <input
            className="MyInput"
            type="text"
            placeholder="Cpf"
            rel="noopener noreferrer"
            id="usuarioCpf"
          />
           <p></p>

          <div className="lyrics"> Email:</div>
          <input
            className="MyInput"
            type="text"
            placeholder="Email"
            rel="noopener noreferrer"
            id="usuarioEmail"
          />

              <p></p>

          <div className="lyrics"> Agendamento:</div>
          <input
            className="MyInput"
            type="text"
            placeholder="Agendamento"
            rel="noopener noreferrer"
            id="usuarioHorario"
          />

           <p></p>

          <div className="lyrics"> pelagem:</div>
          <input
            className="MyInput"
            type="text"
            placeholder="Pelagem"
            rel="noopener noreferrer"
            id="usuarioPelagem"
          />
           <p></p>

          <div className="lyrics"> Especie:</div>
             <input
            className="MyInput"
            type="text"
            placeholder="Especie"
            rel="noopener noreferrer"
            id="usuarioEspecie"
          />
           <p></p>

            <div className="lyrics"> Raça:</div>
             <input
            className="MyInput"
            type="text"
            placeholder="Raca"
            rel="noopener noreferrer"
            id="usuarioRaca"
          />
        </div>

        <button id="cadastrarProduto" onClick={UsuarioDataGet} className="MyButton">
          Cadastrar
        </button>

      <div> 
      <img className="categorias" src={img} alt="categorias"/>
     
      </div>
     
    </div>

  );
};

const styles = {
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ebe3cc',
      
      
    },
    input: {
      // display: 'flex',
    
      flexDirection: 'column',
      marginBottom: 36,
      padding: 8,
      fontSize: 16,
      border: '1px solid #ccc',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
     
    
       
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      marginTop: 20,
      color: 'white',
      cursor: 'pointer',
      alignItems: 'center',
      
    },
    lyrics:{
      fontSize: 7,
    }
  };

export default ScreenCadastro;


      
