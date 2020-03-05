import React, {useContext} from 'react'
// import{MyContext} from '../../context'
// import {deleteproy}  from '../../services/deleteproy'
import '../../styles/cardProject.css'



export default function CardProject( {history,picture,title,gh,bh,web,description,origindate,idproy,funcion}){
    const delElement =async  ( e ) =>{
       await  funcion(e)
       }
                return (
                    <div className="cardProject">
                        <h1>{title}</h1>
                        <img src={picture} alt={title} />
                        <p>{description}</p>
                        <div className="spanContainer">
                        <span>{gh}</span>
                        <span>{bh}</span>
                        <span>{web}</span>
                        <span>{origindate}</span>
                        <p id={idproy} onClick={delElement} className="deleteElemnet">Delete</p>
                        </div>
                    </div>
                )

}