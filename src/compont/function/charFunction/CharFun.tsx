import "./CharFun.css"
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

export function CharFun() {
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
    )
}