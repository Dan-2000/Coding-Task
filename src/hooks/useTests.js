import {useState, useEffect} from 'react';

//I'm not making a database for this as per specs - this will store data under this key
const STORAGE_KEY = 'tests';

export function useTests() {
    const [tests, setTests] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        //if not saved, create a new array and save 'tests' to local storage for future
        return saved ? JSON.parse(saved): [];
    });
    //set key if none present
    useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tests));
    }, [tests]);

    const addTest = (name, status) => {
        setTests(prev => [
            ...prev,
            //randomUUID used due to no database saved, easier than checking previous ID and incrementing
            {id:crypto.randomUUID(), name, status, lastModified:Date.now()},]);
    };

    const updateTest = (id, updates) => {
        setTests( prev =>
            prev.map(t=> (t.id === id ? {...t, ...updates, lastModified: Date.now() }: t))); 
        };
    
    const deleteTest = (id) => {
        setTests(prev => prev.filter(t => t.id !==id));
    };
    
    return{tests, addTest, updateTest, deleteTest};
}
