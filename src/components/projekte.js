import * as React from 'react'
import logoSurvey from '../pictures/logoSurvey.png'
import logoSchule from '../pictures/logoSchule.png'
import InfoIcon from '@material-ui/icons/Info'
import BuildIcon from '@material-ui/icons/Build'

function Projekte() {

    let descrSurvey = 'App zum Erstellen, Versenden und Auswerten von Umfragebögen'
    let techSurvey = 'ReactJS, JS, MongoDB, Express, NodeJS'
    let techHref = 'https://surveyapp-cll.herokuapp.com'
    let descrSchule = 'Grammatik, Lexikon und Übungen für den online-Lateinunterricht'
    let techSchule = 'HTML, CSS, JS, ReactJS, PHP, mySQL'
    let schulHref = 'https://www.cll-fws-kiel.de/' 

    const Card = ({ title, picture, descr, tech, href }) => {
        return (
            <div className="block">
                <h2 className="card-head">{title}</h2>
                <div>
                    <a href={href} target="_blank"><img src={picture} className="card-image" ></img></a>
                </div>
                <div>
                <p className="descr"><InfoIcon /> {descr}</p>
                <p className="descr"><BuildIcon /> {tech}</p>
                </div>
            </div>
        )
    }

    return (
            <>
                <h1>Projekte</h1>
                <div className="projekte">
                    <Card title={'SurveyApp'} picture={logoSurvey} descr={descrSurvey} tech={techSurvey} href={techHref} />
                    <Card title={'SchulApp'} picture={logoSchule} descr={descrSchule} tech={techSchule} href={schulHref} />
                </div>
            </>
    )
}

export default Projekte