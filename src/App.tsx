import {useState} from "react";
import {invoke} from "@tauri-apps/api/core";
import "./App.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faCog} from '@fortawesome/free-solid-svg-icons'
import React, {PureComponent} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';


function App() {
    const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");


    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
        setGreetMsg(await invoke("greet", {name}));
    }

    const data = [
        {
            name: '星期一',
            waterCount: 5,  // 喝水次数
        },
        {
            name: '星期二',
            waterCount: 3,
        },
        {
            name: '星期三',
            waterCount: 6,
        },
        {
            name: '星期四',
            waterCount: 7,
        },
        {
            name: '星期五',
            waterCount: 5,
        },
        {
            name: '星期六',
            waterCount: 5,
        },
        {
            name: '星期日',
            waterCount: 4,
        },
    ];

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
            <div className="box">

                <div className="module">
                    <div className="hello">
                        早上好！MaxCosmos
                    </div>
                    <div className="function">
                        <div className="left-function">
                            <div className="function1">
                                <div className="time-title">距离下次喝水时间还剩：</div>
                                <div className="time">01:59:35</div>
                                <div className="tip">保持饮水习惯，让你一整天都充满活力！</div>
                            </div>
                            <div className="function2">
                                <div className="function2-char">
                                    <ResponsiveContainer width="100%" height="100%"
                                                         style={{backgroundColor: '#FDBE6C'}}>
                                        <BarChart
                                            width={500}
                                            height={300}
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                            barSize={20}
                                        >
                                            <XAxis dataKey="name" scale="point" padding={{left: 10, right: 10}}
                                                   stroke="#FFFFFF"/>
                                            <YAxis stroke="#FFFFFF"/>
                                            <Tooltip contentStyle={{color: '#FFFFFF'}}/>
                                            <Legend
                                                formatter={(value) => `喝水次数`}
                                                wrapperStyle={{color: '#FFFFFF'}}
                                            />
                                            <CartesianGrid strokeDasharray="5 5" stroke="#FFFFFF"/>
                                            <Bar dataKey="waterCount" fill="#7e6bc4" background={{fill: '#FDBE6C'}}/>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                        <div className="function3">
                            <div>
                                <div className="count">2/8</div>
                            </div>
                            <div>
                                <div className="water"></div>
                            </div>
                            <div>
                                <div className="button">
                                    喝水打卡
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
