import { Component } from 'react'
import s from "../Tablist.module.css"
import TabItems from "./TabItems"
import data from "../../data/data.json"

class TabList extends Component {
    state = {
        tabs: data
    }

    handleClick = (event) => {
        const result = event.target.textContent
        this.setState(
            {
                tabs: this.state.tabs.map(element => element.title === result ?
                    { ...element, active: true } : { ...element, active: false })
            }
        )
    }


    render() {
        const { tabs } = this.state
        const { handleClick } = this
        const result = tabs.find(element => element.active).content

        return (
            <div>
                <ul>
                    { tabs.map(tab =>
                        <li
                            key={ tab.title }
                            onClick={ handleClick }>
                            { tab.title }
                        </li>) }
                </ul>
                <TabItems data={ result } />
            </div>
        );
    }
}

export default TabList;