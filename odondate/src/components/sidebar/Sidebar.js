import React from 'react';
import PatientRegister from './PatientRegister';
import  './sidebar.css';

const Sidebar = ({onSearch}) => {


  return (
    <div className="sidebar-container">
      <p className="patient-name">Patient Name</p>
      <div className="buscador">
            <input onChange={event => {
             const value = event.target.value;
             onSearch(value);
            }} placeholder="Buscar"/>
       </div>
      <button className="button">Buscar</button> 
      <PatientRegister></PatientRegister>
    </div>
  

  );
}
export default Sidebar;