import './searchbar.css'

import { apiContacts } from '../../../services/api'

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

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                        <path d="M13 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453366 18.0441 4.1628 16.324 5.57757 15.4816C7.53058 14.3187 9.7927 13.8404 12 14.0466" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.5 6.5C15.5 8.98528 13.4853 11 11 11C8.51472 11 6.5 8.98528 6.5 6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M20.4 20.4L22 22M21.2 17.6C21.2 15.6118 19.5882 14 17.6 14C15.6118 14 14 15.6118 14 17.6C14 19.5882 15.6118 21.2 17.6 21.2C19.5882 21.2 21.2 19.5882 21.2 17.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </>
    )
}