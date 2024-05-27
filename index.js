const initialImage = "style/images/curtida-vazia.png";
const alternateImage = "style/images/curtida-vermelha.png";
const urlImg = "http://10.92.198.38:8080/";

async function getPersons() {
  const response = await fetch("http://10.92.198.38:8080/feed/posts");
  const posts = await response.json();
  console.log(posts);
}

fetch("http://10.92.198.38:8080/feed/posts")
  .then((response) => response.json())
  .then((data) => cards(data));

function cards(data) {
  console.log(data);

  const arrayDatas = data.posts;
  const feed = document.querySelector(".feed");

  arrayDatas.forEach((element) => {
    const post = document.createElement("div");
    post.className = "post";
    post.innerHTML = `
        <div class="header-post">
          <ul>
            <div id="avatar-align">
              <img src="./style/images/user.png" id="avatar" alt="" />
              <h1 id="name">${element.title}</h1>
            </div>
            <img src="style/images/3-points.png" id="tres-pontos" alt="" />
          </ul>
        </div>
        <section>
          <h1 id="text-content">${element.content}</h1>
          <div class="img-content">
            <img src="${urlImg + element.imageUrl}" alt="Post image" />
          </div>
          <div class="actions">
            <button class="button like">
              <img src="${initialImage}" alt="like" class="img like-img" />
            </button>
          </div>
        </section>
    `;
    feed.appendChild(post);

    const likeButton = post.querySelector(".like");
    likeButton.addEventListener("click", () => {
      const likeImg = likeButton.querySelector(".like-img");
      if (likeImg.src.includes(initialImage)) {
        likeImg.src = alternateImage;
      } else {
        likeImg.src = initialImage;
      }
    });
  });
}
