import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";
import { Link } from "react-router-dom";

const awards = [
  {
    icon: "/assets/merc-hero/i-48-apple.svg",
    title: "2 APPS IN APP STORE'S",
    subtitle: "TRENDS OF THE YEAR",
  },
  {
    icon: "/assets/merc-hero/i-48-clutch.svg",
    title: "GLOBAL LEADERS, TOP B2B",
    subtitle: "COMPANIES, TOP DEVELOPERS",
  },
  {
    icon: "/assets/merc-hero/i-48-css-new.svg",
    title: "UX, UI, INNOVATION,",
    subtitle: "SPECIAL KUDOS CSS AWARDS",
  },
  {
    icon: "/assets/merc-hero/i-48-top.svg",
    title: "TOP ANDROID APP",
    subtitle: "DEVELOPMENT COMPANY",
  },
];

const RotatingNode = ({
  position,
  color,
  size = 1,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  size?: number;
  speed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4 * speed;
    }
  });

  return (
    <Float speed={1.6 * speed} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.15}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
};

const TechScene = () => {
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#ff0044" />
      <pointLight position={[-8, -6, -6]} intensity={0.8} color="#4f68ff" />

      <Stars
        radius={120}
        depth={50}
        count={2500}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* Floating tech nodes */}
      <RotatingNode position={[-3, 1, -4]} color="#ff0044" size={1.4} speed={1} />
      <RotatingNode position={[2.5, -0.5, -3]} color="#4f68ff" size={1.1} speed={0.8} />
      <RotatingNode position={[0, 2.2, -5]} color="#06b6d4" size={0.9} speed={1.3} />
      <RotatingNode position={[-1.2, -2.0, -4.5]} color="#f97316" size={0.8} speed={1.1} />

      {/* Subtle grid plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.2, -2]}>
        <planeGeometry args={[40, 40, 40, 40]} />
        <meshBasicMaterial
          color="#1a1a2e"
          wireframe
          opacity={0.35}
          transparent
        />
      </mesh>
    </>
  );
};

const Hero = () => {
  return (
    <section id="home" className="merc-hero">
      <div className="merc-hero__planet" aria-hidden="true">
        <div className="merc-hero__planet-canvas">
          <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
            <Suspense fallback={null}>
              <TechScene />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="merc-hero__content">
        <div className="merc-hero__intro">
          <h1 className="merc-hero__title">
            <span>BUILDING TOMORROW'S SOLUTIONS.</span>
            <span className="merc-hero__title-accent">GLOBALLY.</span>
          </h1>

          <p className="merc-hero__proof">Trusted expertise with numerous mobile and wearable applications featured globally.</p>

          <Link to="/contact" className="merc-button merc-button--primary merc-hero__cta">
            <span className="merc-button__content">
              <span className="merc-button__text">Request Estimate</span>
            </span>
          </Link>
        </div>

        <ul className="merc-achievements">
          {awards.map((award) => (
            <li key={award.title} className="merc-achievements__item">
              <div className="merc-achievements__icon-wrap">
                <img src={award.icon} alt="" width={48} height={48} />
              </div>
              <p className="merc-achievements__text">{award.title}</p>
              <p className="merc-achievements__text">{award.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
