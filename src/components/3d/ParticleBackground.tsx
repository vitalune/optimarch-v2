'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useRef, useMemo, useState, useEffect } from 'react'
import * as THREE from 'three'

function Particles({ count = 5000 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null!)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      temp.set([
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
      ], i * 3)
    }
    return temp
  }, [count])

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x -= delta / 10
      mesh.current.rotation.y -= delta / 15
      
      mesh.current.position.x = THREE.MathUtils.lerp(
        mesh.current.position.x,
        mousePosition.x * 0.5,
        0.02
      )
      mesh.current.position.y = THREE.MathUtils.lerp(
        mesh.current.position.y,
        mousePosition.y * 0.5,
        0.02
      )
    }
  })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

function GeometricShapes() {
  const group = useRef<THREE.Group>(null!)
  
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.x += delta * 0.1
      group.current.rotation.y += delta * 0.15
    }
  })

  return (
    <group ref={group}>
      <mesh position={[-5, 5, -5]}>
        <octahedronGeometry args={[1]} />
        <meshBasicMaterial color="#8b5cf6" wireframe />
      </mesh>
      
      <mesh position={[5, -5, -5]}>
        <icosahedronGeometry args={[1]} />
        <meshBasicMaterial color="#3b82f6" wireframe />
      </mesh>
      
      <mesh position={[-3, -3, 3]}>
        <tetrahedronGeometry args={[1]} />
        <meshBasicMaterial color="#06b6d4" wireframe />
      </mesh>
      
      <mesh position={[3, 3, 3]}>
        <dodecahedronGeometry args={[1]} />
        <meshBasicMaterial color="#8b5cf6" wireframe />
      </mesh>
    </group>
  )
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{
          position: [10, 10, 10],
          fov: 60,
        }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 2]}
      >
        <Particles count={3000} />
        <GeometricShapes />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  )
}