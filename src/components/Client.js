import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { getInvoices } from "./DataServis";
import convertDate from "./DayMonthYear";
import Edit from "./Edit";
import Delete from "./Delete";


    const DataList = () => {

        let location = useLocation();
            console.log(location.state);
        const invoice = location.state;

        // const findInvoice = Data.invoices.filter(invoice => invoice.id === invoiceSend.id)
        const [EditInvoice, setEditInvoice] = useState(false);
        const [DeleteInvoice, setDeleteInvoice] = useState(false);

        const navigate = useNavigate();
        function goBack(invoice) {
            navigate(`/`)
        }

        function closeEdit() {
            setEditInvoice(false)
        }

        function closeDelete() {
            setDeleteInvoice(false)
        }

    return (

        <div className="main light-version">
        <div className="column light-version">

                {/* {Data.invoices.map((invoice) => ( */}
        {/* {getInvoices().invoice( */}
            <div key={invoice.id} className="invoice-page"> 
            <div className="client-header">
                <div className="back-btn">
                    <button className="go-back" onClick={()=>{goBack(invoice)}}>
                        <img className="arrow-left" src={require('../assets/icon-arrow-left.svg').default} alt="arrow-left"/>Go back
                    </button>
                </div>
                <div className="btn-up-bar">    
                    <div className="up-bar-left">
                        <p>Status</p>
                        <div className={`invoice-status-2 ${invoice.status}`}>
                            <div className={`circle ${invoice.status}`}></div>
                            <p className={`letter ${invoice.status}`}>{invoice.status}</p>
                        </div>

                    </div>
                    <div className="up-bar-right">

                        <button className="no-color-btn-4" 
                        onClick={()=>setEditInvoice(true)}
                        >Edit</button>

                        <button className="delete-btn" 
                        onClick={()=>setDeleteInvoice(true)}
                        >Delete</button>

                        {
                            EditInvoice?
                            <Edit closeEdit={closeEdit}/>:null
                        }

                        {
                            DeleteInvoice?
                            <Delete closeDelete={closeDelete}/>:null
                        }

                        <button className="violet-btn-3">Mark as Paid</button>
                    </div>
                </div>
            </div>
            <div className="client-section">
                <div className="invoice-data">
                    <div className="inv-data-left">
                        <h4 className="invoice-id"><span>#</span>{invoice.id}</h4>
                        <p className="invoice-description">{invoice.description}</p>
                    </div>

                    <div className="inv-data-right">
                        <p className="invoice-street">{invoice.senderAddress.street}</p>
                        <p className="invoice-city">{invoice.senderAddress.city}</p>
                        <p className="invoice-post">{invoice.senderAddress.postCode}</p>
                        <p className="invoice-country">{invoice.senderAddress.country}</p>
                    </div>
                </div>
                <div className="sending-data">
                    <div className="date-payment-due">
                        <div>
                            <p>Invoice Data</p>
                            <h4 className="invoice-created">{convertDate(invoice.createdAt)}</h4>
                        </div>
                        <div>
                            <p>Payment Due</p>
                            <h4 className="invoice-payment">{convertDate(invoice.paymentDue)}</h4>
                        </div>
                    </div>
                    <div className="bill-to">
                        <p>Bill To</p>
                        <h4 className="invoice-client-name">{invoice.clientName}</h4>
                        <p className="invoice-client-street">{invoice.clientAddress.street}</p>
                        <p className="invoice-client-city">{invoice.clientAddress.city}</p>
                        <p className="invoice-client-post">{invoice.clientAddress.postCode}</p>
                        <p className="invoice-client-country">{invoice.clientAddress.country}</p>
                    </div>
                    <div className="sent-to">
                        <p>Sent to</p>
                        <h4 className="invoice-email">{invoice.clientEmail}</h4>
                    </div>
                </div>
                <div className="sent-to-mobile">
                        <p>Sent to</p>
                        <h4 className="invoice-email">{invoice.clientEmail}</h4>
                    </div>

                <div className="flex-part">

                    <div className="item-list-headlines">
                            
                        <div className="item-name">
                            <p>Item Name</p>
                        </div>

                        <div className="quantity">
                            <p>QTY.</p>
                        </div>

                        <div className="price">
                            <p>Price</p>
                        </div>

                        <div className="total">
                            <p>Total</p>
                        </div>
                    </div>

                {invoice.items.map((item, index) => (
                    <div key={index} className="payment-data"> 
                        <div className="item-list-names">
                            <div className="item-name">
                                {/* <p>Item Name</p> */}
                                <div className="no-border">
                                <p className="bold-text item-name">{item.name}</p>
                                </div>
                            </div>

                            <div className="quantity">
                                {/* <p>QTY.</p> */}
                                <div className="no-border">
                                    <p className="bold item-quantity">{item.quantity}</p>
                                </div>
                            </div>
                            <div className="invisible-x">x</div>
                            <div className="price">
                                {/* <p>Price</p> */}
                                <div className="no-border">
                                    <p className="bold item-price">£ {item.price}</p>
                                </div>
                            </div>

                            <div className="total">
                                {/* <p>Total</p> */}
                                <div className="no-border">
                                    <p className="bold-text item-total">£ {item.total}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                </div>



                <div className="dark-part">
                    <p>Amount Due</p>
                    <h2 className="color-white invoice-total">£ {invoice.total}</h2>
                </div>
                
            </div>
        </div>
        {/* //  )}  */}
         
        </div>
        </div>
        );
    }

    export default DataList