import React, { useState, useEffect } from "react"; 
import { useLocation } from "react-router-dom"; 
import convertDate from "./DayMonthYear"; 
import { saveInvoice } from "./DataServis";


export default function Edit(props) { 

let invoice = useLocation().state; 

 
const [terms, setTerms] = useState(false) 
const [arrow,setArrow] = useState(true) 

function openTerms() { 

    setTerms(true); 
    setArrow(false) 
    if (terms) { 
        setArrow(true) 
        setTerms(false) 
        } 
    } 

const [senderAddress, setSenderAddress] = useState("") 
const [senderCity, setSenderCity] = useState("") 
const [senderPostCode, setSenderPostCode] = useState("") 
const [senderCountry, setSenderCountry] = useState("") 

const [clientName, setClientName] = useState("") 
const [clientEmail, setClientEmail] = useState("") 
const [clientAddress, setClientAddress] = useState("") 
const [clientCity, setClientCity] = useState("") 
const [clientPostCode, setClientPostCode] = useState("") 
const [clientCountry, setclientCountry] = useState("") 

// const [invoiceDate, setInvoiceDate] = useState("") 
// const [paymentTerms, setPaymentTerms] = useState("") 

const [projectDescription, setProjectDescription] = useState("") 

const [itemName, setItemName] = useState("") 
const [itemQuantity, setItemQuantity] = useState("") 
const [itemPrice, setItemPrice] = useState("") 
const [itemTotal, setItemTotal] = useState(itemQuantity * itemPrice) 

    useEffect(() => { 

    console.log(senderAddress, senderCity, senderPostCode, senderCountry, clientName, clientEmail, clientAddress,  
        clientCity, clientPostCode, clientCountry, projectDescription, itemName, itemQuantity, itemPrice); 
    }, [senderAddress, senderCity, senderPostCode, senderCountry, clientName, clientEmail, clientAddress,  
        clientCity, clientPostCode, clientCountry, projectDescription, itemName, itemQuantity, itemPrice]) 

    function saveChanges() { 
        console.log("Dobro je... radi!") 
        saveInvoice({
            id : invoice.id,
            createdAt : invoice.createdAt,
            // paymentDue :
            description : projectDescription,
            // paymentTerms :
            clientName : clientName,
            clientEmail : clientEmail,
            status : invoice.status,
            senderAddress : {
                street : senderAddress,
                city : senderCity,
                postCode : senderPostCode,
                country : senderCountry,
            },
            clientAddress : {
                street : clientAddress,
                city : clientCity,
                postCode : clientPostCode,
                country : clientCountry,
            },
            total : invoice.total,
            item : {
                name : itemName,
                quantity : itemQuantity,
                price : itemPrice,
                total : itemTotal,
            }
        })
    } 


    // const [EditClosed, setEditClosed] = useState(false);

    // function closeEditModal() {
    //     setEditClosed(false)
    // }


    return ( 

        <div className="edit light-version"> 

        <div className="left-side"> 

            <div className="headline-left"> 
                <h2 className="number-of-invoice">Edit <span> #</span>{invoice.id}</h2> 
            </div> 

            <div className="bill-form"> 
                <p className="violet-text">Bill From</p> 
                <p>Street Address</p> 
                <div className="light-border"> 
                    <input className="bold-text" type="text" defaultValue={(invoice) ? invoice.senderAddress.street : senderAddress} onChange={(e) => setSenderAddress(e.target.value)}/> 
                </div> 

                <div className="adress"> 
 
                    <div className="city"> 
                        <p>City</p> 
                        <div className="light-border"> 
                            <input className="bold-text" type="text" defaultValue={(invoice) ? invoice.senderAddress.city : senderCity} onChange={(e) => setSenderCity(e.target.value)}/> 
                        </div> 
                    </div> 

                    <div className="postcode"> 
                        <p>Post Code</p> 
                        <div className="light-border"> 
                            <input className="bold-text" type="text" defaultValue={(invoice) ? invoice.senderAddress.postCode : senderPostCode} onChange={(e) => setSenderPostCode(e.target.value)}/> 
                        </div> 
                    </div> 

                    <div className="country"> 
                        <p>Country</p> 
                        <div className="light-border"> 
                            <input className="bold-text" type="text" defaultValue={(invoice) ? invoice.senderAddress.country : senderCountry} onChange={(e) => setSenderCountry(e.target.value)}/> 
                        </div> 
                    </div> 

                </div> 

                <p className="violet-text">Bill To</p> 
                <p>Client's Name</p> 

                <div className="light-border"> 
                    <input className="bold-text" type="text" defaultValue={(invoice) ? invoice.clientName : clientName} onChange={(e) => setClientName(e.target.value)}/> 
                </div>  

                <p>Client's Email</p> 
                <div className="light-border"> 
                    <input className="bold-text" type="email" defaultValue={(invoice) ? invoice.clientEmail : clientEmail} onChange={(e) => setClientEmail(e.target.value)}/> 
                </div> 

                <p>Street Adress</p> 
                <div className="light-border"> 
                    <input className="bold-text" type="text" defaultValue={(invoice) ? invoice.clientAddress.street : clientAddress} onChange={(e) => setClientAddress(e.target.value)}/> 
                </div> 

                <div className="adress"> 
 
                    <div className="city"> 
                        <p>City</p> 
                        <div className="light-border"> 
                            <input className="bold-text" type="text" defaultValue={(invoice) ? invoice.clientAddress.city : clientCity} onChange={(e) => setClientCity(e.target.value)}/> 
                        </div> 
                    </div> 

                    <div className="postcode"> 
                        <p>Post Code</p> 
                        <div className="light-border"> 
                            <input className="bold-text" type="text" defaultValue={(invoice) ? invoice.clientAddress.postCode : clientPostCode} onChange={(e) => setClientPostCode(e.target.value)}/> 
                        </div> 
                    </div> 

                    <div className="country"> 
                        <p>Country</p> 
                        <div className="light-border"> 
                            <input className="bold-text" type="text" defaultValue={(invoice) ? invoice.clientAddress.country : clientCountry} onChange={(e) => setclientCountry(e.target.value)}/> 
                        </div> 
                    </div> 

                </div> 

                <div className="invoice-date"> 
                    <div className="date"> 
                        <p>Invoice Date</p> 
                        <div className="light-border calendar"> 
                            <input className="bold-text" type="date" placeholder={convertDate(invoice.createdAt)}/> 
                            <img className="calendar" src={require('../assets/icon-calendar.svg').default} alt="calendar"/> 
                        </div> 
                    </div> 

                    <div className="date"> 
                        <p>Payment Terms</p> 
                        <div onClick={openTerms} className="light-border pay-terms"> 
                            <p className="bold-text">Net {invoice.paymentTerms} Days</p> 

                            {arrow ? 

                            <img className="arrow down" src={require('../assets/icon-arrow-down.svg').default} alt="arrow-down"/> 
                            : <img className="arrow down up" src={require('../assets/icon-arrow-down.svg').default} alt="arrow-down"/> 

                            }

                        </div> 

                            {  

                                terms ? 

                            <div className="filter-2"> 
                                <label className="container-1"> 
                                    <p className="bold-text">Net 1 Day</p> 
                                </label> 

                                <label className="container-1"> 
                                    <p className="bold-text">Net 7 Days</p> 
                                </label> 

                                <label className="container-1"> 
                                    <p className="bold-text">Net 14 Days</p> 
                                </label> 

                                <label className="container-1"> 
                                    <p className="bold-text">Net 30 Days</p> 
                                </label>                          
                            </div> 
 
                                :null 

                            } 
                    </div> 
                </div> 

                <p>Project Description</p> 
                <div className="light-border"> 
                    <input className="bold-text" type="text" defaultValue={(invoice) ? invoice.description : projectDescription} onChange={(e) => setProjectDescription(e.target.value)}/> 
                </div> 

                <h3 className="gray">Item List</h3> 

                <div className="item-list-names"> 

                    <div className="item-name"> 
                        <p>Item Name</p> 
                    </div> 

                    <div className="quantity"> 
                        <p>Qty.</p> 
                    </div> 

                    <div className="price"> 
                        <p>Price</p> 
                    </div> 

                    <div className="total">
                        <p>Total</p> 
                    </div> 

                    {/* phantom div */} 
                    <div style={{width:'13px', height:'16px',backgroundColor:'transparent'}}></div> 

                </div> 

                {invoice.items.map((item, index) => { 
                    return ( 
                        <div className="item-list-names"> 
                             
                            <div className="item-name"> 
                                <div className="light-border"> 
                                    <input className="bold-text" type="text" defaultValue={(invoice) ? item.name : itemName} onChange={(e) => setItemName(e.target.value)}/> 
                                </div> 
                            </div> 

                            <div className="quantity"> 

                                <div className="light-border"> 
                                    <input className="bold-text" type="number" defaultValue={(invoice) ? item.quantity : itemQuantity} onChange={(e) => setItemQuantity(e.target.value)}/> 
                                </div> 
                            </div> 

                            <div className="price"> 

                                <div className="light-border"> 
                                    <input className="bold-text" type="number" defaultValue={(invoice) ? item.price.toFixed(2) : itemPrice} onChange={(e) => setItemPrice(e.target.value)}/> 
                                </div> 
                            </div> 

                            <div className="total"> 
                                <div className="no-border"> 
                                    <input className="bold-text" type="text" defaultValue={(item.quantity * item.price).toFixed(2)}/> 
                                </div> 
                            </div> 

                            <img className="trash" src={require('../assets/icon-delete.svg').default} alt="delete"/> 
 
                        </div>   
                    ) 
                })} 

                <button className="no-color-btn-2">+ Add New Item</button> 

            </div> 

            <div className="buttons-down-2"> 

                <div className="buttons-right"> 
                    <button  
                        onClick={props.closeEdit} className="no-color-btn-3">Cancel 
                    </button> 

                    <button className="violet-btn-2" onClick={(e)=>{ 
                            e.preventDefault() 
                            saveChanges(invoice) 
                        }}>Save Changes
                    </button> 

                        {/* {
                            EditClosed?
                            <Edit closeEditModal={closeEditModal}/>:null
                        } */}

                </div>     
            </div> 

        </div> 

    </div> 
); 
} 

 