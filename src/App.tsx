import {useState} from "react";
import {invoke} from "@tauri-apps/api/core";
import "./App.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faCog} from '@fortawesome/free-solid-svg-icons'


function App() {
    const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");


    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
        setGreetMsg(await invoke("greet", {name}));
    }

    return (
        <main className="container">
            <div className="menu-box">
                <div className="logo">
                    <h1>drip-drop</h1>
                </div>
                <ul className="menu">
                    <li><FontAwesomeIcon icon={faHome}/>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主页</li>
                    <li><FontAwesomeIcon icon={faCog}/>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 设置</li>
                </ul>
            </div>
            <div className="box"></div>
        </main>
    );
}

export default App;
