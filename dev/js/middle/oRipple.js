import { gsap } from "gsap";

export function rippleAnimation(){
    const ripple = gsap.timeline();
        ripple.from("#circles-svg", {alpha: 0})
        .fromTo("#circle2", 2, {autoAlpha:1}, {autoAlpha:0,ease:"none"},0)
        .fromTo("#circle2", 2, {attr:{r:0}}, {attr:{r:44}, ease:"Power1.out"},0)
        .fromTo("#circle1", 2, {autoAlpha:1}, {autoAlpha:0, ease:"none"}, 1)
        .fromTo("#circle1", 2, {attr:{r:0}}, {attr:{r:44}, ease:"Power1.out"}, 1);
        

    return ripple
}