import { useRef } from "react"
import { gsap, useGSAP } from "../lib/gsap"



export default function useFadeTop() {


    const ref = useRef(null);


    useGSAP(() => {

        gsap.from(ref.current, {
            y: 100,
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.2,
        })
    })


    return ref;
}


