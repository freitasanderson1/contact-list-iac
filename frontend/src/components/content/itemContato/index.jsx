import './itemContato.css'

export function ItemContato({contact,index}){
    console.log(`Index: ${index}`)
    return(
        <tr className='itemContatoContainer'>
            <td>{index}</td>
            <td className='mainContact'>
                <img className="contactImage" src={contact.imagem} alt={'Imagem de Perfil '+ contact.nome} widtd={50} height={50}/>
                <div className='divNameCelular'>
                    <span className="contactName">{contact.nome}</span>
                    <span className="contactCelular">
                        ({contact.celular.slice(0,2)})
                        {contact.celular.slice(2,7)}-
                        {contact.celular.slice(7)}
                    </span>
                </div>
            </td>

            <td className="contactEmail">{contact.email}</td>
            <td className='contactBirtdDate'> {contact.dataNascimento}</td>
        </tr>
    )
}