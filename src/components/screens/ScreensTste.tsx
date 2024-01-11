import { useState } from 'react';
import axios from 'axios';
import Card from '../card/Card';


function ScreenCadastro() {
  const [nome, setNome] = useState("");
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

function HandleData( e: any ){
  setNome(e.target.value)
  setSobrenome(e.target.value)
  setCpf(e.target.value)
  setEmail(e.target.value)
  setHorario(e.target.value)
  setPelagem(e.target.value)
  setEmail(e.target.value)
  setEspecie(e.target.value)
  setRaca(e.target.value)
}

  const UsuarioDataGet = async () => {
    try {
      await axios.post("http://localhost:4000/api/user", dataUser(), {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Dados cadastrados com sucesso");
    } catch (error) {
      console.error(error);
      alert("Não foi possível cadastrar, por favor, tente novamente mais tarde!!!");
    }
  };

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
        value={nome}
        onChange={HandleData}
      />
      <p></p>

        <div className="lyrics"> Sobrenome:</div>
      <input
        className="MyInput"
        type="text"
        placeholder="Sobrenome"
        rel="noopener noreferrer"
        id="usuarioLastName"
        value={lastName}
        onChange={HandleData}
      />
       <p></p>

        <div className="lyrics"> Cpf:</div>
      <input
        className="MyInput"
        type="text"
        placeholder="Cpf"
        rel="noopener noreferrer"
        id="usuarioCpf"
        value={cpf}
        onChange={HandleData}

      />
       <p></p>

      <div className="lyrics"> Email:</div>
      <input
        className="MyInput"
        type="text"
        placeholder="Email"
        rel="noopener noreferrer"
        id="usuarioEmail"
        value={email}
        onChange={HandleData}
      />

          <p></p>

      <div className="lyrics"> Agendamento:</div>
      <input
        className="MyInput"
        type="text"
        placeholder="Agendamento"
        rel="noopener noreferrer"
        id="usuarioHorario"
        value={horario}
        onChange={HandleData}
      />

       <p></p>

      <div className="lyrics"> pelagem:</div>
      <input
        className="MyInput"
        type="text"
        placeholder="Pelagem"
        rel="noopener noreferrer"
        id="usuarioPelagem"
        value={pelagem}
        onChange={HandleData}

      />
       <p></p>

      <div className="lyrics"> Especie:</div>
         <input
        className="MyInput"
        type="text"
        placeholder="Especie"
        rel="noopener noreferrer"
        id="usuarioEspecie"
        value={especie}
        onChange={HandleData}
      />
       <p></p>

        <div className="lyrics"> Raça:</div>
         <input
        className="MyInput"
        type="text"
        placeholder="Raca"
        rel="noopener noreferrer"
        id="usuarioRaca"
        value={raca}
        onChange={HandleData}
      />
    </div>

    <button id="cadastrarProduto" onClick={UsuarioDataGet} className="MyButton">
      Cadastrar
    </button>

  <div> 
  {/* <img className="categorias" src={img} alt="categorias"/> */}
 
  </div>
  <div>

    </div>
</div>
  );
}

export default ScreenCadastro;
