import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";



export default function useZoomIn() {


    const ref = useRef(null);

    useGSAP(() => {

        gsap.from(ref.current, {
            scale: 0.6,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        });


    })


    return ref;
}