import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import ContactWays from './components/ContactWays';
import Test from './components/Test';
import './App.css';

function App() {
  const [page,setPage] = useState(0)

  return (
      <div className="App">
        {/* <Test/> */}
        <Navbar setPage={setPage}/>
        <Main page={page}/>
        <ContactWays/>
      </div>
  );
}

export default App;