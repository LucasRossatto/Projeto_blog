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
 
    fetch("http://10.92.198.38:8080/feed/post", {
        method: "POST",
        body: formData,
        headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzdGVzdGVAZ21haWwuY29tIiwidXNlcklkIjoiNjY1ZGZiOWFhNjA5MjMyMTY1NmIwZDVkIiwiaWF0IjoxNzE3NDM2MzkzLCJleHAiOjE3MTc0NTA3OTN9.q09nSMSAIjq1znDmQ76xrI8sTefOxuBeYtGkrACT-BE"
            ,
        },
    })
        .then((result) => result.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
 
 
 
});