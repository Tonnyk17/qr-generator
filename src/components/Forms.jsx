import React, { useEffect, useState } from "react";
import {Input} from './Input';
import '../styles/Forms.css';
import { Button } from "./Button";
import { content, createTicket } from "../functions";
import { Icon } from './Icon';
import { TicketPage } from "./TicketPage";
import { v4 as uuidv4 } from 'uuid';

export const Forms = () => {
    const [userData, setUserData] = useState({
        name:'',
        email:'',
        phone:'',
        referal:''
    });
    const [ticketData, setTicketData] = useState();
    const [isCreated, setIsCreated] = useState(false);
    const [qrData, setQrData] = useState();
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        setTicketData(userData);
    }, [userData])

    const handleClick = async() => {
        const uuid = uuidv4()
        const qr = await createTicket(uuid)
        setQrData(qr);
        setIsCreated(true)
        
    }

    return(
        <>
            {
                isCreated && qrData ? 
                <TicketPage userData={userData} qrData={qrData}/>
                :
                <form className="form-component">
                <Icon/>
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
                
                <Button 
                    buttonText={'Generar boleto'} 
                    onClick={handleClick}
                />
               
            </form>
            }
        </>
    )
}