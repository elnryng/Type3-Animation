import { SplitText } from "gsap/SplitText";
import { gsap } from "gsap";


export function introAnimation(){
    // var mySplitText = new SplitText("#quote", {type:"chars, words"}),
    // tl = new TimelineLite(),
    // numChars = mySplitText.chars.length;

    var tl = gsap.timeline(),
    mySplitText = new SplitText("#quote1", {type:"chars, words"}),
    numChars = mySplitText.chars.length;


for(var i = 0; i < numChars; i++){
  //random value used as position parameter
  tl.from(mySplitText.chars[i], 2, {opacity:0}, Math.random() * 2);
}

return mySplitText
}

export function secondQuoteAnimation(){


    var tl = gsap.timeline(),
    mySplitText2 = new SplitText("#quote2", {type:"chars, words"}),
    numChars = mySplitText2.chars.length;


for(var i = 0; i < numChars; i++){
  //random value used as position parameter
  tl.from(mySplitText2.chars[i], 2, {opacity:0}, Math.random() * 2);
}

return mySplitText2
}
