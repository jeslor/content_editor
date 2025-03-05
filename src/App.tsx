import "./App.css"
import WavyLines from "./components/bgComponent"
import Tiptap from "./components/tiptap/TipTap"



function App() {

  return (
    <div className="App">
      <section className="editor">
      <header className="App-header">
        <h2>Content editor in react</h2>
      </header>
      <WavyLines />
      <Tiptap />
      </section>
      
    </div>
  )
}

export default App