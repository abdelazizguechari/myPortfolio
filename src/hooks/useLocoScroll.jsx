import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useLocoScroll = (ref, { smooth = true }) => {
  const locoScroll = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return;

    import('locomotive-scroll').then((module) => {
      const LocomotiveScroll = module.default;

      // Initialize Locomotive Scroll
      locoScroll.current = new LocomotiveScroll({
        el: ref.current,
        smooth: smooth,
        direction: 'horizontal', // Enable horizontal scrolling
      });

      // Update ScrollTrigger during scrolling
      locoScroll.current.on('scroll', () => {
        if (ScrollTrigger) {
          ScrollTrigger.update();
        }
      });

      // Initialize ScrollTrigger with Locomotive Scroll
      ScrollTrigger.scrollerProxy(ref.current, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.current.scrollTo(value, 0, 0)
            : locoScroll.current.scroll.instance.scroll.y;
        },
        scrollLeft(value) {
          return arguments.length
            ? locoScroll.current.scrollTo(value, 0, 0)
            : locoScroll.current.scroll.instance.scroll.x;
        },
      });

      // Refresh ScrollTrigger after Locomotive Scroll initialization
      ScrollTrigger.addEventListener('refresh', () => locoScroll.current.update());
      ScrollTrigger.refresh();

      // Cleanup on component unmount
      return () => {
        if (locoScroll.current) {
          locoScroll.current.destroy();
        }
        // Clean up ScrollTriggers
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });
  }, [ref, smooth]);

  return locoScroll;
};
