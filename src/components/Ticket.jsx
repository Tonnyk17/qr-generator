import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";

export const Ticket = () => {
    return(
        <Document>
            <Page size='A4'>
                <View>
                    <Text>
                        Hella
                    </Text>
                </View>
            </Page>
        </Document>
    )
}