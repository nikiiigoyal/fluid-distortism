import { Canvas } from '@react-three/fiber'
import { EffectComposer } from '@react-three/postprocessing'
import { Environment, MeshTransmissionMaterial } from '@react-three/drei'
import { Fluid } from '@whatisjery/react-fluid-distortion'

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas style={{ background: '#000000' }} dpr={[1, 2]}>
        
        
        <Environment preset="warehouse" />
        <directionalLight position={[2, 20, 10]} intensity={2} />
        <ambientLight intensity={1} />

        {/* 2. The 3D Object (Background for the fluid) */}
        <mesh position={[0, 0, -2]} rotation={[0,0,1]}>
          <torusGeometry args={[1.5, 0.6, 64, 64]} />
          <MeshTransmissionMaterial
            transmission={1}
            thickness={1.5}
            roughness={0}
            chromaticAberration={0.06}
            anisotropy={0.5}
            color="#a5c1ff"
          />
        </mesh>

        {/* 3. The Fluid Effect */}
        <EffectComposer>
          <Fluid 
            radius={0.05}
            curl={10}
            swirl={5}
            distortion={0.5}
            force={2}
            pressure={0.9}
            densityDissipation={0.96}
            velocityDissipation={0.98}
            intensity={0.3}
            rainbow={true}
            showBackground={true}
            backgroundColor="#070410"
          />
        </EffectComposer>

      </Canvas>
    </div>
  )
}
