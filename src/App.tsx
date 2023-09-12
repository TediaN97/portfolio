import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

function App() {

  return (
      <Canvas shadows camera={{ position: [0, 2, 10], fov: 30 }}>
        <Experience /> 
      </Canvas>
  )
}

export default App;