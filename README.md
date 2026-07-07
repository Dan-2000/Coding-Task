# Test Management App
A small React coding task managing tests by name/status and last modified date/time.

## Features
- Create, edit and delete tests
- Working search bar with filters by name or status and allows last modified to be sorted by oldest or newest first. 
- Utilises local storage to save data across reloads.
## Objects
src
  Components
    SearchBar.jsx
    StatusFilter.jsx
    SortDropdown.jsx
    TestForm.jsx
    TestTable.jsx
  constants
    status.js
  hooks
    useTests.js
  utils
    testHelpers.js
  App.css
  App.jsx
  
# How to Run
git clone <https://github.com/Dan-2000/Coding-Task>
cd Coding-Task
npm install
npm run dev
port:5173
