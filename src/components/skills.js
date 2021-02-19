import * as React from 'react'
import EditIcon from '@material-ui/icons/Edit'
import FormatPaintIcon from '@material-ui/icons/FormatPaint'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import StorageIcon from '@material-ui/icons/Storage'
import BuildIcon from '@material-ui/icons/Build'

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

function About () {
    return (
        <React.Fragment>
        <h1>was ich mache</h1>
        <div className="flex" style={{paddingTop: '10rem'}}>
            <div className="flex-item" style={{marginRight: '70px'}}>
                <p style={{display: 'flex', justifyContent: 'center'}}><BuildIcon style={{fontSize: '6rem', color: 'white'}}/></p>
            </div>
            <div className="flex-item" style={{marginLeft: '0px'}}>
                <table>
                <tbody>
                    <tr><td style={{fontSize: '1.8rem', marginRight: '10px'}}><EditIcon style={{fontSize: '1.8rem', marginRight: '10px', color: 'green'}}/></td><td className="tableText">HTML, ReactJS</td></tr>
                    <tr><td style={{fontSize: '1.8rem', marginRight: '10px'}}><FormatPaintIcon style={{fontSize: '1.8rem', marginRight: '10px', color: 'red'}}/></td><td className="tableText">CSS</td></tr>
                    <tr><td style={{fontSize: '1.8rem', marginRight: '10px'}}><FlashOnIcon style={{fontSize: '1.8rem', marginRight: '10px', color: 'yellow'}}/></td><td className="tableText">JavaScript<br></br>Python<br></br>PHP</td></tr>
                    <tr><td style={{fontSize: '1.8rem', marginRight: '10px'}}><StorageIcon style={{fontSize: '1.8rem', marginRight: '10px', color: 'black'}}/></td><td className="tableText">mySQL, MongoDB</td></tr>
                </tbody>
                </table>
            </div>
        </div>
        </React.Fragment>
    )
}

export default About
