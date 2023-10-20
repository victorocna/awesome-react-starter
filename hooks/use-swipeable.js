const { useRef } = require('react');

const useSwipeable = () => {
  const inputRef = useRef(null);
  const navRef = useRef();
  const dragStartXRef = useRef(0);
  const leftRef = useRef(0);
  const draggedRef = useRef(false);

  // Function to add the 'is-dragged' class
  const addDraggedClass = () => {
    if (navRef.current) {
      navRef.current.classList.add('is-dragged');
    }
  };

  // Function to remove the 'is-dragged' class
  const removeDraggedClass = () => {
    if (navRef.current) {
      navRef.current.classList.remove('is-dragged');
    }
  };

  // Swipe menu logic
  const onTouchStart = (clientX) => {
    leftRef.current = 0;
    draggedRef.current = true;
    addDraggedClass();
    dragStartXRef.current = clientX;
    requestAnimationFrame(updatePosition);
  };

  const updatePosition = () => {
    // if still dragging, then continue to animate, else stop
    if (draggedRef.current) {
      requestAnimationFrame(updatePosition);
      navRef.current.style.transform = `translateX(${leftRef.current}px)`;
    } else {
      navRef.current.style.transform = ``;
    }
  };

  const onTouchMove = (clientX) => {
    const left = clientX - dragStartXRef.current;
    if (left < 0) {
      leftRef.current = left;
    }
  };

  const onTouchEnd = () => {
    if (draggedRef.current) {
      draggedRef.current = false;
      removeDraggedClass();
      const threshold = 0.5;

      // if the menu is dragged more than (threshold)% of its width, then close it, else open it back
      if (leftRef.current < navRef.current.offsetWidth * threshold * -1) {
        inputRef.current.checked = false;
      } else {
        leftRef.current = 0;
      }
    }
  };

  return { inputRef, navRef, draggedRef, onTouchStart, onTouchMove, onTouchEnd };
};

export default useSwipeable;
