import { gsap } from "gsap";

export function mirroredAnimation(){
    const mirrored = gsap.timeline();
        mirrored.from("#mirrored", {alpha: 0})
                .to("#rm1",{scaleX: 0, duration: 1, transformOrigin:"center", ease: "none"},"flip1")
                .to("#rm1",{scaleX: -1, duration: 1, ease: "none"},"flip2")
                .to("#rm2",{scaleX: 0, duration: 1, transformOrigin:"center", ease: "none"},"flip1")
                .to("#rm2",{scaleX: -1, duration: 1, ease: "none"},"flip2")
                .to("#rm3",{scaleX: 0, duration: 1, transformOrigin:"center", ease: "none"},"flip1")
                .to("#rm3",{scaleX: -1, duration: 1, ease: "none"},"flip2")
                .to("#em",{scaleX: 0, duration: 1, transformOrigin:"center", ease: "none"},"flip1")
                .to("#em",{scaleX: -1, duration: 1, ease: "none"},"flip2")
                .to("#dm",{scaleX: 0, duration: 1, transformOrigin:"center", ease: "none"},"flip1")
                .to("#dm",{scaleX: -1, duration: 1, ease: "none"},"flip2")
                .from("#box", {alpha:0},"growth")
                .to("#box", {scaleY: 1, transformOrigin:"50% 0%"}, "growth")
                .to("#turbwave",{attr:{"baseFrequency":0.01}, yoyo:true, duration:5});

    return mirrored
}