const comments = document.getElementById("comments");
const like = document.getElementById("like");

const initialImage = "style/images/como.png"
const alternateImage = "style/images/file.png"

like.addEventListener("click", function () {
    const likeImage = like.querySelector('img');
    if (likeImage.src.includes(initialImage)) {
        likeImage.src = alternateImage;
    } else {
        likeImage.src = initialImage;
    }
})
fetch("10.92.198.38:8080/feed/posts", {
    method: "Post",
    body: userData,
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
