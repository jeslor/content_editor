import "./App.css"
import WavyLines from "./components/bgComponent"
import Tiptap from "./components/tiptap/TipTap"



function App() {

  return (
    <div className="App">
      <section className="editor">
      <header className="App-header">
        <h1>Content editor in react</h1>
      </header>
      <WavyLines />
      <Tiptap />
      </section>
      
    </div>
  )
}

export default App