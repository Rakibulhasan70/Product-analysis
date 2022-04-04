import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import { LineChart } from 'recharts';
import './MyLineChart.css'

const MyLineChart = () => {
    const data1 = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    const data2 = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 200,
            "revenue": 10201
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 400,
            "revenue": 201500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 700,
            "revenue": 263010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 500,
            "revenue": 40605
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 600,
            "revenue": 552900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 361050
        }
    ]
    return (
        <div className='recharts'>
            <div>
                <LineChart width={250} height={200} data={data1}>
                    <Line dataKey={'sell'}></Line>
                    <XAxis dataKey='month'></XAxis>
                    <YAxis dataKey='sell'></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
                <p>Line Chart</p>
            </div>
            <div>
                <BarChart width={250} height={200} data={data1}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey='month' fill="#8884d8"></Bar>
                    <Bar dataKey='investment' fill="#82ca9d"></Bar>
                    <XAxis dataKey='month' ></XAxis>
                    <YAxis data='investment'></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
                <p>Bar Chart</p>
            </div>
            <div>
                <AreaChart width={300} height={200} data={data1}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Area dataKey='investment'></Area>
                    <Area dataKey='revenue' stroke="#82ca9d"></Area>
                    <XAxis dataKey='month' ></XAxis>
                    <YAxis data='investment'></YAxis>
                    <Tooltip></Tooltip>
                </AreaChart>
                <p>Area Chart</p>
            </div>
            <div>
                <PieChart width={300} height={200}>
                    <Pie data={data1} dataKey="sell" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data2} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
                <p>Pie Chart</p>
            </div>
        </div>
    );
};

export default MyLineChart;
