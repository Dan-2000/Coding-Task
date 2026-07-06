import {STATUS_OPTIONS} from '../constants/status';

export function StatusFilter({ statusFilter, onChange}) {
    return ( 
        <select 
        value={statusFilter} onChange={(e) => onChange(e.target.value)}>
       <option value="all">All</option>
        {STATUS_OPTIONS.map(status => (
            <option key={status} value = {status}> {status} </option> ))}
        </select>
    );
}