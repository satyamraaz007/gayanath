import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CanvasScrollerProps {
  images: string[];
}

const CanvasScroller: React.FC<CanvasScrollerProps> = ({ images }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Preload images
    const imageElements: HTMLImageElement[] = [];
    let loadedImages = 0;

    const checkAllImagesLoaded = () => {
      if (loadedImages === images.length) {
        imagesRef.current = imageElements;
        setupScrollAnimation();
      }
    };

    images.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        loadedImages++;
        checkAllImagesLoaded();
      };
      img.src = src;
      imageElements[index] = img;
    });

    const setupScrollAnimation = () => {
      const drawFrame = (frameIndex: number) => {
        if (!ctx || !canvas) return;
        
        const img = imagesRef.current[Math.floor(frameIndex)];
        if (!img) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Calculate aspect ratio to fit image in canvas
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;
        
        let drawWidth, drawHeight, offsetX, offsetY;
        
        if (canvasAspect > imgAspect) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgAspect;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgAspect;
          drawHeight = canvas.height;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }
        
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      };

      // Initial draw
      drawFrame(0);

      // Create scroll animation
      gsap.to(currentFrameRef, {
        current: images.length - 1,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          onUpdate: () => {
            drawFrame(currentFrameRef.current);
          }
        }
      });
    };

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [images]);

  // Generate placeholder images for demo
  const placeholderImages = Array.from({ length: 30 }, (_, i) => 
    `https://images.pexels.com/photos/${1000000 + i}/pexels-photo-${1000000 + i}.jpeg?w=800&h=600`
  );

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ imageRendering: 'crisp-edges' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Experience Our Facility</h2>
          <p className="text-xl md:text-2xl opacity-90">Scroll to take a virtual tour</p>
        </div>
      </div>
    </div>
  );
};

export default CanvasScroller;