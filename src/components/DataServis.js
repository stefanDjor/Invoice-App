import React from "react";
import Data from "../data.json";

// export default function DataServis() {

// EditInvoice()
let invoices = Data.invoices;

export const getInvoices = () => {
    console.log(Data)
    console.log("getInvoices:" + JSON.stringify(invoices))
    return invoices;
}

export const saveInvoice = (invoice) => {
    const existingInvoice = invoices.find(e => e.id === invoice.id)
    const index = invoices.indexOf(existingInvoice)
    invoices[index] = invoice
    console.log("saveInvoice:" + JSON.stringify(invoices))

    return invoices;
}

export const createInvoice = (invoice) => {
    invoices.push(invoice)
    console.log("createInvoice:" + JSON.stringify(invoices))

    return invoices;
}




// let newInvoice(invoice) {
//     this.invoices.push(invoice);
// }



                    // const makeCounter = (start = 0) => {
                    //     let current = start;
                    
                    //     const add = (value = 1) => current += value;
                    //     const remove = (value = 1) => add(value * -1);
                    //     const get = () => current;
                    
                    //     return { add, remove, get };
                    // };
                    
                    // const counter = makeCounter(10);
                    
                    // counter.add() // 11
                    // counter.add() // 12
                    // counter.add(8) // 20
                    // counter.remove(10) // 10




// }