import * as React from 'react'
import logoSurvey from '../pictures/logoSurvey.png'
import logoSchule from '../pictures/logoSchule.png'

function Projekte() {

    const descrSurvey = 'App zum Erstellen, Versenden und Auswerten von Umfragebögen'
    const techSurvey = 'ReactJS, JS, MongoDB, Express, NodeJS'
    let descrSchule = 'Grammatik, Lexikon und Übungen für den online-Lateinunterricht'
    let techSchule = 'HTML, CSS, JS, ReactJS, PHP'

    const Card = ({ title, picture, descr, tech }) => {
        return (
            <div className="block">
                <h2 className="">{title}</h2>
                <div>
                    <img src={picture} className="card-image" ></img>
                </div>
                <div>
                <p className="descr">{descr}</p>
                <p className="descr">{tech}</p>
                </div>
            </div>
        )
    }

    return (
            <>
                <h1>Projekte</h1>
                <div className="projekte">
                    <Card title={'SurveyApp'} picture={logoSurvey} descr={descrSurvey} tech={techSurvey} />
                    <Card title={'SchulApp'} picture={logoSchule} descr={descrSchule} tech={techSchule} />
                </div>
            </>
    )
}

export default Projekte