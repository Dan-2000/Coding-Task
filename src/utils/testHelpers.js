export function getVisibleTests(tests,{query, statusFilter, sortKey, sortDir}) {
    const searched = tests.filter( t=> t.name.toLowerCase().includes(query.toLowerCase()));
    const filtered = searched.filter(t => statusFilter === 'all' || t.status === statusFilter);

    const dir = sortDir ==='asc' ? 1 : -1;
    const sorted = filtered.sort((a,b) => {
        if(a[sortKey] < b[sortKey]) return -1 * dir;
        if (a[sortKey] > b[sortKey]) return 1 * dir;
        return 0;
    });
    return sorted
}