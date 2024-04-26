export async function GetContacts(prop) {
    let url = 'http://0.0.0.0:8009/api/listaContatos'

    prop ? url += `/${prop}`: url +=''

    const results = await fetch(url)
    const resultsJson = await results.json()
    
    console.log(`Dados${resultsJson}`)
    
    return resultsJson
}

export async function DeleteContacts(contactId) {
    const url = `http://0.0.0.0:8009/api/listaContatos/${contactId}`
    const results = await fetch(url,
        {
            method:'DELETE',
        })
    const resultsJson = await results.json()
    // console.log(`Dados${resultsJson}`)
    return resultsJson[0]
}