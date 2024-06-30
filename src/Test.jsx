import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshBasicMaterial, SphereGeometry, TextureLoader } from 'three';

const Blob = ({ imgUrl }) => {
  const mesh = useRef();

  useFrame(({ mouse }) => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;

    // React to mouse movement
    mesh.current.position.x = mouse.x * 2;
    mesh.current.position.y = mouse.y * 2;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial map={new TextureLoader().load(`/pic3.png`)} />
    </mesh>
  );
};

const Slid = () => {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} />
      <Blob imgUrl="path_to_your_image.jpg" />
    </Canvas>
  );
};

export default Slid;
