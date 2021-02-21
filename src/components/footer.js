import React from 'react'

function Footer() {

    var today = new Date();
    var year = today.getFullYear();


    return (
        <div className="footer">
            &copy; clausing-lage {year}
        </div>
    )
}

export default Footer