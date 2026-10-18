import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { useRef } from 'react'

function Reel() {
  const g = useRef()
  useFrame(({ pointer }, dt) => {
    g.current.rotation.y += dt * 0.5
    g.current.rotation.x += (1.1 + pointer.y * 0.5 - g.current.rotation.x) * 0.05
    g.current.position.x += (pointer.x * 0.8 - g.current.position.x) * 0.05
  })
  const holes = [0, 1, 2, 3, 4, 5].map((i) => (i / 6) * Math.PI * 2)
  return (
    <Float speed={2} floatIntensity={1.2}>
      <group ref={g}>
        <mesh><torusGeometry args={[1.4, 0.18, 24, 64]} /><meshStandardMaterial color="#ff6a00" metalness={0.8} roughness={0.25} /></mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[1.4, 1.4, 0.12, 64]} /><meshStandardMaterial color="#17171f" metalness={0.6} roughness={0.4} /></mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.3, 0.3, 0.3, 32]} /><meshStandardMaterial color="#ff6a00" metalness={0.9} roughness={0.2} /></mesh>
        {holes.map((a, i) => (
          <mesh key={i} position={[Math.cos(a) * 0.85, Math.sin(a) * 0.85, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.28, 0.28, 0.2, 32]} /><meshStandardMaterial color="#0e0c0a" />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

export default function Hero3D() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 3]} intensity={2.5} />
      <pointLight position={[-4, -2, 2]} intensity={30} color="#ff6a00" />
      <Reel />
      <Sparkles count={60} scale={9} size={2} speed={0.4} color="#ffb27a" />
    </Canvas>
  )
}
