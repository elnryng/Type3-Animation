import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export function beautyAnimation(){
    const beauty = gsap.timeline();
        beauty.from("#my", {alpha: 0})
                .from("#own", {alpha: 0})
                .from("#script", {drawSVG: "0%", duration: 2})



        // .to("#circles-svg",{y: -5, scaleX: 0.5, scaleY: 0.5, transformOrigin:"center"}, "transition")
        

    return beauty
}