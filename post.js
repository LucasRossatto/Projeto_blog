const post = document.getElementById("form-post");

post.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const file = document.getElementById("file").files[0];
 
    const formData = new FormData();
 
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", file);


    const token = localStorage.getItem("token"); // Retrieve the stored token
        if (!token) {
          console.error("No token found. Please login first.");
          return;
        }
 

    fetch("http://10.92.198.38:8080/feed/post", {
        method: "POST",
        body: formData,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((result) => result.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
 
 
 
});

/*const urlImg = "http://10.92.198.38:8080/";
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
  }/*