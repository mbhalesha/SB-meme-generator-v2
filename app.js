const memeForm = document.querySelector("#container");

function createMemeImage(memeDiv, mainElement, image_url) {
  // create an image area
  let memeImage = document.createElement("img");
  memeImage.setAttribute("src", image_url.value);
  memeImage.classList.add("img");
  memeDiv.append(memeImage);
  mainElement.append(memeDiv);
}

function createTopText(memeDiv, top_text_input) {
  // create a div for the top text
  let topTextDiv = document.createElement("div");
  topTextDiv.classList.add("update_top_text");
  topTextDiv.innerText = top_text_input.value;
  memeDiv.append(topTextDiv);
}

function createBottomText(memeDiv, bottom_text_input) {
  // create a div for the bottom text
  let bottomTextDiv = document.createElement("div");
  bottomTextDiv.classList.add("update_bottom_text");
  bottomTextDiv.innerText = bottom_text_input.value;
  memeDiv.append(bottomTextDiv);
}

function createRemoveButton(memeDiv) {
  // create a button element
  let removeButton = document.createElement("button");
  removeButton.classList.add("remove_meme_button");
  removeButton.innerText = "Delete Meme";
  memeDiv.append(removeButton);

  // set event listener for the remove button
  removeButton.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
}

function createMeme(event) {
  event.preventDefault();

  const mainElement = document.querySelector("#main");
  const image_url = document.querySelector("#image_url");
  const bottom_text_input = document.querySelector("#bottom_text_input");
  const top_text_input = document.querySelector("#top_text_input");
  const section = document.querySelectorAll("section");

  // create a div for the meme
  let memeDiv = document.createElement("div");
  memeDiv.classList.add("section");

  // call functions for the different parts of the meme
  createMemeImage(memeDiv, mainElement, image_url);
  createTopText(memeDiv, top_text_input);
  createBottomText(memeDiv, bottom_text_input);
  createRemoveButton(memeDiv);

  // reset form
  event.target.reset();
}

// event listener for the submit button
memeForm.addEventListener("submit", createMeme);
