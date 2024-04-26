import { useEffect, useState } from "react";
import { apiContacts } from '../../../services/api'
import { ItemContato } from '../itemContato'

import './listacontatos.css'

export const ListaContatos = () =>{
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        Promise.resolve(apiContacts.get()).then((contactsResponse) => {
            const contacts = contactsResponse.data
            setContacts(contacts)
            // console.log(contacts)
        })
    },[])
    
    return(
        <ul id="ulContatos">
            <li id="liHead">
                <span>Pessoa</span>
                <span>Email</span>
                <span>Data de Aniversário</span>
            </li>
            {contacts.map((contact,index) => <ItemContato contact={contact} key={index}/>)}
        </ul>
    )
}