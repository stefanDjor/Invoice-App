import React from "react";
import DataList from "./DataList";
import Header from "./Header";


export default function Main() {

    return (
    <main className="light-version">

        <Header />

        <section>
            <DataList />
                
        </section>

    </main>
    );
}