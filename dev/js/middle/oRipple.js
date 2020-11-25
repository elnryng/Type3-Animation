import { gsap } from "gsap";

export function rippleAnimation(){
    const ripple = gsap.timeline();
        ripple.to("#o", {alpha: 0})
        ripple.from("#circles-svg", {alpha: 0},"between")
        // .to("#circles-svg",{y: -5, scaleX: 0.5, scaleY: 0.5}, "transition")
        

    return ripple
}