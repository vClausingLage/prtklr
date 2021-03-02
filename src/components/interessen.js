import React from 'react'
import bank from '../pictures/bank.jpg'
import sailPlaneContest from '../pictures/sailplane-competition.jpg'
import attempto from '../pictures/attempto.jpg'
import sundown from '../pictures/sundown.jpg'
import tripleLanding from '../pictures/triple-landing.jpg'
import STR from '../pictures/str-25.jpg'
import cessna from '../pictures/cessna152.jpg'

function CV() {
    return (
        <>
            <h1>... in der Freizeit</h1>
            <div>
            <div className="freizeit">
                <p>In meiner Freizeit zeiht es mich in die Lüfte. Motorisiert oder nicht.</p>
            </div>
            <div className="flex">
                <figure className="pictures">
                    <img src={attempto} />
                    <figcaption>Mein Motto: attempto!</figcaption>
                </figure>
                <figure className="pictures">
                    <img src={sailPlaneContest} />
                    <figcaption>Wettbewerb Farrenberg</figcaption>
                </figure>
                <figure className="pictures">
                    <img src={sundown} />
                    <figcaption>Feierabend</figcaption>
                </figure>
                <figure className="pictures">
                    <img src={tripleLanding} />
                    <figcaption>homecoming</figcaption>
                </figure>
                <figure className="pictures">
                    <img src={bank} />
                    <figcaption>turn</figcaption>
                </figure>
                <figure className="pictures">
                    <img src={STR} />
                    <figcaption>STR RWY 25</figcaption>
                </figure>
                <figure className="pictures">
                    <img src={cessna} />
                    <figcaption>frisch geputzt</figcaption>
                </figure>
            </div>
            </div>
        </>
    )
}

export default CV