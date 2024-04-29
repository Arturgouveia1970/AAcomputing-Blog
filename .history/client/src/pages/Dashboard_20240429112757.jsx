import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

export default function Dashboard() {
    const location = useLocation();
    const [tab, setTab] = useState('');

    useEffect(())
    return (
        <div>
        <h1 className="text-3xl text-red-500">Dashboard</h1>
        </div>
    )
}