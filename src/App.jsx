import {useState} from 'react'
import './App.css'
import {useTests} from './hooks/useTests';
import { getVisibleTests } from './utils/testHelpers';
import { SearchBar } from './components/SearchBar';
import { StatusFilter } from './components/StatusFilter';
import { TestForm } from './components/TestForm';
import { TestTable } from './components/TestTable';
import { SortDropdown } from './components/SortDropdown';

function App() {
  const { tests, addTest, updateTest, deleteTest} = useTests();
  const [query,setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortKey, setSortKey] = useState('lastModified');
  const [sortDir, setSortDir] = useState('desc');
  const [editingTest, setEditingTest] = useState(null);

  const visibleTests = getVisibleTests(tests, {query, statusFilter, sortKey, sortDir});

  function handleSort(key, dir) {
    setSortKey(key);
    setSortDir(dir);
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
    <div className = "app">
      <h1> Test Management Project</h1>

      <TestForm
      key = {editingTest?.id ?? 'new'}
      onSubmit={handleSubmit}
      existingTest = {editingTest}
      onCancel = {() => setEditingTest(null)}/>

      <div className="controls">
      <SearchBar query={query} onChange = {setQuery} />
      <StatusFilter statusFilter={statusFilter} onChange = {setStatusFilter} />
      <SortDropdown sortKey={sortKey} sortDir={sortDir} onChange={handleSort} />
      </div>

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
