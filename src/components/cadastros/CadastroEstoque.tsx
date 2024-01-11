import React from "react";
import axios from "axios";
import  './CadastroEstoque.css';
import { Link } from 'react-router-dom'
import ScreensTste from '../../components/screens/ScreensTste';
import Card from '../card/Card';

function CadastroEstoque(){
    return(
       
            <div className="FlexPai">
            <Link to={'/Listagem'}>
            </Link>

                <div className="ce">
                    Listagem de cadastros 
                </div>
                    <p></p>
                    <p></p>
                <div className="nome" >
                 nome:
                
                </div>
                <div className="quantity">
                 sobrenome: 
                    
                </div>
    
                <div className="quantity">
                 cpf: 
                    
                </div>

                <div className="quantity">
                 email: 
                   
                </div>

                <div className="quantity">
                 horario: 
                    
                </div>

                <div className="quantity">
                  Pelagem: 
                   
                </div>

                <div className="quantity">
                 Especie: 
                  
                </div>

                <div className="quantity">
                 Raca: 
                    
                </div>

                    <p></p>
                    <p></p>        
                

                    {/* <Card title={''} data={[]}></Card> */}
            </div>






            
    )
    
    }
    
 
    export default CadastroEstoque;


