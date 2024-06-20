const urlImg = "http://10.92.198.38:8080/";
async function getUserProfile() {
    try {
      const token = localStorage.getItem("token"); // Retrieve the stored token
      if (!token) {
        console.error("No token found. Please login first.");
        return;
      }
  
      const response = await fetch('http://10.92.198.38:8080/user/profile', {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      cards(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  
  // Rest of your code...

function cards(data) {
    console.log(data);

    const profile = document.querySelector(".profile");
    const posts = document.querySelector(".posts");

    // Limpa o conteúdo atual do perfil e dos posts
    profile.innerHTML = '';
    posts.innerHTML = '';

    // Cria um elemento div para armazenar as informações do perfil
    const profileDiv = document.createElement("div");
    profileDiv.className = "profile-info";
    profileDiv.innerHTML = `
        <div class="profile-header">
            <img src="${data.profile.avatar}" id="avatar" alt="User Avatar" />
            <h1 id="name">${data.profile.name}</h1>
        </div>
        <div class="profile-details">
            <p>Email: ${data.profile.email}</p>
            <p>Joined: ${new Date(data.profile.createdAt).toLocaleDateString()}</p>
        </div>
    `;

    profile.appendChild(profileDiv);

    // Cria elementos div para os posts
    data.profile.posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className = "post";
        postDiv.innerHTML = `
            <div class="post-header">
                <h1 class="post-title">${post.title}</h1>
            </div>
            <div class="post-details">
                <p>${post.content}</p>
                <div class="img-content">
                <img src="${urlImg + post.imageUrl}" alt="Post image" />
              </div>                
              <p>Posted on: ${new Date(post.createdAt).toLocaleDateString()}</p>
            </div>
        `;
        posts.appendChild(postDiv);
    });
}

getUserProfile();