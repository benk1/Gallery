
let img = document.querySelector("#Image");
let next = document.querySelector("#Next");

function randomHexaNumberGenerator(num){
    let result = "#";
    for(let i = 0; i < 6; i++){
    result += Math.floor(Math.random() * 16).toString(16);
    }
    return result;
    }
//let details = document.querySelector("#Details");
//let detailsValue = details.value;

document.querySelector('#Next').addEventListener('click', function(e) {
    
    getNextPhoto();
   });

   document.querySelector('#next').addEventListener('click', function(e) {
    
    getNextPhoto();
   });

   document.querySelector('#Prev').addEventListener('click', function(e) {
    
    getBackPhoto();
   });

   document.querySelector('#previous').addEventListener('click', function(e) {
    
    getBackPhoto();
   });

    document.querySelector('#Details').addEventListener('click', function(e) {
        getDetails();
        
    });

    let imageIndex = 0;
    
    function getNextPhoto(){   
        if(imageIndex > (array.length )){
            imageIndex = 0;
           
        }else {
           imageIndex++;
        }

       img.src = `./images/${array[imageIndex].src}`;
       document.querySelector("#data").classList.add('hideDetails');
       //getDetails();
      }

     function getBackPhoto() {
        if(imageIndex === (array.length - 1)){
            
        }else {
           imageIndex--;
        }

       img.src = `./images/${array[imageIndex].src}`; 7
       document.querySelector("#data").classList.add('hideDetails');
       //getDetails();
      
     }
    
    function getDetails(){
        let dataDiv = document.querySelector("#data");
        array.forEach(person => {
        dataDiv.style.backgroundColor = randomHexaNumberGenerator();
        dataDiv.innerHTML = `<b>FirstName</b>: ${array[imageIndex].firstName}<br /><b>LastName</b>: ${array[imageIndex].lastName}<br /><b>Nationality</b>: ${array[imageIndex].nationality}<br /><b>Title</b>: ${array[imageIndex].title}<br /><b>Joined On</b>: ${array[imageIndex].joinedOn}<br /><b>Src</b>: ${array[imageIndex].src}<br /><b>Motivates me</b>:  ${array[imageIndex].motivatesMe}<br /><b>Skills</b>: ${array[imageIndex].skills}` ;
        });

       document.querySelector("#data").classList.toggle("hideDetails");
       }
    
    img.src = `./images/${array[imageIndex].src}`;
   // getDetails(); 
     
    

    
