import * as React from 'react'
import EditIcon from '@material-ui/icons/Edit'
import FormatPaintIcon from '@material-ui/icons/FormatPaint'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import StorageIcon from '@material-ui/icons/Storage'
import BuildIcon from '@material-ui/icons/Build'

function About () {
    return (
        <>
        <h1>was ich mache</h1>
        <div className="flex skills">
            <div className="flex-item tool">
                <p className="build"><BuildIcon style={{fontSize: '6rem', color: 'white'}}/></p>
            </div>
            <div className="flex-item" style={{marginLeft: '0px'}}>
                <table>
                <tbody>
                    <tr><td ><EditIcon style={{color: 'green'}}/></td><td className="tableText"><p>HTML | ReactJS</p></td></tr>
                    <tr><td ><FormatPaintIcon style={{color: 'red'}}/></td><td className="tableText"><p>CSS</p></td></tr>
                    <tr><td ><FlashOnIcon style={{color: 'yellow'}}/></td><td className="tableText"><p>JavaScript<br></br>NodeJS | Express<br></br>Python<br></br>PHP</p></td></tr>
                    <tr><td ><StorageIcon style={{color: 'black'}}/></td><td className="tableText"><p>mySQL | MongoDB</p></td></tr>
                </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default About
