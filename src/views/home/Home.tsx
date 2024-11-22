import "./Home.css"

import "../../compont/function/hello/Hello.tsx"

import {TipFun} from "../../compont/function/tipFun/TipFun.tsx";
import {CheckInFun} from "../../compont/function/checkInFun/CheckInFun.tsx";
import {CharFun} from "../../compont/function/charFunction/CharFun.tsx";
import {Hello} from "../../compont/function/hello/Hello.tsx";

export function Home() {

    return (
        <div className="module">
            <Hello/>
            <div className="function">
                <div className="left-function">
                    <TipFun/>
                    <CharFun/>
                </div>
                <CheckInFun/>
            </div>
        </div>
    )
}