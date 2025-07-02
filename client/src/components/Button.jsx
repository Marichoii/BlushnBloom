import React from 'react';

export default function Button({ text, onClick, type = "submit" }) {
    return (
        <button 
            type={type}
            onClick={onClick}
            className="bg-blush-accent hover:bg-blush-deep text-white px-5 py-2.5 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg"
        >
            {text}
        </button>
    );
}