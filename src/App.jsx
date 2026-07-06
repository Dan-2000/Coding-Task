import {useState} from 'react'
import './App.css'
import {useTests} from './hooks/useTests';
import { getVisibleTests } from './utils/testHelpers';
import { SearchBar } from './components/SearchBar';
import { StatusFilter } from './components/StatusFilter';
import { TestForm } from './components/TestForm';
import { TestTable } from './components/TestTable';

function App() {
  const { tests, addTest, updateTest, deleteTest} = useTests();
  const [query,setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortKey, setSortKey] = useState('lastModified');
  const [sortDir, setSortDir] = useState('desc');
  const [editingTest, setEditingTest] = useState(null);

  const visibleTests = getVisibleTests(tests, {query, statusFilter, sortKey, sortDir});

  function handleSort(key) {
    if (key === sortKey) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    }
    else{
      setSortKey(key);
      setSortDir('asc');
    }
  }

  function handleSubmit(data) {
    if(editingTest) { 
      updateTest(editingTest.id, data);
      setEditingTest(null);
    }
    else {
      addTest(data.name, data.status);
    }

  }
  return (
    <div>
      <h1> Test Management Project</h1>
      <TestForm
      key = {editingTest?.id ?? 'new'}
      onSubmit={handleSubmit}
      existingTest = {editingTest}
      onCancel = {() => setEditingTest(null)}/>
      <SearchBar query={query} onChange = {setQuery} />
      <StatusFilter statusFilter={statusFilter} onChange = {setStatusFilter} />
      <TestTable
      tests={visibleTests}
      sortKey={sortKey}
      sortDir={sortDir}
      onSort={handleSort}
      onEdit={setEditingTest}
      onDelete={deleteTest}
      />
    </div>
    );
}

export default App
