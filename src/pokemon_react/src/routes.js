import React from "react";
import HomeScreen from "./screens/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonDetails from "./screens/detalhes";

const RoutesProject = () => (

    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/detalhes" element={<PokemonDetails />} />
        <Route path="/detalhes/:id" element={<PokemonDetails />} />


      </Routes>
    </Router>
)

export default RoutesProject