export function SearchBar({ query, onChange}) {
    return ( 
        <input
        type="text"
        placeholder= "Search..."
        value={query}
        onChange={(e) => onChange(e.target.value)} />);
    
}