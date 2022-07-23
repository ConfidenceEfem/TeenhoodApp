import React from 'react';
import AskModal from './components/AskModal';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionsScreen from './components/QuestionsScreen';
import PrivateRoute from './components/reduxpersist/PrivateRoute';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              // <PrivateRoute>
              <LandingPage />
              // </PrivateRoute>
            }
          />
          <Route exact path="/questions" element={<QuestionsScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
