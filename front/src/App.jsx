import GridGestiones from './components/GridGestiones'
import { GestionState } from './context/GestionContext'




function App() {

  return (

    <GestionState >
      <GridGestiones />
    </GestionState>

  )
}

export default App
