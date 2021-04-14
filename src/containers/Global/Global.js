import { Component } from "react"
import './Global.css'
export default class Global extends Component {
    render () {
        return (
            <div className="Global">
                <h1 className="heading">Covid 19 tracker</h1>
                <p className="description">Let's Check Information about covid-19</p>
                <div className="world-stats">
                    {/* Show data */}
                </div> 
            </div>
        )
    }

}