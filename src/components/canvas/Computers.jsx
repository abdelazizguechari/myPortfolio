import React, { useRef, useEffect } from 'react';
import { useGLTF, useFBX, useAnimations } from '@react-three/drei';
import * as THREE from 'three'; // Import THREE

const Developer = ({ animationName = 'typing', ...props }) => {
  const group = useRef();
  
  // Load the GLTF model
  const { scene, nodes, materials } = useGLTF('/modele/animations/avatar.glb');

  // Load FBX animations
  const { animations: saluteAnimation } = useFBX('/modele/animations/salute.fbx');
  const { animations: idleAnimation } = useFBX('/modele/animations/idle.fbx');
  const { animations: clappingAnimation } = useFBX('/modele/animations/clapping.fbx');
  const { animations: victoryAnimation } = useFBX('/modele/animations/victory.fbx');
 

  // Add names to animations
  saluteAnimation[0].name = 'salute';
  idleAnimation[0].name = 'idle';
  clappingAnimation[0].name = 'clapping';
  victoryAnimation[0].name = 'victory';
 
  // Combine all animations into a single array
  const animations = [
    saluteAnimation[0],
    idleAnimation[0],
    clappingAnimation[0],
    victoryAnimation[0],

    
  ];

  // Use animations in the group
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Ensure the requested animation is played
    if (actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
    }

    // Fade out the animation when component unmounts or animation changes
    return () => {
      if (actions[animationName]) {
        actions[animationName].fadeOut(0.5);
      }
    };
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} scale={[2, 2, 2]} dispose={null}>
      {/* Rendering the skinned meshes dynamically */}
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  );
};

// Preload model
useGLTF.preload('/modele/animations/avatar.glb');

export default Developer;
