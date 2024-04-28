import './searchbar.css'
import { apiContacts } from '../../../services/api'
import { UserSearch, LoadingIcon } from '../../icons'
import { ItemContato } from '../../content/itemContato'
import ReactDOM from 'react-dom/client'

async function searchByInputValue(){
    var inputValue = document.querySelector('#searchContact').value
    var ulContatos = document.querySelector('#ulContatos')
    var html = ReactDOM.createRoot(ulContatos)

    ulContatos.querySelectorAll('.itemContatoContainer').forEach(li => {
        li.remove()
    });

    html.render(<HtmlLoadingContacts/>)
    
    Promise.resolve(apiContacts.get(inputValue ? `/${inputValue}`: '')).then((response) => {
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
        }else{
            html.render(
                <div id='divLoadingContacts'>
                    <h1 className='fs-1' >Nenhum contato correspondente com o termo encontrado</h1>
                </div>
            )
        }
    })

}
export const HtmlLoadingContacts = () =>{
    return(
        <div id='divLoadingContacts'>
            <h1 className='fs-1' >
                <LoadingIcon/> 
                Carregando
            </h1>
        </div>
    )
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