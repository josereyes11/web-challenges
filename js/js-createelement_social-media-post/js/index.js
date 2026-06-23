console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

//Variables
const newPost = document.createElement("article");
const newPostContent = document.createElement("p");
const footerPost = document.createElement("footer");
const spanUser = document.createElement("span");
const postButton = document.createElement("button");

//Build
newPost.classList.add("post");
newPostContent.classList.add("post__content");
newPostContent.textContent = "Veni, vidi, vici";
footerPost.classList.add("post__footer");
spanUser.classList.add("post__username");
spanUser.textContent = "@username";
postButton.classList.add("post__button");
postButton.textContent = "♥ Like";
postButton.setAttribute("data-js", "like-button");
postButton.addEventListener("click", handleLikeButtonClick);

//Append
document.body.append(newPost);
newPost.append(newPostContent, footerPost);
footerPost.append(spanUser, postButton);

/*
const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const newPost = document.createElement("article");
newPost.classList.add("post");

const newPostContent = document.createElement("p");
newPostContent.classList.add("post__content");
newPostContent.textContent = "Veni, vidi, vici";

const footerPost = document.createElement("footer");
footerPost.classList.add("post__footer");

const spanUser = document.createElement("span");
spanUser.classList.add("post__username");
spanUser.textContent = "@username";

const postButton = document.createElement("button");
postButton.classList.add("post__button");
postButton.textContent = "♥ Like";

document.body.append(newPost);
newPost.append(newPostContent, footerPost);
footerPost.append(spanUser, postButton);
*/
