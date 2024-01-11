import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Card from './components/card/Card';
// import Mensagem from './components/mensagem/Mensagem';
//  import UserInput from './components/userInput/UserInput';
// import ProjetoTrello from './components/projetoTrello/ProjetoTrello'
import Navbar from './components/navbar/Navbar'
import CadastroEstoque from './components/cadastros/CadastroEstoque';
// import CadastroCliente from './components/cadastros/CadastroCliente';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
// import ScreenCadastro from './components/screens/ScreenCadastro';
import ScreensTs from './components/screens/ScreensTste';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <>

  
    <BrowserRouter basename='/app' >
   <Routes>
    <Route path='/' element={ <Navbar /> } /> 
    <Route path='/venda' element= { <CadastroEstoque/> } />
    {/* <Route path='/home' element= { <Navbar /> } /> */}

    {/* <Route path='/cliente' element= { <ScreenCadastro /> } /> */}
    <Route path='/cliente' element= { <ScreensTs /> } />
     
     
      {/* <Route path='/home' element= { <Navbar /> } /> */}

      
      {/* <Route path='/cadastroCliente'  element= { <CadastroCliente /> } /> */}


      {/* <Route path='/cadastroEstoque' element= { <CadastroEstoque /> } /> */}
       {/* <Route path='/cadastroEstoque' element= { <Card /> } /> */}
      {/* <Route path='/cadastroVenda' element= { <CadastroUsuario /> } /> */}


      {/* <Route path ='*' element = {<Navbar></Navbar>}></Route> */}

    </Routes>

    </ BrowserRouter > 
   
    {/* <App /> */}
     {/* <Mensagem/> */}
    {/* <UserInput/> */}
   {/* <Navbar /> */}

   </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
