const SORT_OPTIONS = [
    {key: 'name', dir: 'asc', label: 'Name (asc)'},
    {key: 'name', dir: 'desc', label: 'Name (desc)'},
    {key: 'lastModified', dir: 'asc', label: 'Oldest'},
    {key: 'lastModified', dir: 'desc', label: 'Newest'},
];

export function SortDropdown({sortKey, sortDir, onChange}) {
    const currentValue = `${sortKey}-${sortDir}`;

    return (
        <select
        value ={currentValue}
        onChange= {(e) => {
            const [key, dir] = e.target.value.split('-');
            //due to only allowing 1 filter at a time, the onChange deletes the key(first) to the dir (next option selected)
            onChange(key, dir);
        }}>
            {SORT_OPTIONS.map(option => (
                <option key ={`${option.key}-${option.dir}`} value = {`${option.key}-${option.dir}`}>
                    {option.label}
                </option>

            ))}
        </select>
    
    );
}