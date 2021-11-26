import React, { useState } from "react";
import { useLocation } from "react-router-dom";


export default function Delete(props) {

    let location = useLocation();
    const invoice = location.state;

    return (

        <div className="delete-confirmation light-version">
            <div className="delete-modal">
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete invoice <span>#</span>{invoice.id}? This action cannot be undone.</p>
                <div className="btn-right">
                    <button className="no-color-btn-4"
                    onClick={props.closeDelete}
                    >Cancel</button>

                    <button className="delete-btn">Delete</button>
                </div>

            </div>
        </div>
);
}