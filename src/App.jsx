import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Post from "./components/post";
import Contact from "./components/contact";
import BaseLayout from "./layouts/BaseLayout";

const App = () => {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BaseLayout>
    </Router>
  );
};

export default App;
