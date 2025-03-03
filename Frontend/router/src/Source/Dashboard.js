import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();

    const handleDegreeSelect = (degree) => {
        navigate(`/exams?degree=${degree}`);
    };

    return (
        <div className="degree-container">
            <h2 className='degree-title'>Select Your Degree</h2>
            <div className="degree-buttons">
                <button className="degree-box" onClick={() => handleDegreeSelect('BE')}>BE</button>
                <button className="degree-box" onClick={() => handleDegreeSelect('BSc')}>BSc</button>
                <button className="degree-box" onClick={() => handleDegreeSelect('BCom')}>BCom</button>
                <button className="degree-box" onClick={() => handleDegreeSelect('BA')}>BA</button>
                <button className="degree-box" onClick={() => handleDegreeSelect('BBA')}>BBA</button>
                <button className="degree-box" onClick={() => handleDegreeSelect('BCA')}>BCA</button>
            </div>
        </div>
    );
}
