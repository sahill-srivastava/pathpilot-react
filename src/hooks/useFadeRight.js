import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";



export default function useFadeRight() {


    const ref = useRef(null);

    useGSAP(() => {

        gsap.from(ref.current, {
            x: -200,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        });


    })


    return ref;
}