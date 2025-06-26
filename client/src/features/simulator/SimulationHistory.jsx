import React, { useEffect, useState } from 'react';
import { getSimulations } from '../../services/recommendationService';

export default function SimulationHistory() {
    const [history, setHistory] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getSimulations();
                console.log("Simulations fetched:", data);
                setHistory(data);
            } catch (err) {
                console.error("Error fetching simulations:", err);
                setError("Failed to load simulations.");
            }
        }
        fetchData();
    }, []);

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    if (!Array.isArray(history)) {
        return <div className="text-yellow-500">Warning: Data is not an array.</div>;
    }

    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-pink-700 dark:text-pink-300">Simulation History</h2>
            <ul className="space-y-3">
                {history.map((sim, idx) => (
                    <li key={idx} className="p-4 rounded bg-white dark:bg-gray-800 shadow">
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                            <strong>Event:</strong> {sim?.form?.event || "?"} |
                            <strong> Skin:</strong> {sim?.form?.skinTone || "?"} |
                            <strong> Result:</strong> {sim?.result?.base || "?"}, {sim?.result?.style || "?"}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
