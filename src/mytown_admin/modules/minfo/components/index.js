import React from 'react'
import NavBar from './Navbar'
import Sidebar from './sidebar'
import CustomSelect from './CustomSelect';

function DiyaFooter() {
    return (<>
        <footer className="main-footer" style={{ fontSize: '7pt' }}>
            <div className="float-right d-none d-sm-inline" style={{ fontSize: '7pt' }}>version 0.0.1</div>
            <strong>Copyright &copy; 2020 <a href="https://diyainfocare.azba.in" target="_blank" rel="noopener noreferrer">Diya infocare</a></strong>
        </footer>
    </>)
}
export {
    NavBar,
    Sidebar,
    CustomSelect,
    DiyaFooter as Footer
}