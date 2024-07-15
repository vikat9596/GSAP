// gsap.to("#box1", {
//     x:1000,
//     duration: 2,
//     delay:1,
//     rotate:360,
//     backgroundColor: "blue",
//     borderRadius:"50%",
//     scale:0.5,
//     repeat:-1,
//     yoyo:true
// })

// gsap.to("#box2", {
//     x:1000, 
//     duration: 2,
//     delay:1,
//     rotate:360,
//     backgroundColor: "orange",
//     borderRadius:"50%",
//     scale:1.25,
//     repeat:-1,
//     yoyo:true
// })

// gsap.to("h1", {
//     color: "black",
//     duration: 2,
//     delay:1,
//     x:1020,
//     y: -260,
//     stagger:0.3
// })



// var tl = gsap.timeline()

// tl.to("#box1",{
//     x:1000,
//     rotate:360,
//     duration:1.5,
//     delay:1,
// })

// tl.to("#box2",{
//     x:1000,
//     rotate:360,
//     duration:1.5,
// })

// tl.from("h2", {
//     y:-20,
//     opacity:0,
//     duration:1,
//     delay:0.5
// })

// tl.from("h4", {
//     x:100,
//     opacity:0,
//     duration:1,
//     stagger:0.3
    
// })

// tl.from("h1",{
//     y:20,
//     opacity:0,
//     duration:0.5,
//     scale:0.2
// })

// tl.to("#virasLogo",{
//     color:"royalblue",
//     duration:0.3,
    
// })
// tl.to("#virasLogo",{
//     color:"green",
//     duration:3, 
// })
// tl.to("#virasLogo",{
//     color:"red",
//     duration:3, 
// })

// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         scrub:true
//     }
// })

// gsap.from("#page2 #box",{
//     scale:0,
//     opacity: 0,
//     duration:1,
//     rotate:360,
//     scrollTrigger: {
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end: "top 30%",
//         scrub:2,
//         pin:true
//     }
// })

// gsap.to("#page2 h1",{
//     transform: "translateX(-150%)",
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"body",
//         markers:true,
//         start:"top 0%",
//         end:"top -100%",
//         scrub:3,
//         pin:true
//     }

// })

// gsap.to("#page1 h1",{
//     transform: "translateX(-150%)",
//     scrollTrigger:{
//         trigger:"#page1",
//         scroller:"body",
//         markers:true,
//         start:"top 10%",
//         end:"top -100%",
//         scrub:3,
//         pin:true
//     }

// })

var path ="M 10 100 Q 500 100 990 100";
var finalpath ="M 10 100 Q 500 100 990 100";


// var initialPath = `M 10 100 Q 250 100 490 100`

// var finalPath = `M 10 100 Q 250 100 490 100`

var string = document.querySelector("#string")

// string.addEventListener("mouseenter", function(){
//     console.log("entered");
// })

// string.addEventListener("mouseleave", function(){
//     console.log("Leaved");
// })

string.addEventListener("mousemove", function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease: "power3.out",
    })
})

string.addEventListener("mouseleave", function(){
    gsap.to("svg path",{
        attr:{d:finalpath},
        duration:1.5,
        ease: "elastic.out(1,0.3)"
    })
})