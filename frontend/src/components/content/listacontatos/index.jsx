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
        <table id="tableContatos">
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Pessoa</th>
                    <th>Email</th>
                    <th>Data de Aniversário</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact,index) => <ItemContato contact={contact} index={index+1} key={index}/>)}
            </tbody>
        </table>
    )
}