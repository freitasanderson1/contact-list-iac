import { Icon } from './icon'
import { Searchbar } from './searchbar'

import './sidebar.css'
export function Sidebar(){
    return(
        <>
            <div className="sidebar">
                <Icon/>
                <Searchbar/>
            </div>
        </>
    )
}