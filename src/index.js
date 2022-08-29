// console.log('%c HI', 'color: firebrick')

// const imgUrl = "https://dog.ceo/api/breeds/image/random"

let image=document.getElementById('#dog-image-container')



document.addEventListener('DOMContentLoaded', ()=>{

   loadImages()
   loadDogBreeds()
})
// console.log(data)


function loadImages(){
    fetch( "https://dog.ceo/api/breeds/image/random/4")   
    .then(res=>res.json())
    .then(json => displayImg(json))
    .catch(err=>console.log(err))
}

///method to display images
function displayImg(images) {
    const imageDiv = document.querySelector('#dog-image-container')
    images.message.forEach(Image => {
      const img = document.createElement('img');
      img.src = Image;
     imageDiv.appendChild(img)
    });
  }
  ///function to fetch breed of dogs to UL

  function loadDogBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
    .then(res=>res.json)
    .then(json => displayBreed(json))
    .catch(err=>console.log(err))
  }
 
  function displayBreed(breeds){
    // const breedUl = document.querySelector('#dog-breeds')
    breeds.message.forEach(Breed => {
      let ul = document.createElement('li');
      ul.textContent=breeds
      ul.appendChild(btn)
      document.querySelector('#list').appendChild(ul)
    //   ul.src = Image;
    //  breedUl.appendChild(ul)
    });

  }




