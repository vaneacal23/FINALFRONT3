import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "../Routes/Contact";
import Detail from "../Routes/Detail";
import Favs from "../Routes/Favs";
import Home from "../Routes/Home";
import "./../index.css";
import { ModoDarkContext } from "./oscuroContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { isModoOscuro, setIsModoOscuro } = useContext(ModoDarkContext);
  const handleOscuro = () => {
    setIsModoOscuro(!isModoOscuro);
  };

  return (
    <>
      <BrowserRouter>
        <nav className={isModoOscuro ? "dark" : "app"}>
          {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
          <img src="/images/DH.png" alt="DH-logo" width="200px" />
          <div>
            <Link to="/"> Inicio </Link>
            <Link to="/contacto"> Contacto </Link>
            <Link to="/favs"> Favoritos </Link>
            <button onClick={handleOscuro}>Change theme</button>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="favs" element={<Favs />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
