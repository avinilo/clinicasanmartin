'use client';

import { useEffect, useState, useRef } from 'react';

interface SpecialtiesScrollIndicatorProps {
  totalItems: number;
  scrollId?: string;
}

export default function SpecialtiesScrollIndicator({ totalItems, scrollId = 'specialties-scroll' }: SpecialtiesScrollIndicatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = document.getElementById(scrollId);
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const cardWidth = 288; // w-72 = 18rem = 288px
      const gap = 16; // gap-4 = 1rem = 16px
      const cardTotalWidth = cardWidth + gap;
      
      // Calculate which card is most visible (start from left edge)
      const newIndex = Math.round(scrollLeft / cardTotalWidth);
      
      setActiveIndex(Math.max(0, Math.min(newIndex, totalItems - 1)));
    };

    // Initial calculation
    handleScroll();

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [totalItems, scrollId]);

  return (
    <div className="mt-6">
      {/* Dot indicators only */}
      <div className="flex justify-center mt-3 gap-2">
        {[...Array(totalItems)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex 
                ? 'bg-blue-600 scale-125' 
                : i < activeIndex 
                  ? 'bg-blue-400' 
                  : 'bg-blue-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}