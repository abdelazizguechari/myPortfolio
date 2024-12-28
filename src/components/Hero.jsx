import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/canvas/Loading.jsx';
import Computers from '../components/canvas/Computers.jsx';  // Ensure the correct component is imported

const Hero = () => {
  const [animationName, setAnimationName] = useState('idle'); // Default animation set to 'idle'

  // Function to handle click and change animation to 'salute'
  const handleAvatarClick = () => {
    setAnimationName('victory');
  };

  // Function to handle hover and change animation to 'victory'
  const handleAvatarHover = () => {
    setAnimationName('salute');
  };

  // Function to reset animation to 'idle' when hover is removed
  const handleAvatarLeave = () => {
    setAnimationName('idle');
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Text Section */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col '} gap-5 z-10 pointer-events-none`}
      >
        <div>
          {/* Header with static text */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, ! <span className="text-[#e0e0e0]"></span>
          </h1>

          {/* Subtext with static text */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
       let work toghther
          </p>
        </div>
      </div>

      {/* 3D Avatar Canvas positioned at the bottom */}
      <Canvas camera={{ position: [0, 3, 10], fov: 25 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[15, 20, 15]} angle={0.3} penumbra={1} intensity={1} castShadow />
        <directionalLight intensity={0.5} position={[-10, 10, 5]} />

        {/* OrbitControls for rotation with no zoom or pan */}
        <OrbitControls 
          enableZoom={false}  // Disable zooming
          enablePan={false}   // Disable panning
        />

        <Suspense fallback={<CanvasLoader />}>
          <Computers 
            position-y={-2} 
            scale={0.5} 
            animationName={animationName} 
            onClick={handleAvatarClick}  // Set onClick handler here
            onPointerOver={handleAvatarHover}  // Set hover handler to change animation to 'victory'
            onPointerOut={handleAvatarLeave}   // Reset animation to 'idle' when hover is removed
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hero;
