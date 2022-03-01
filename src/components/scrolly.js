import React, { useEffect, useState, useRef } from 'react';

export default function Header() {
  
    const [offset, setOffset] = useState(0);  
    const ref = useRef(null);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    function toogleMenyBackground(){
      console.log(offset, offset );
    }

    toogleMenyBackground();
   

  return (
    <div>header</div>
  )
}