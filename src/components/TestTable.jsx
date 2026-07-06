export function TestTable({tests, onEdit, onDelete}) {
    return(
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Last Modified</th>
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