import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { LineChart } from 'recharts';
import './MyLineChart.css'

const MyLineChart = () => {
    const data = [
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
    ]
    return (
        <div className='recharts'>
            <div>
                <LineChart width={250} height={200} data={data}>
                    <Line dataKey={'sell'}></Line>
                    <XAxis dataKey='month'></XAxis>
                    <YAxis dataKey='sell'></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div>
                <BarChart width={250} height={200} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey='month' fill="#8884d8"></Bar>
                    <Bar dataKey='investment' fill="#82ca9d"></Bar>
                    <XAxis dataKey='month' ></XAxis>
                    <YAxis data='investment'></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
            <div>
                <AreaChart width={300} height={200} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Area dataKey='investment'></Area>
                    <Area dataKey='revenue' stroke="#82ca9d"></Area>
                    <XAxis dataKey='month' ></XAxis>
                    <YAxis data='investment'></YAxis>
                </AreaChart>
            </div>
        </div>
    );
};

export default MyLineChart;
