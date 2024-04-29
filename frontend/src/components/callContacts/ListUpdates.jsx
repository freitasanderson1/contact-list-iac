import ReactDOM from 'react-dom/client'
import { apiContacts } from '../../services/api';

import { ItemContato } from '../content/itemContato';

const ListUpdates = () => {
    var ulContatos = document.querySelector('#ulContatos')
    var html = ReactDOM.createRoot(ulContatos)

    Promise.resolve(apiContacts.get()).then((response) => {
        var listContacts = response.data
    
        if (listContacts.length>0){
            listContacts.map((contato) => contato.imagem.includes('http://0.0.0.0:8009') ? contato.imagem=contato.imagem: contato.imagem = `http://0.0.0.0:8009${contato.imagem}` )
            
            var htmlToRender =[
                <li id="liHead">
                    <span id='spanIndex'>#</span>
                    <span id='spanPessoa'>Pessoa</span>
                    <span id='spanEmail'>Email</span>
                    <span id='spanData'>Data de Nascimento</span>
                    <span id='spanAcoes'>Ações</span>
                </li>
            ]

            listContacts.map((contact,index) =>{htmlToRender.push(<ItemContato contact={contact} index={index+1} key={index}/>)})
            html.render(htmlToRender)
        }
    
    
    })
}
export default ListUpdates;