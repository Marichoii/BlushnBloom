import { useState } from 'react';
import './App.css';


const suggestionsAPI = 'http://localhost:3000/api/suggestion';

function App() {
    const [formData, setFormData] = useState({
        skinTone: 'Light',
        eyeColor: 'Brown',
        hairColor: 'Blonde',
        occasion: 'Party',
    });

    const [suggestion, setSuggestion] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(suggestionsAPI, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            setSuggestion(data);
        } catch (err) {
            setSuggestion({ text: 'Error fetching suggestion.', img: '', link: '#' });
        }
    };

    return (
        <div className="container py-5">
            <h1 className="text-center text-pink-600 mb-4">Blush & Bloom</h1>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
                        {['skinTone', 'eyeColor', 'hairColor', 'occasion'].map((field) => (
                            <div className="mb-3" key={field}>
                                <label className="form-label text-capitalize" htmlFor={field}>{field.replace(/([A-Z])/g, ' $1')}</label>
                                <select
                                    className="form-select"
                                    name={field}
                                    id={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                >
                                    {field === 'skinTone' && ['Light', 'Medium', 'Dark'].map(opt => <option key={opt}>{opt}</option>)}
                                    {field === 'eyeColor' && ['Brown', 'Blue', 'Green'].map(opt => <option key={opt}>{opt}</option>)}
                                    {field === 'hairColor' && ['Blonde', 'Brown', 'Black'].map(opt => <option key={opt}>{opt}</option>)}
                                    {field === 'occasion' && ['Party', 'Work', 'Casual', 'Romantic', 'Photo Shoot'].map(opt => <option key={opt}>{opt}</option>)}
                                </select>
                            </div>
                        ))}
                        <button type="submit" className="btn btn-canmake">See Suggestions</button>
                    </form>
                </div>

                <div className="col-md-6">
                    <div className="bg-pink-50 p-4 rounded shadow">
                        <h3>Look Suggestion</h3>
                        <p>{suggestion?.text || 'Select your features to get a suggestion.'}</p>
                        {suggestion?.img && <img src={suggestion.img} alt="suggestion" className="img-fluid my-2 rounded" />}
                        {suggestion?.link && (
                            <a href={suggestion.link} target="_blank" className="btn btn-outline-secondary btn-sm">See Product</a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
