import {useState} from "react";
import {invoke} from "@tauri-apps/api/core";
import "./App.css";
import React, {PureComponent} from 'react';
import {Home} from "./views/home/Home.tsx";
import {Menu} from "./compont/menu/Menu.tsx";

function App() {
    const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
        setGreetMsg(await invoke("greet", {name}));
    }

    return (
        <main className="container">
            <Menu/>
            <div className="box">
                <Home/>
            </div>
        </main>
    );
}

export default App;
