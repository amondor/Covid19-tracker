import { Component } from "react"
import './Global.css'

//import Components
import worldSats from '../../components/WorldStats/WordlStats'
import WorldStats from "../../components/WorldStats/WordlStats"

//9:10 
//Implement the API now 

export default class Global extends Component {
    render () {
        return (
            <div className="Global">
                <h1 className="heading">Covid 19 tracker</h1>
                <p className="description">Let's Check Information about covid-19</p>
                <div className="world-stats">
                    <WorldStats
                    key="1"
                    about="Total Cases"
                    total="255,134"
                    />

                    <WorldStats
                    key="2"
                    about="Total Deaths"
                    total="25,134"
                    />

                    <WorldStats
                    key="3"
                    about="Total Recovered"
                    total="155,134"
                    />
                </div> 
            </div>
        )
    }
}