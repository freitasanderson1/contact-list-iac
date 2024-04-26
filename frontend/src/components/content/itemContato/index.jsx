import './itemContato.css'

export function ItemContato({contact}){
    return(
        <li className='itemContatoContainer'>
            <span className='mainContact'>
                <img className="contactImage" src={contact.imagem} alt={'Imagem de Perfil '+ contact.nome} widtd={50} height={50}/>
                <div className='divNameCelular'>
                    <span className="contactName">{contact.nome}</span>
                    <span className="contactCelular">
                        ({contact.celular.slice(0,2)})
                        {contact.celular.slice(2,7)}-
                        {contact.celular.slice(7)}
                    </span>
                </div>
            </span>

            <span className="contactEmail">{contact.email}</span>
            <span className='contactBirtdDate'> {contact.dataNascimento}</span>
        </li>
    )
}