let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


function toyCreator() { 
  let toyData = { 
    name: name,
    image: image, 
    likes: likes
  };
  let configureObj = { 
            method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
  body: JSON.stringify(toyData)
  };
  
  return fetch("http://localhost:3000/toys", configureObj) { 
      .then(function(response) {
      return response.json();
      });
      .then(function(object) { 
        h2 = document.createElement('h2')
        h2.innerHTML = object.name
      });
    
  };
}