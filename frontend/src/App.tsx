import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import ProfilePage from './pages/profilePage/ProfilePage';


const App: React.FC = () => {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
