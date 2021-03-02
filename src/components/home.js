import * as React from 'react'
import profile from '../pictures/me1.jpg'

function Home () {
    return (
        <>
            <div className="flex profile">
                <div className="flex-item">
                    <img src={profile} alt="Profilbild" className="profile-image"/>
                </div>
                <div className="flex-item typewriter">
                    <p>Herzlich willkommen!</p>
                </div>
            </div>
        </>
    )
}

export default Home