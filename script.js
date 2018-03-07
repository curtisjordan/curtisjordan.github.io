
var jobTitleCarousel;
var jobTitleText = ["Web Developer", "Web Designer", "Graphic Designer", "UX/UI Designer"];
var i = 0;

function jobTitleLoop(){
    
    jobTitleCarousel = jobTitleText[i];
        
    document.getElementById('output').innerHTML = "<h1>" + jobTitleCarousel + "</h1>"; 
        
    if(++i == jobTitleText.length){
        i = 0;
    }
    
    window.setTimeout(jobTitleLoop, 2700);
        
}

jobTitleLoop();



