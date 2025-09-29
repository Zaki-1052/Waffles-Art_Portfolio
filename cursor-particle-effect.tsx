import React, { useState, useEffect, useRef, useCallback } from 'react';

const BlueButterflySparkleTrail = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const butterflyRef = useRef({ x: 0, y: 0, rotation: 0 });
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  
  const [settings, setSettings] = useState({
    particleCount: 8,
    sparkleSize: 2,
    fadeSpeed: 0.02,
    waveAmplitude: 15,
    waveFrequency: 0.5,
    trail: true,
    butterflySize: 40,
    smoothing: 0.15
  });

  // Blue color palette for sparkles
  const blueShades = [
    '#0099ff', // Bright blue
    '#0066cc', // Medium blue
    '#003d99', // Dark blue
    '#66b3ff', // Light blue
    '#3399ff', // Sky blue
    '#0080ff', // Azure
    '#4da6ff', // Pale blue
    '#1a75ff'  // Royal blue
  ];

  // Sparkle Particle class
  class SparkleParticle {
    constructor(x, y, waveOffset) {
      this.x = x;
      this.y = y;
      this.baseX = x;
      this.baseY = y;
      this.size = Math.random() * settings.sparkleSize + 1;
      this.speedX = (Math.random() - 0.5) * 2;
      this.speedY = (Math.random() - 0.5) * 2 - 1;
      this.opacity = 1;
      this.color = blueShades[Math.floor(Math.random() * blueShades.length)];
      this.fadeSpeed = settings.fadeSpeed + Math.random() * 0.01;
      this.waveOffset = waveOffset;
      this.sparklePhase = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.2;
      this.rotation = 0;
    }

    update(time) {
      // Wave motion
      const waveX = Math.sin(time * settings.waveFrequency + this.waveOffset) * settings.waveAmplitude;
      const waveY = Math.cos(time * settings.waveFrequency * 0.7 + this.waveOffset) * settings.waveAmplitude * 0.5;
      
      this.x = this.baseX + this.speedX + waveX;
      this.y = this.baseY + this.speedY + waveY;
      
      this.baseX += this.speedX * 0.5;
      this.baseY += this.speedY * 0.5;
      
      this.opacity -= this.fadeSpeed;
      this.rotation += this.rotationSpeed;
      
      // Sparkle effect
      this.sparkleIntensity = Math.sin(time * 0.01 + this.sparklePhase) * 0.5 + 0.5;
    }

    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.opacity * (0.7 + this.sparkleIntensity * 0.3);
      
      // Draw sparkle as a star
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 3);
      gradient.addColorStop(0, this.color + 'ff');
      gradient.addColorStop(0.5, this.color + '88');
      gradient.addColorStop(1, this.color + '00');
      
      ctx.fillStyle = gradient;
      
      // Draw star shape
      const spikes = 4;
      const outerRadius = this.size * 2;
      const innerRadius = this.size;
      
      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / spikes;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.fill();
      
      // Add glow effect
      ctx.shadowBlur = 20;
      ctx.shadowColor = this.color;
      ctx.fill();
      
      ctx.restore();
    }
  }

  // Butterfly SVG Component
  const ButterflyIcon = ({ x, y, rotation, size }) => (
    <div
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${size / 40})`,
        pointerEvents: 'none',
        zIndex: 10,
        filter: 'drop-shadow(0 0 10px rgba(0, 153, 255, 0.8))',
        transition: 'none'
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Butterfly body */}
        <ellipse cx="50" cy="50" rx="3" ry="15" fill="#003d99" />
        
        {/* Left wings */}
        <g transform="translate(50, 50)">
          {/* Upper left wing */}
          <path
            d="M 0,0 Q -25,-20 -30,-5 Q -35,5 -25,10 Q -15,8 -10,0 Q -5,-5 0,0"
            fill="url(#leftWingGradient1)"
            opacity="0.9"
          />
          {/* Lower left wing */}
          <path
            d="M 0,0 Q -20,10 -25,20 Q -20,25 -10,20 Q -5,10 0,0"
            fill="url(#leftWingGradient2)"
            opacity="0.9"
          />
        </g>
        
        {/* Right wings */}
        <g transform="translate(50, 50)">
          {/* Upper right wing */}
          <path
            d="M 0,0 Q 25,-20 30,-5 Q 35,5 25,10 Q 15,8 10,0 Q 5,-5 0,0"
            fill="url(#rightWingGradient1)"
            opacity="0.9"
          />
          {/* Lower right wing */}
          <path
            d="M 0,0 Q 20,10 25,20 Q 20,25 10,20 Q 5,10 0,0"
            fill="url(#rightWingGradient2)"
            opacity="0.9"
          />
        </g>
        
        {/* Wing patterns */}
        <circle cx="35" cy="40" r="3" fill="#66b3ff" opacity="0.7" />
        <circle cx="65" cy="40" r="3" fill="#66b3ff" opacity="0.7" />
        <circle cx="30" cy="55" r="2" fill="#4da6ff" opacity="0.6" />
        <circle cx="70" cy="55" r="2" fill="#4da6ff" opacity="0.6" />
        
        {/* Antennae */}
        <line x1="47" y1="40" x2="44" y2="35" stroke="#003d99" strokeWidth="1" strokeLinecap="round" />
        <line x1="53" y1="40" x2="56" y2="35" stroke="#003d99" strokeWidth="1" strokeLinecap="round" />
        <circle cx="44" cy="35" r="1.5" fill="#0066cc" />
        <circle cx="56" cy="35" r="1.5" fill="#0066cc" />
        
        {/* Gradients */}
        <defs>
          <radialGradient id="leftWingGradient1">
            <stop offset="0%" stopColor="#0099ff" />
            <stop offset="50%" stopColor="#0066cc" />
            <stop offset="100%" stopColor="#003d99" />
          </radialGradient>
          <radialGradient id="leftWingGradient2">
            <stop offset="0%" stopColor="#3399ff" />
            <stop offset="50%" stopColor="#0080ff" />
            <stop offset="100%" stopColor="#0066cc" />
          </radialGradient>
          <radialGradient id="rightWingGradient1">
            <stop offset="0%" stopColor="#0099ff" />
            <stop offset="50%" stopColor="#0066cc" />
            <stop offset="100%" stopColor="#003d99" />
          </radialGradient>
          <radialGradient id="rightWingGradient2">
            <stop offset="0%" stopColor="#3399ff" />
            <stop offset="50%" stopColor="#0080ff" />
            <stop offset="100%" stopColor="#0066cc" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );

  // Mouse move handler
  const handleMouseMove = useCallback((event) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
    
    // Calculate velocity for particle generation
    const dx = mouseRef.current.x - lastMouseRef.current.x;
    const dy = mouseRef.current.y - lastMouseRef.current.y;
    const velocity = Math.sqrt(dx * dx + dy * dy);
    
    // Generate sparkle particles in a wave pattern
    const particlesToGenerate = Math.min(Math.ceil(velocity / 3), settings.particleCount);
    
    for (let i = 0; i < particlesToGenerate; i++) {
      const waveOffset = i * 0.3 + timeRef.current * 0.01;
      const angle = Math.atan2(dy, dx) + Math.PI;
      const distance = 20 + i * 5;
      
      const offsetX = Math.cos(angle) * distance + (Math.random() - 0.5) * 10;
      const offsetY = Math.sin(angle) * distance + (Math.random() - 0.5) * 10;
      
      particlesRef.current.push(
        new SparkleParticle(
          butterflyRef.current.x + offsetX,
          butterflyRef.current.y + offsetY,
          waveOffset
        )
      );
    }
    
    lastMouseRef.current = { ...mouseRef.current };
  }, [settings]);

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    timeRef.current += 1;
    
    // Smooth butterfly movement
    const dx = mouseRef.current.x - butterflyRef.current.x;
    const dy = mouseRef.current.y - butterflyRef.current.y;
    
    butterflyRef.current.x += dx * settings.smoothing;
    butterflyRef.current.y += dy * settings.smoothing;
    
    // Calculate rotation based on movement direction
    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      const targetRotation = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      const rotationDiff = targetRotation - butterflyRef.current.rotation;
      butterflyRef.current.rotation += rotationDiff * 0.1;
    }
    
    // Clear canvas with trail effect
    if (settings.trail) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    // Update and draw sparkle particles
    particlesRef.current = particlesRef.current.filter(particle => {
      particle.update(timeRef.current);
      
      if (particle.opacity > 0) {
        particle.draw(ctx);
        return true;
      }
      return false;
    });
    
    animationRef.current = requestAnimationFrame(animate);
  }, [settings]);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Initialize butterfly position to center
      if (butterflyRef.current.x === 0 && butterflyRef.current.y === 0) {
        butterflyRef.current.x = canvas.width / 2;
        butterflyRef.current.y = canvas.height / 2;
        mouseRef.current.x = canvas.width / 2;
        mouseRef.current.y = canvas.height / 2;
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // Touch support
  const handleTouchMove = useCallback((event) => {
    const touch = event.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    handleMouseMove(mouseEvent);
  }, [handleMouseMove]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        style={{ cursor: 'none' }}
      />
      
      {/* Butterfly SVG */}
      <ButterflyIcon
        x={butterflyRef.current.x}
        y={butterflyRef.current.y}
        rotation={butterflyRef.current.rotation}
        size={settings.butterflySize}
      />
      
      {/* Controls Panel */}
      <div className="absolute top-4 left-4 bg-gray-900 bg-opacity-90 p-4 rounded-lg text-white max-w-xs backdrop-blur">
        <h2 className="text-xl font-bold mb-4 text-blue-400">Blue Butterfly Controls</h2>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm mb-1 text-blue-300">
              Butterfly Size: {settings.butterflySize}
            </label>
            <input
              type="range"
              min="20"
              max="80"
              value={settings.butterflySize}
              onChange={(e) => setSettings({...settings, butterflySize: parseInt(e.target.value)})}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm mb-1 text-blue-300">
              Sparkle Count: {settings.particleCount}
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={settings.particleCount}
              onChange={(e) => setSettings({...settings, particleCount: parseInt(e.target.value)})}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm mb-1 text-blue-300">
              Sparkle Size: {settings.sparkleSize}
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={settings.sparkleSize}
              onChange={(e) => setSettings({...settings, sparkleSize: parseInt(e.target.value)})}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm mb-1 text-blue-300">
              Wave Amplitude: {settings.waveAmplitude}
            </label>
            <input
              type="range"
              min="5"
              max="30"
              value={settings.waveAmplitude}
              onChange={(e) => setSettings({...settings, waveAmplitude: parseInt(e.target.value)})}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm mb-1 text-blue-300">
              Wave Frequency: {settings.waveFrequency.toFixed(2)}
            </label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={settings.waveFrequency}
              onChange={(e) => setSettings({...settings, waveFrequency: parseFloat(e.target.value)})}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm mb-1 text-blue-300">
              Fade Speed: {settings.fadeSpeed.toFixed(3)}
            </label>
            <input
              type="range"
              min="0.005"
              max="0.05"
              step="0.005"
              value={settings.fadeSpeed}
              onChange={(e) => setSettings({...settings, fadeSpeed: parseFloat(e.target.value)})}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm mb-1 text-blue-300">
              Smoothing: {settings.smoothing.toFixed(2)}
            </label>
            <input
              type="range"
              min="0.05"
              max="0.3"
              step="0.05"
              value={settings.smoothing}
              onChange={(e) => setSettings({...settings, smoothing: parseFloat(e.target.value)})}
              className="w-full"
            />
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="trail"
              checked={settings.trail}
              onChange={(e) => setSettings({...settings, trail: e.target.checked})}
              className="mr-2"
            />
            <label htmlFor="trail" className="text-sm text-blue-300">Enable Trail Effect</label>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-400">
            Move your mouse and watch the butterfly follow with magical sparkles!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlueButterflySparkleTrail;