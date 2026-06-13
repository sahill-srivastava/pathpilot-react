import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";



export default function useFadeRightStagger() {


    const ref = useRef(null);

    useGSAP(() => {

        gsap.from(ref.current.children, {
            x: -500,
            opacity: 0,
            duration: 1.5,
            delay: 1,
            stagger: 0.2,
            ease: "power3.out",
        });


    })


    return ref;
}