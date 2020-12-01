import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export function beautyAnimation(){
    const beauty = gsap.timeline();
        beauty.from("#beauty-svg", {y:1000})
        .from("#my", {alpha: 0})
                .from("#own", {alpha: 0})
                .from("#beauty", {drawSVG: "0%", duration: 2},"draw")
                .from("#crossbar", {drawSVG: "0%", duration: 2},"draw")
                .to("#beautycontainer", {alpha: 0})



        // .to("#circles-svg",{y: -5, scaleX: 0.5, scaleY: 0.5, transformOrigin:"center"}, "transition")
        

    return beauty
}