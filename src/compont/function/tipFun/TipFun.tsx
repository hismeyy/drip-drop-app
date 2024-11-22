import "./TipFun.css";
import { useState, useEffect } from "react";

export function TipFun() {
    // 初始倒计时时间（单位：秒）
    const initialTime = 1 * 60 * 60 + 21 * 60 + 56; // 1小时21分钟56秒 转换为秒数
    const [timeLeft, setTimeLeft] = useState(initialTime); // 剩余的时间（秒）

    useEffect(() => {
        // 设置定时器，每秒更新一次
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(intervalId); // 时间结束时清除定时器
                    return 0;
                }
                return prevTime - 1; // 每秒减少1秒
            });
        }, 1000); // 每秒更新一次

        // 清理定时器
        return () => clearInterval(intervalId);
    }, []);

    // 格式化剩余时间为 HH:MM:SS
    const formatTime = (seconds) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
        const sec = String(seconds % 60).padStart(2, "0");
        return `${hours}:${minutes}:${sec}`;
    };

    return (
        <div className="function1">
            <div className="time-title">距离下次喝水时间还剩：</div>
            <div className="time">{formatTime(timeLeft)}</div>
            <div className="tip">保持饮水习惯，让你一整天都充满活力！</div>
        </div>
    );
}
