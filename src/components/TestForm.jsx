import { useState } from 'react';
import { STATUS, STATUS_OPTIONS } from '../constants/status';

export function  TestForm({ onSubmit, existingTest, onCancel}) {
    const [name,setName] = useState(existingTest?.name ?? '');
    const [status, setStatus] = useState(existingTest?.status ?? STATUS.WAITING);

    function handleSubmit(e) {
        e.preventDefault()
        if (!name.trim())
            return;
    onSubmit({name, status})
    setName('');
    setStatus(STATUS.WAITING);
    }

    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label htmlFor = "nameInput"> Name:</label>
                <input 
                id = "nameInput"
                type= "text"
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                />

                <select id= "statusInput" 
                value = {status}
                onChange={(e) => setStatus(e.target.value)}>
                    {STATUS_OPTIONS.map(s => (
                        <option key = {s} value={s}>{s}</option>
                    ))}
                    </select>
            </div>
            <button type="submit">{existingTest ? 'Update' : 'Add'}</button>
            {existingTest && <button type="button" onClick ={onCancel}>Cancel</button>}
        </form>
    )
}