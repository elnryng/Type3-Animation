import { gsap } from "gsap";

export function zoomAnimation(){
    const zoom = gsap.timeline();
        zoom.to("#content-container", {ease: "power2.inOut", x: -10660, y: -3700, scaleX: 60, scaleY: 60, duration: 8, transformOrigin: "center"})
        .to("#quote1", {alpha: 0})
        .to("#quote2", {alpha:0})
        .to("#content-container", {alpha:0})
        // .to("#quote2", {x: 40, y: 30, ease: "power4.in", scaleX: 15, scaleY: 15, transformOrigin: "5%", duration:2},"transition")
        

    return zoom
}