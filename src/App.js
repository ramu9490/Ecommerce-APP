import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './COMPONENTS/Navbar';
import Card from './COMPONENTS/card';
import Signin from './COMPONENTS/Signin';
import SearchResults from './COMPONENTS/SearchResults';
import ContactUs from './COMPONENTS/ContactUs';

function App() {
  const [isLogedin, setLogedin] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Navbar data={setLogedin} initial={isLogedin} />
        <Routes>
          <Route path="/home" element={<Card />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signin" element={<Signin info={setLogedin} />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/category/:categoryName" element={<Card />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
