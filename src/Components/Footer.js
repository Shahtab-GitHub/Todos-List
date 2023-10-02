import React from 'react'

const Footer = () => {
    let footerStyle = {
        position : "fixed",
        // position : "relative",
        width : "100%",
        // bottom: 0
       // top : "93vh"
    }
  return (
    <footer className= "bg-dark fixed-bottom text-light py-2 mt-10" style = {footerStyle} >
        <p className="text-center">Copyright &copy; TodosList</p>
      
    </footer>
  )
}

export default Footer
