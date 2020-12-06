import { gsap } from "gsap";

export function zoomAnimation(){
    const zoom = gsap.timeline();
        zoom.to("#content-container", {ease: "power2.inOut", x: -17860, y: -6200, scaleX: 100, scaleY: 100, duration: 6, transformOrigin: "center"})
        .to("#o", {alpha: 0, duration:1.2},"-=3")
        .to("#quote1", {alpha: 0})
        .to("#quote2", {alpha:0})
        .to("#content-container", {alpha:0})
        
        // .to("#quote2", {x: 40, y: 30, ease: "power4.in", scaleX: 15, scaleY: 15, transformOrigin: "5%", duration:2},"transition")
        

    return zoom
}