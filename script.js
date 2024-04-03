function changeImage() {
  let textElement = document.getElementById("enter-text");
  let keyword = textElement.value;
  let imageElement = document.getElementById("image-gen");
  imageElement.src = "https://source.unsplash.com/random/?" + keyword;
}
