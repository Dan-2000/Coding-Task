export function TestTable({tests, sortKey, sortDir, onSort, onEdit, onDelete}) {
    return(
        <table>
            <thead>
            <tr>
                <th onClick={() =>onSort('name')}>Name</th>
                <th onClick={() =>onSort('status')}>Status</th>
                <th onClick={() =>onSort('lastModified')}>Last Modified</th>
            </tr>
            </thead>
            <tbody>
                {tests.map(t => (
                <tr key = {t.id}>
                    <td>{t.name}</td>
                    <td>{t.status}</td>
                    <td> {new Date(t.lastModified).toLocaleString()}</td>
                    <td>
                    <button onClick={() => onEdit(t)}>Edit</button>
                    <button onClick={() => onDelete(t.id)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}