import React,{ useEffect, useState } from "react";
import '../styles/Panel.css';

export const Panel = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://ticket-generator-f89af-default-rtdb.firebaseio.com/users.json')
            .then(response => response.json())
            .then(data => Object.values(data))
            .then(user => setUsers(user))
            .catch(error => console.error(error));
    },[])
    return(
        <>
            <div className="panel-page-container">
                <div className="panel-container">
                    <div className="panel">
                        <div className="titles-container">
                        <h4 className="info-verified">Verificado</h4>
                            <h4 className="title">Nombre</h4>
                            <h4 className="info">Telefono</h4>
                            <h4 className="info">Correo</h4>
                            <h4 className="info">Referencia</h4>
                            
                        </div>
                       {
                           users.map((item, i) => (
                            <div className="data-container">
                                <h4 className="info-verified">{item.isCheck ? 'Si' : 'No'}</h4>
                                <h4 className="info-name">{item.username}</h4>
                                <h4 className="info">{item.phone}</h4>
                                <h4 className="info">{item.email}</h4>
                                <h4 className="info">{item.referal}</h4>
                            </div>
                           ))
                       }
                    </div>
                </div>
            </div>
        </>
    )
}