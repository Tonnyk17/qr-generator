import React,{ useEffect, useState } from "react";
import '../styles/Panel.css';
import { ref, get,child, getDatabase, remove} from "firebase/database";

export const Panel = () => {
    const [users, setUsers] = useState([]);
    const [counter, setCounter] = useState(0);
    const dbRef = ref(getDatabase());

    useEffect(() => {

        
        get(child(dbRef, 'users/')).then(async(snapshot) => {
            setCounter(snapshot.size)
        })

        fetch('https://ticket-generator-f89af-default-rtdb.firebaseio.com/users.json')
            .then(response => response.json())
            .then(data => Object.values(data))
            .then(user => setUsers(user))
            .catch(error => console.error(error));
    },[])

    const handleRemove = () => {

        remove(child(dbRef,'users/'))
        .then(async(snapshot) => {
            console.log('Datos eliminados')
        })
        .catch(error => console.log(error))
    }
    return(
        <>
            <div className="panel-page-container">
            <h2 className="counter">{counter} boletos emitidos</h2>
                <button onClick={handleRemove} className="cleaner-button">Limpiar base de datos</button>
                <div className="panel-container">
                    <div className="panel">
                        <div className="titles-container">
                        <h4 className="info-verified">Verificado</h4>
                            <h4 className="title">Nombre</h4>
                            <h4 className="info-phone">Telefono</h4>
                            <h4 className="info">Referencia</h4>
                            
                        </div>
                       {
                           users.map((item, i) => (
                            <div className="data-container" key={i}>
                                <h4 className="info-verified">{item.isCheck ? 'Si' : 'No'}</h4>
                                <h4 className="info-name">{item.username}</h4>
                                <h4 className="info-phone">{item.phone}</h4>
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