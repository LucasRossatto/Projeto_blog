const initialImage = "style/images/curtida-vazia.png";
const alternateImage = "style/images/curtida-vermelha.png";
const urlImg = "http://10.92.198.38:8080/";
let currentPage = 1;
const perPage = 10; 

async function getPersons(page) {
  const response = await fetch(
    `http://10.92.198.38:8080/feed/posts?page=${page}&perPage=${perPage}`
  );
  const data = await response.json();
  console.log(data);
  return data;
}


function cards(data) {
  console.log(data);

  const arrayDatas = data.posts;
  const feed = document.querySelector(".feed");

  feed.innerHTML = '';

  arrayDatas.forEach((element) => {
    const post = document.createElement("div");
    post.className = "post";
    post.innerHTML = `
      <div class="header-post">
        <ul>
          <div id="avatar-align">
            <img src="./style/images/user.png" id="avatar" alt="User Avatar" />
            <h1 id="name">${element.title}</h1>
          </div>
          <img src="style/images/3-points.png" id="tres-pontos" alt="More Options" />
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

getPersons(currentPage).then(cards);

function scrollToTop() {
  window.scrollTo(0, 0);
}

document.getElementById("btn-next").addEventListener("click", () => {
  currentPage++;
  getPersons(currentPage).then(data => {
    cards(data);
    scrollToTop(); // Enviar para o topo da página
  });
});

document.getElementById("btn-prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    getPersons(currentPage).then(data => {
      cards(data);
      scrollToTop(); // Enviar para o topo da página
    });
  }
});
