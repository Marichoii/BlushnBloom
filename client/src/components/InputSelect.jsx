import React from 'react';

export default function InputSelect({ label, name, options, onChange }) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-base font-medium text-gray-800 mb-1">{label}</label>
            <select
                id={name}
                name={name}
                onChange={onChange}
                className="w-full border border-gray-300 bg-white text-gray-800 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            >

            >
                <option value="">Select</option>
                {options.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                ))}
            </select>
        </div>
    );
}
