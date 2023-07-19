import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// screens
import Dashboard from './components/Dashboard/dashboard';
import SignUp from './components/Login/signUp';
import Login from './components/Login/login';
import Contact from './components/Sections/contact';
import Blog from './components/Sections/blog';
import Landing from './components/Screens/landing';
import TrackPeriod from './components/MenstrualCycle/tracker';
import TrackPeriod2 from './components/MenstrualCycle/cycle2';
import TrackResults from './components/MenstrualCycle/results';
import Tracker from './components/MenstrualCycle/cycle';
import DashboardBlogCard from './components/Sections/dashboardBlogCard';



function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        <title>HerHealthHub | the sanctuary where women's wellness takes center stage</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Landing/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/track" element={<TrackPeriod />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard/track" element={<TrackPeriod2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

