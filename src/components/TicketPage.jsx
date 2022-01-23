import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { Button } from "./Button";
import '../styles/TicketPage.css';
import { Ticket } from "./Ticket";

export const TicketPage = ({userData,qrData}) => {
    return(
        <>
            <div className="main-ticket-container">
                <div className="ticket-modal-container">
                    <img src={qrData} alt="" />
                    <h3 className="ticket-message">
                        Su boleto se ha generado exitosamente :D
                    </h3>
                    <PDFDownloadLink
                        document={<Ticket userData={userData} qrData={qrData}/>}
                        fileName="Ticket.pdf"
                        className="download-button-container"
                    >
                    <Button buttonText={'Descargar boleto'}/>
                    </PDFDownloadLink>
                </div>
            </div>
        </>
    )
}