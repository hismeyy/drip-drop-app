import "./Hello.css";
import { useState, useEffect } from "react";

export function Hello() {
    const [greeting, setGreeting] = useState("早上好");

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGreeting("早上好");
        } else if (currentHour < 18) {
            setGreeting("下午好");
        } else {
            setGreeting("晚上好");
        }
    }, []);

    return (
        <div className="hello">
            {greeting}！MaxCosmos
        </div>
    );
}
