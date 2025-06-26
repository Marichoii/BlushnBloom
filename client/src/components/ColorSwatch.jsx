import React from 'react';

export default function ColorSwatch({ colorName }) {
    const bg = {
        Gold: 'bg-yellow-400',
        Peach: 'bg-orange-300',
        Pink: 'bg-pink-300',
        Wine: 'bg-rose-800',
        Nude: 'bg-neutral-300',
        Brown: 'bg-yellow-900',
        Coral: 'bg-red-300',
    }[colorName] || 'bg-gray-300';

    return (
        <div className={`w-6 h-6 rounded-full ${bg} shadow`} title={colorName}></div>
    );
}