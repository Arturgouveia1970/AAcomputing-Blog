import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

export default function Dashboard() {
    const location = useLocation();
    const [tab, setTab] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
          setTab(tabFromUrl);
        }
      }, [location.search]);
    return (
        <div>
        <h1 className="text-3xl text-red-500">Dashboard</h1>
        </div>
    )
}