import { useState, useEffect, memo, useMemo, useCallback } from 'react'
import s from "../Tablist.module.css"
import TabItems from "./TabItems"
import data from "../../data/data.json"


const TABLIST = "TABLIST"

function TabList() {

    const [tabs, setTabs] = useState(() => JSON.parse(localStorage.getItem(TABLIST)) ?? data)

    useEffect(() => {
        localStorage.setItem(TABLIST, JSON.stringify(tabs))
    }, [tabs])



    const handleChanche = useCallback((event) => {
        const result = event.target.textContent
        setTabs(prevstate => prevstate.map(element => element.title === result ?
            { ...element, active: true } : { ...element, active: false })
        )
    }, [])

    // const handleClick = (event) => {
    //     const result = event.target.textContent
    //     setTabs(
    //         tabs.map(element => element.title === result ?
    //             { ...element, active: true } : { ...element, active: false })
    //     )
    // }


    const result = useMemo(() => tabs.find(element => element.active).content, [tabs])
    //const result = useCallback(() => tabs.find(element => element.active).content, [tabs])

    return (<div>
        <ul>
            { tabs.map(tab =>
                <li
                    key={ tab.title }
                    onClick={ handleChanche }>                                             
                    { tab.title }
                </li>) }
        </ul>
        <TabItems data={ result } />
    </div>)
}


// class TabList extends Component {
//     state = {
//         tabs: data
//     }

//     handleClick = (event) => {
//         const result = event.target.textContent
//         this.setState(
//             {
//                 tabs: this.state.tabs.map(element => element.title === result ?
//                     { ...element, active: true } : { ...element, active: false })
//             }
//         )
//     }

//     render() {
//         const { tabs } = this.state
//         const { handleClick } = this
//         const result = tabs.find(element => element.active).content

//         return (
//             <div>
//                 <ul>
//                     { tabs.map(tab =>
//                         <li
//                             key={ tab.title }
//                             onClick={ handleClick }>
//                             { tab.title }
//                         </li>) }
//                 </ul>
//                 <TabItems data={ result } />
//             </div>
//         );
//     }
// }

export default memo(TabList);