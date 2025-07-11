import React, { useState } from 'react';
import InputSelect from '../../components/InputSelect';
import Button from '../../components/Button';
import { getRecommendations } from './simulatorUtils';
import { saveSimulation } from '../../services/recommendationService';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = getRecommendations(form);
    onResult(result);

    try {
      await saveSimulation(form, result);
      console.log('✅ Simulation saved to backend');
    } catch (err) {
      console.error('❌ Failed to save simulation');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 border border-blush-accent w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-2">
        <InputSelect label="Event" name="event" onChange={handleChange} options={["Party", "Interview", "Wedding", "Daily"]} />
        <InputSelect label="Skin Tone" name="skinTone" onChange={handleChange} options={["Light", "Medium", "Dark"]} />
        <InputSelect label="Undertone" name="undertone" onChange={handleChange} options={["Warm", "Cool", "Neutral"]} />
        <InputSelect label="Eye Color" name="eyeColor" onChange={handleChange} options={["Brown", "Green", "Blue", "Black"]} />
        <InputSelect label="Hair Color" name="hairColor" onChange={handleChange} options={["Brunette", "Blonde", "Redhead", "Black"]} />
        <div className="flex justify-center pt-1">
          <Button text="Simulate Makeup" />
        </div>
      </form>
    </div>
  );
}
