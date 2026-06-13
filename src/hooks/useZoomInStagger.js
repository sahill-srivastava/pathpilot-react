import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";



export default function useZoomInStagger() {


    const ref = useRef(null);

    useGSAP(() => {

        gsap.from(ref.current.children, {
            scale: 0.6,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
        });


    })


    return ref;
}