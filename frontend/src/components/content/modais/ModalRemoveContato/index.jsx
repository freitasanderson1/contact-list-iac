import '../modal.css'

import ReactDOM from 'react-dom/client'

import { CloseIcon, ImageUploadIcon, UserAdd } from '../../../icons';
import { useState } from 'react';
import { apiContacts } from '../../../../services/api'
import ListUpdate  from '../../../callContacts/ListUpdates'


export function ModalRemoveContato({show,contact}){
    if(show){
        return(
            <>
            
            </>        
            
        )
    }else{
        return null
    }

}