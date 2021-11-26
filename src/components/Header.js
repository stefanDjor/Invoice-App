import React, { useState } from "react";
import New from "./New";


export default function Header(props) {

    const [ShowNewInvoice, setShowNewInvoice] = useState(false);

    function closeNew() {
        setShowNewInvoice(false)
    }

    const [Show,setShow] = useState(false)
    const [Arrow,setArrow] = useState(true)

    function showModal() {
        setShow(true);
        setArrow(false)
        if (Show) {
            setArrow(true)
            setShow(false)
            }
        }

    return (
    
        <header>

            <div className="headline">
                <div className="headline-left">
                    <h1 className="invoices">Invoices</h1>
                    <p>There are <spam className="number-of-invoices">7</spam> invoices</p>
                </div>
            </div>

            <div className="headline-right">

                <div className="filter-dropdown">
                    
                    <button onClick={showModal} className="no-color-btn">Filter<span className="inv-filter">by status</span>
                        {
                        Arrow ?
                        <img className="arrow down" src={require('../assets/icon-arrow-down.svg').default} alt="arrow-down"/> 
                        : <img className="arrow down up" src={require('../assets/icon-arrow-down.svg').default} alt="arrow-down"/>
                        }
                    </button>

                    {/* <Filter /> */}

                    {
                            Show?
                        
                        <div className="filter">
                        
                            <label className="container">
                                <input type="checkbox"></input>
                                <span className="checkmark"></span> Draft
                            </label>
                            <label className="container">
                                <input type="checkbox"></input>
                                <span className="checkmark"></span> Pending
                            </label>
                            <label className="container">
                                <input type="checkbox"></input>
                                <span className="checkmark"></span> Paid
                            </label>
                            
                        </div>

                        :null
                    }

                </div>

                <button className="violet-btn"
                    onClick={()=>setShowNewInvoice(true)}>
                    <img className="btn-plus" src={require('../assets/icon-plus.svg').default} alt="plus"/> New<span className="inv-new">Invoice</span>
                </button>

            </div>

            {
               ShowNewInvoice?
                <New closeNew={closeNew}/>:null
            }
            
        </header>
        );
}