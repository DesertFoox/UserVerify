import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import UsersList from "../../Screens/UsersList/UsersList";

const UnAuthenticationApp = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersList />} />
    </Routes>
  );
};

export default UnAuthenticationApp;
