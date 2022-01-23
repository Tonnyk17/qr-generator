import React from "react";
import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import ticketImage from '../assets/ticket.jpeg';

export const Ticket = () => {
    const styles = StyleSheet.create({
        page: {
          flexDirection: 'row',
          backgroundColor: '#E4E4E4',
        },
        imageContainer: {
          width:'40%',
          margin: 10,
          padding: 10,
          flexGrow: 1
        },
        image:{
            width: '100%',
        },
        ticketContainer:{
            flexDirection:'column',
            width: '60%',
            margin: 10,
            padding: 10,
            flexGrow: 2
        },
        qrImage:{
            width:'100px'
        }
      });
    return(
        <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.imageContainer}>
                <Image src={ticketImage} style={styles.image}/>
             </View>
            <View style={styles.ticketContainer}>
                <Text>Nombre: </Text>
                <Text>Correo: </Text>
                <Text>Telefono: </Text>
            </View>
        </Page>
      </Document>
    )
}