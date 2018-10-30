let clicks = 0;
document.getElementById('create-meme').addEventListener('click', function() {
  clicks++;
  appendNewDiv();
  createMeme();
});

//1. Append new div to display meme

function appendNewDiv() {
  let newDiv = document.createElement('div');
  newDiv.classList.add('container');
  newDiv.id = 'created-memes-' + clicks;
  newDiv.setAttribute('style', 'display: inline-flex');
  let deleteButton = document.createElement('BUTTON');
  deleteButton.innerHTML = 'Delete Meme';
  deleteButton.setAttribute('id', 'delete-button');
  deleteButton.addEventListener('click', function() {
    let parentDiv = this.parentElement;
    parentDiv.parentElement.removeChild(parentDiv);
  });
  newDiv.appendChild(deleteButton);
  let divElems = document.getElementsByTagName('div');
  divElems[0].appendChild(newDiv);
}

//2. Create canvas that has meme

function createMeme() {
  let newCanvas = document.createElement('canvas');
  let ctx = newCanvas.getContext('2d');
  let topText = document.getElementById('meme-header').value;
  let bottomText = document.getElementById('meme-footer').value;
  let memeImage = new Image();
  memeImage.src = document.getElementById('meme-picture').value;
  newCanvas.width = memeImage.width;
  newCanvas.height = memeImage.height;
  ctx.clearRect(0, 0, newCanvas.width, newCanvas.height);
  ctx.drawImage(memeImage, 0, 0, newCanvas.width, newCanvas.height);
  ctx.textAlign = 'center';
  ctx.font = '20px Arial';
  ctx.fillText(topText, newCanvas.width / 2, newCanvas.height / 5);
  ctx.fillText(bottomText, newCanvas.width / 2, newCanvas.height * (4 / 5));

  document.getElementById('created-memes-' + clicks).appendChild(newCanvas);
}

//5. Append button on image that removes image

//6. Clear input fields
