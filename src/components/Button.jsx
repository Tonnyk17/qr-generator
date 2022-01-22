import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import '../styles/Button.css';
import { Ticket } from "./Ticket";

export const Button = ({buttonText,onClick}) => {
    return (
        <>
            <PDFDownloadLink 
                document={<Ticket/>}
                fileName="Ticket.pdf"
                className="button-container">
                <div className="button" onClick={onClick}>
                    {buttonText}
                </div>
            </PDFDownloadLink>
        </>
    )
}