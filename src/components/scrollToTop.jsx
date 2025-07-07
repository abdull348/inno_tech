import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        // Calculate scroll progress (0-100)
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / scrollHeight) * 100;
        setScrollProgress(scrolled);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className='relative w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all'
        aria-label='Scroll to top'
      >
        {/* Circular progress background */}
        <svg
          className='w-full h-full absolute top-0 left-0 transform -rotate-90'
          viewBox='0 0 100 100'
        >
          <circle
            cx='50'
            cy='50'
            r='45'
            fill='none'
            stroke='#e2e8f0' // Light gray background
            strokeWidth='4'
          />
          <circle
            cx='50'
            cy='50'
            r='45'
            fill='none'
            stroke='#3b82f6' // Blue progress
            strokeWidth='4'
            strokeDasharray='283' // 2πr ≈ 283 (for r=45)
            strokeDashoffset={283 - (283 * scrollProgress) / 100}
            strokeLinecap='round'
          />
        </svg>

        {/* Arrow icon */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <ChevronUp className='text-gray-700' size={24} />
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;
