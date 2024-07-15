function breakText(){
    var h1 = document.querySelector("h1")
    var h1Text=h1.textContent

    var splittedText = h1Text.split("")
    var clutter =""

    var halfValue = splittedText.length/2

    splittedText.forEach(function(elem,idx){
        if(idx<halfValue){
            clutter += `<span class="a">${elem}</span>`
        }else{
            clutter += `<span class="b">${elem}</span>`
        }
    
})

    h1.innerHTML = clutter

}

breakText()

gsap.from("h1 .a", {
    y:50,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:0.15,
    color:"green" 
})
gsap.from("h1 .b", {
    y: 50,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:-0.15,
    color:"yellow"  
})