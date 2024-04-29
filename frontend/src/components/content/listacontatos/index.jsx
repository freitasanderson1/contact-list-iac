import React, { useEffect } from "react";
import { ItemContato } from '../itemContato'

import './listacontatos.css'

export const ListaContatos = ({ fetchContacts, contacts }) =>{
    
    useEffect(() => {
        fetchContacts();
    }, []);

    return(
        <ul id="ulContatos">
            <li id="liHead">
                <span id='spanIndex'>#</span>
                <span id='spanPessoa'>Pessoa</span>
                <span id='spanEmail'>Email</span>
                <span id='spanData'>Data de Nascimento</span>
                <span id='spanAcoes'>Ações</span>
            </li>

            {contacts.map((contact,index) => (
                <ItemContato contact={contact} index={index+1} key={index}/>
            ))}

        </ul>
    )
}