import React from "react";
import { Document, Page, View, Image, StyleSheet } from "@react-pdf/renderer";
import ticketImage from '../assets/ticket.jpeg';

export const Ticket = ({userData, qrData}) => {
    const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
          backgroundColor: '#E4E4E4',
          fontSize: 12,
          justifyContent:'center',
          alignItems:'center'
        },
        imageContainer: {
          width:'300px',
          margin: 10,
          padding: 10,
        },
        image:{
            width: '100%',
        },
        ticketContainer:{
            flexDirection:'column',
            width: '100%',
            margin: 10,
            padding: 10,
            alignItems:'center',
            justifyContent:'center'
        },
        qrImage:{
            width:250,
        }
      });
    return(
        <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.imageContainer}>
                <Image src={ticketImage} style={styles.image}/>
             </View>
            <View style={styles.ticketContainer}>
                  <Image src={qrData} style={styles.qrImage}/>
            </View>
        </Page>
      </Document>
    )
}