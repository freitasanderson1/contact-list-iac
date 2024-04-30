import React, { useState } from 'react';
import { ListaContatos } from '../content/listacontatos';
import { apiContacts } from '../../services/api';

const CallContacts = ({handleShowModalRemoveContato}) => {
    const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
        try {
            const contactsResponse = await apiContacts.get();
            const contactsData = contactsResponse.data;
            setContacts(contactsData);
        } catch (error) {
            console.error('Erro ao buscar contatos:', error);
        }
    };

    return (
            <ListaContatos fetchContacts={fetchContacts} contacts={contacts} handleShowModalRemoveContato={handleShowModalRemoveContato}/>
    );
};

export default CallContacts;