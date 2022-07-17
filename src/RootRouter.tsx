import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { BikeDetails, HomePage } from './pages';

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="bike/:id" element={<BikeDetails />} />
    </Routes>
  );
};
