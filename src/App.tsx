import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from "./layouts/main_layout/main_layout";
import GreetingsScreen from './pages/greetings_screen/greetings_screen';
import GenreScreen from './pages/genre_screen/genre_screen';
import ParticipantScreen from './pages/participant_screen/participant_screen';
import FilmsCardScreen from './pages/films_card_screen/films_card_screen';
import JoinScreen from './pages/join_screen/join_screen';
import FinalScreen from './pages/final_screen/final_screen';
import NotFoundScreen from './pages/not_found_page/not_found_page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<GreetingsScreen/>}/>
          <Route path="/genre" element={<GenreScreen/>}/>
          <Route path="/participant" element={<ParticipantScreen/>}/>
          <Route path="/films" element={<FilmsCardScreen/>}/>
          <Route path="/join" element={<JoinScreen/>}/>
          <Route path="/final" element={<FinalScreen/>}/>
          <Route path="*" element={<NotFoundScreen/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
