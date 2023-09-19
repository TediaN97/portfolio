/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 .\public\models\64fae7c4a9fb106b21a99e71.glb -t -r public 
*/

import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { useFBX, useGLTF, useAnimations} from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Wolf3D_Body: THREE.SkinnedMesh
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh
    Wolf3D_Outfit_Top: THREE.SkinnedMesh
    Wolf3D_Hair: THREE.SkinnedMesh
    EyeLeft: THREE.SkinnedMesh
    EyeRight: THREE.SkinnedMesh
    Wolf3D_Head: THREE.SkinnedMesh
    Wolf3D_Teeth: THREE.SkinnedMesh
    Hips: THREE.Bone
  }
  materials: {
    Wolf3D_Body: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Top: THREE.MeshStandardMaterial
    Wolf3D_Hair: THREE.MeshStandardMaterial
    Wolf3D_Eye: THREE.MeshStandardMaterial
    Wolf3D_Skin: THREE.MeshStandardMaterial
    Wolf3D_Teeth: THREE.MeshStandardMaterial
  }
}

export function Avatar(props: JSX.IntrinsicElements['group'] & {
    animation: string, section: number  
  }) {

  const { animation } = props; 
  const groupRef = useRef<THREE.Group>(null);
  
  const { nodes, materials } = useGLTF('/models/64fae7c4a9fb106b21a99e71.glb') as GLTFResult

  const { animations: typingAnimation} = useFBX("animations/Typing.fbx");
  const { animations: standingIdleAnimation} = useFBX("animations/Standing Idle.fbx");
  const { animations: standUpAnimation} = useFBX("animations/Stand Up.fbx");
  const { animations: fallingIdleAnimation} = useFBX("animations/Falling Idle.fbx");
  const { animations: walkingAnimation} = useFBX("animations/Walking.fbx");

  typingAnimation[0].name = "Typing";
  standingIdleAnimation[0].name = "Standing";
  fallingIdleAnimation[0].name = "Falling";
  walkingAnimation[0].name = "Walking"; 

  const { actions } = useAnimations([typingAnimation[0], standingIdleAnimation[0], fallingIdleAnimation[0], standUpAnimation[0], walkingAnimation[0]], groupRef);

  useFrame(() => {
  });

  useEffect(() => {
    actions[animation]?.reset().fadeIn(0.5).play();
    return () => {
      actions[animation]?.reset().fadeOut(0.5);
    }
  }, [actions, animation]);

  return (
    <group {...props} ref={groupRef} dispose={null} position={[-0.45, 0.23, 0.4]} scale={1.1}>
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
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
    </group>
  )
}

useGLTF.preload('/models/64fae7c4a9fb106b21a99e71.glb')