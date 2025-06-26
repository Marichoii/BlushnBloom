import React from 'react';

export default function InputSelect({ label, name, options, onChange }) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
            <select
                id={name}
                name={name}
                onChange={onChange}
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
                <option value="">Select</option>
                {options.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                ))}
            </select>
        </div>
    );
}
