import React, { useState } from 'react';
import InputSelect from '../../components/InputSelect';
import Button from '../../components/Button';
import { getRecommendations } from './simulatorUtils';

export default function SimulatorForm({ onResult }) {
    const [form, setForm] = useState({
        event: '',
        skinTone: '',
        undertone: '',
        eyeColor: '',
        hairColor: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = getRecommendations(form);
        onResult(result);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <InputSelect label="Event" name="event" onChange={handleChange} options={["Party", "Interview", "Wedding", "Daily"]} />
            <InputSelect label="Skin Tone" name="skinTone" onChange={handleChange} options={["Light", "Medium", "Dark"]} />
            <InputSelect label="Undertone" name="undertone" onChange={handleChange} options={["Warm", "Cool", "Neutral"]} />
            <InputSelect label="Eye Color" name="eyeColor" onChange={handleChange} options={["Brown", "Green", "Blue", "Black"]} />
            <InputSelect label="Hair Color" name="hairColor" onChange={handleChange} options={["Brunette", "Blonde", "Redhead", "Black"]} />
            <Button text="Simulate Makeup" />
        </form>
    );
}
