import './searchbar.css'

import { apiContacts } from '../../../services/api'
import { UserSearch } from '../../icons'

async function searchByInputValue(){
    const inputValue = document.querySelector('#searchContact').value

    Promise.resolve(apiContacts.get(inputValue ? `/${inputValue}`: '')).then((response) => {
        const listContacts = response.data
        console.log(listContacts)
    })

}

export function Searchbar(){
    return (
        <>  
            <div className='containerSearchBar'>

                <input type="text" name="searchContact" placeholder="Procure por Nome, Email ou Número" id="searchContact"/>

                <a id="iSearchContact" onClick={()=> searchByInputValue()}>
                    <UserSearch/>
                </a>
            </div>
        </>
    )
}