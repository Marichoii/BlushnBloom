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
        return <div className="text-red-500 text-center mt-4">{error}</div>;
    }

    if (!Array.isArray(history)) {
        return <div className="text-yellow-500 text-center mt-4">Warning: Data is not an array.</div>;
    }

    return (
        <div className="mt-12 w-full max-w-lg mx-auto">
            {history.length === 0 ? (
                <p className="text-center text-gray-600 dark:text-gray-300 text-base">No simulations yet.</p>
            ) : (
                <ul className="space-y-4">
                    {history.map((sim, idx) => (
                        <li
                            key={idx}
                            className="p-5 bg-white rounded-2xl shadow-md border border-blush-accent transition hover:shadow-lg"
                        >
                            <div className="text-base text-gray-800 space-y-1 text-center">
                                <p><strong>Event:</strong> {sim?.form?.event || "?"}</p>
                                <p><strong>Skin:</strong> {sim?.form?.skinTone || "?"}</p>
                                <p><strong>Result:</strong> {sim?.result?.base || "?"}, {sim?.result?.style || "?"}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
