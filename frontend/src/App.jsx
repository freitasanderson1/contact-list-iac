import { Sidebar } from "./components/sidebar"
import { ListaContatos } from "./components/content/listacontatos"

function App() {

  return (
    <>
      <div className="App">
        <Sidebar/>
        <ListaContatos/>
      </div>
    </>
  )
}

export default App
