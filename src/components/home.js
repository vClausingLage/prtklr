import * as React from 'react'
import profile from '../pictures/me1.jpg'

function Home () {
    return (
        <React.Fragment>
            <div className="flex" style={{paddingTop: '10rem'}}>
                <div className="flex-item" style={{marginRight: '10px'}}>
                    <img src={profile} alt="Profilbild" style={{borderRadius: '50%'}}/>
                </div>
                <div className="flex-item typewriter" style={{marginLeft: '10px'}}>
                    <p>Herzlich willkommen! <br></br></p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home