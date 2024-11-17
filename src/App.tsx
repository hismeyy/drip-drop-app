import {useState} from "react";
import {invoke} from "@tauri-apps/api/core";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPaper } from '@fortawesome/free-solid-svg-icons'


function App() {
    const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");


    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
        setGreetMsg(await invoke("greet", {name}));
    }

    return (
        <main className="container">
            <div id="main">
                <div className="block">
                    <div id="tip" className="box">
                        <span className="title">早上好! <FontAwesomeIcon icon={faHandPaper} /> MaxCosmos</span>

                        <div className="line"></div>
                        <div className="txt">斜阳外，寒鸦万点，流水绕孤村。</div>
                    </div>
                </div>
                <div className="block">
                    <div id="remind" className="box"></div>
                </div>
                <div className="block">
                    <div id="count" className="box"></div>
                </div>
                <div className="block">
                    <div id="statistics" className="box"></div>
                </div>
            </div>
        </main>
    );
}

export default App;
