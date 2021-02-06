
import React from 'react';

const Equipe=(props) => {
    return(
        <div>
        <Sobre nome = {props.nome} cargo = {props.funcao}  idade = {props.idade}/>
        <Midias  face = {props.facebook} instagram={props.instagram}  like={props.linkedin}  />
        <hr/>
        </div>
    );
}

const Sobre = (props) =>{
    return(
        <div>
         <h2>Ola eu sou {props.nome}</h2>
         <h3>Meu cargo é {props.cargo}</h3>
         <h3>Eu tenho {props.idade}</h3>
        </div>
    );

}
const Midias=(props) =>{
     return(
         <div>
         <a  href="https://www.google.com/" onClick={props.face} > facebook </a>
         <a href="https://www.google.com/" onClick={props.instagram}> linkindin </a>
          <a href="https://www.google.com/" onClick={props.like}> instragram </a>
         </div>
     );
}


                             
function index() {
    return (
       <div> 
         <h1>Conheça nossa equipe:</h1>
         <Equipe nome="Amanda" funcao="desenvolvedora" idade="29" facebook="https://www.google.com/" instragram="" linkedin=""/>
         <Equipe nome="Leticia" funcao="chefe" idade="29" facebook="https://www.google.com/" instragram="" linkedin=""/>
        </div>
     );
}
export default index;