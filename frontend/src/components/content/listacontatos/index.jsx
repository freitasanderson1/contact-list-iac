import { useEffect, useState } from "react";
import { apiContacts } from '../../../services/api'
import { ItemContato } from '../itemContato'
import { HtmlLoadingContacts } from '../../sidebar/searchbar'

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
                <span id='spanIndex'>#</span>
                <span id='spanPessoa'>Pessoa</span>
                <span id='spanEmail'>Email</span>
                <span id='spanData'>Data de Nascimento</span>
                <span id='spanAcoes'>Ações</span>
            </li>
            {contacts.map((contact,index) => <ItemContato contact={contact} index={index+1} key={index}/>)}
        </ul>
    )
}