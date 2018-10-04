
let wrapper = document.createElement('div');
wrapper.id = "wrapperId";
document.body.appendChild(wrapper);

let img = document.querySelector("#Image");



    


let next = document.querySelector("#Next");
//let nextValue = next.value;

let details = document.querySelector("#Details");
let detailsValue = details.value;

document.querySelector('#Next').addEventListener('click', function(e) {
    //e.preventDefault();
    getNextPhoto();
   });

    document.querySelector('#Details').addEventListener('click', function(e) {
        getDetails();
        
    });

    
   //let imag = `<img src="${} "/>`;
    let imageIndex = 0;
    function getNextPhoto(){   
        if(imageIndex > (array.length -1)){
            imageIndex = 0;
        }else {
           imageIndex++;
        }

        
    img.src = `./images/${array[imageIndex].src}`;
     
     
      
    }
    
    function getDetails(){
       array.forEach(person => {
        //console.log(person.firstName);
           let dataDiv = document.querySelector("#data")
           data.innerHTML = `FirstName: ${array[imageIndex].firstName}<br /> LastName: ${array[imageIndex].lastName} <br />Nationality: ${array[imageIndex].nationality}<br />Title: ${array[imageIndex].title}<br />Joine On: ${array[imageIndex].joinedOn}<br />${array[imageIndex].src}` ;
          // console.log(`./images/${array[imageIndex].src}`);
       })
    }
    
    img.src = `./images/${array[imageIndex].src}`;
     
    

    //http://127.0.0.1:5500/Gallery/images/yanze.jpg
