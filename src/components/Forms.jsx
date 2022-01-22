import React, { useEffect, useState } from "react";
import {Input} from './Input';
import '../styles/Forms.css';
import { Button } from "./Button";
import { content, createTicket } from "../functions";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Ticket } from "./Ticket";

export const Forms = () => {
    const [userData, setUserData] = useState();
    const [ticketData, setTicketData] = useState();

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        setTicketData(userData);
    }, [userData])

    const handleClick = () => {
        console.log(ticketData)
        const qr = createTicket(ticketData)
        qr.then(data => console.log(data))
    }

    return(
        <>
            <form className="form-component">
                {
                    content.inputs.map((item, i)=> (
                        <Input 
                            type={item.type} 
                            placeholder={item.placeholder} 
                            value={item.value}
                            labelText={item.labelText}
                            key={i}
                            onChange={handleChange}
                        />
                    ))
                }
                 <Button buttonText={'Generar boleto'} onClick={handleClick}/>
               
            </form>
        </>
    )
}