
let img = document.querySelector("#Image");
let next = document.querySelector("#Next");


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

    /*document.querySelector('#Details').addEventListener('click', function(e) {
        getDetails();
        
    });*/

    let imageIndex = 0;
    
    function getNextPhoto(){   
        if(imageIndex > (array.length )){
            imageIndex = 0;
           
        }else {
           imageIndex++;
        }

       img.src = `./images/${array[imageIndex].src}`;
       getDetails();
      }

     function getBackPhoto() {
        if(imageIndex === (array.length - 1)){
            //imageIndex = 0;
        }else {
           imageIndex--;
        }

       img.src = `./images/${array[imageIndex].src}`;
       getDetails();
      
     }
    
    function getDetails(){
       array.forEach(person => {
        
        //console.log(person.firstName);
           let dataDiv = document.querySelector("#data")
           data.innerHTML = `<b>FirstName</b>: ${array[imageIndex].firstName}<br /> <b>LastName</b>: ${array[imageIndex].lastName} <br /><b>Nationality</b>: ${array[imageIndex].nationality}<br /><b>Title</b>: ${array[imageIndex].title}<br /><b>Joined On</b>: ${array[imageIndex].joinedOn}<br /><b>Src</b>: ${array[imageIndex].src}<br /><b>Motivates me</b>:  ${array[imageIndex].motivatesMe}<br /><b>Skills</b>:  ${array[imageIndex].skills}` ;
          // console.log(`./images/${array[imageIndex].src}`);
          //data.appendChild(wrapper);
       })
    }
    
    img.src = `./images/${array[imageIndex].src}`;
    getDetails(); 
     
    

    
