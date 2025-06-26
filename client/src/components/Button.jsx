import React from 'react';

export default function Button({ text, onClick, type = "submit" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700 active:scale-95 transition-transform shadow-md"
        >
            {text}
        </button>
    );
}