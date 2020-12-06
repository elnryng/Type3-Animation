import { introAnimation } from './intro/intro.js';
import { secondQuoteAnimation } from './intro/intro.js';
import { oAnimation } from './intro/intro.js';
import { zoomAnimation } from './intro/zoom.js';
import { rippleAnimation } from './middle/oRipple.js';
import { middleAnimation } from './middle/middle.js';
import { beautyAnimation } from './middle/beauty.js';
import { mirroredAnimation } from './middle/mirrored.js';
import { creditAnimation } from './middle/credit.js';
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

var mainTL = gsap.timeline();

mainTL.add(introAnimation())
 .add(secondQuoteAnimation(),"-=2")
 .add(oAnimation(),"-=2")
 .add(zoomAnimation(),"+=1")
 .add(rippleAnimation(),"-=4")
 .add(middleAnimation())
 .add(beautyAnimation(),"-=2")
 .add(mirroredAnimation())
 .add(creditAnimation())






//instantiate GSDevTools with default settings
GSDevTools.create({css:{zIndex:10000}});
