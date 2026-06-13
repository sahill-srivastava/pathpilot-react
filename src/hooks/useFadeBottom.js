import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";



export default function useFadeBottom() {


    const ref = useRef(null);

    useGSAP(() => {

        gsap.from(ref.current, {
            y: -100,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
            clearProps:"all",
        });


    })


    return ref;
}