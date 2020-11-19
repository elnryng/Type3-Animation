import { introAnimation } from './intro/intro.js';
import { secondQuoteAnimation } from './intro/intro.js';
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

var mainTL = gsap.timeline();

mainTL.add(introAnimation())
 .add(secondQuoteAnimation(),"-=2")






//instantiate GSDevTools with default settings
GSDevTools.create();
