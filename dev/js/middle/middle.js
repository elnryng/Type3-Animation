import { gsap } from "gsap";

export function middleAnimation(){
    const middle = gsap.timeline();
        // middle.to("#everything",{y:-500, duration: 0.1})
                middle.from(".fade1", {alpha: 0, stagger: 0.3, duration: 1})
                .from(".fade2", {alpha: 0, duration: 1, stagger:0.3},"spread")
                .to("#e", {x: -130, duration: 3},"spread")
                .to("#v", {x: -60, duration: 3},"spread")
                .to("#e2", {x: 60, duration: 3},"spread")
                .to("#r", {x: 160, duration: 3},"spread")
                .to("#everything",{y:-1500, duration: 2, ease: "none"})


        // .to("#circles-svg",{y: -5, scaleX: 0.5, scaleY: 0.5, transformOrigin:"center"}, "transition")
        

    return middle
}