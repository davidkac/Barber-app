import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { Link, NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";
import "./Drawer.css";
import Toogle from "./Toogle";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function DrawerComponent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSelectedHome, setIsSelectedHome] = useState(false);
  const [isSelectedAbout, setIsSelectedAbout] = useState(false);
  const [isSelecteServices, setIsSelectedServices] = useState(false);

  const drawerRef = useRef(null);

  const handleSelectedHome = () => {
    setIsSelectedHome(true);
    setIsSelectedAbout(false);
    setIsSelectedServices(false);
  };

  const handleHomeLeave = () => {
    setIsSelectedHome(false);
  };

  const handleSelectedAbout = () => {
    setIsSelectedHome(false);
    setIsSelectedAbout(true);
    setIsSelectedServices(false);
  };

  const handleAboutLeave = () => {
    setIsSelectedAbout(false);
  };

  const handleSelectedServices = () => {
    setIsSelectedHome(false);
    setIsSelectedAbout(false);
    setIsSelectedServices(true);
  };

  const handleServicesLeave = () => {
    setIsSelectedServices(false);
  };

  const drawerOpenHandler = () => {
    setIsDrawerOpen(true);
  };

  const drawerCloseHandler = () => {
    setIsDrawerOpen(false);
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      // Kliknuto izvan Drawera, zatvori ga
      drawerCloseHandler();
    }
  };

  console.log(drawerRef.current);

  useEffect(() => {
    // Dodaj event listener za klik na celu stranicu
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup: ukloni event listener prilikom demontiranja komponente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const list = () => (
    <Box
      ref={drawerRef} // Dodaj ref na Box kako bismo pratili klikove unutar njega
      sx={{ width: "100vw", height: "100vh" }}
      role="presentation"
    >
      <List
        className={`list ${isSelectedHome ? "list-home" : ""} 
       ${isSelectedAbout ? "list-about" : ""} ${
          isSelecteServices ? "list-services" : "s"
        }`}
      >
        <button onClick={drawerCloseHandler} className="close-btn">
          X
        </button>
        <nav className="list-navigation">
          <ul className="list-items">
            <li
              onClick={drawerCloseHandler}
              className="list-item"
              onMouseEnter={handleSelectedHome}
              onMouseLeave={handleHomeLeave}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={drawerCloseHandler}
              className="list-item"
              onMouseEnter={handleSelectedAbout}
              onMouseLeave={handleAboutLeave}
            >
              <Link to="/about">About Us</Link>
            </li>
            <li
              onClick={drawerCloseHandler}
              className="list-item"
              onMouseEnter={handleSelectedServices}
              onMouseLeave={handleServicesLeave}
            >
              <Link to="/">Services</Link>
            </li>
            <li onClick={drawerCloseHandler} className="list-item">
              <Link to="/">Shop</Link>
            </li>
            <li onClick={drawerCloseHandler} className="list-item">
              <Link to="/">Our Team</Link>
            </li>
            <li onClick={drawerCloseHandler} className="list-item">
              <Link to="/">Blog</Link>
            </li>
            <li onClick={drawerCloseHandler} className="list-item">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={drawerOpenHandler}>
        <Toogle />
      </Button>
      <Drawer anchor="right" open={isDrawerOpen} onClose={drawerCloseHandler}>
        {list()}
      </Drawer>
    </div>
  );
}

export default DrawerComponent;
