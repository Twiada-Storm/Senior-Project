import React, {Component, useState} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import Container from "react-bootstrap/Container";
import {Searchbar} from "./Components/Searchbar";

function App() {
    return(
       <Searchbar/>
    );
}

export default App;
