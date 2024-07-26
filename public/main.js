function getAllPosts(){
    axios.get('http://localhost:3000/api/all-posts')
    .then(res=>{
        console.log(res.data);
        for(let el of res.data){
            $('.posts').append(`
                <div class="post">
                <div class="title">${el.title}</div>
                <div class="body">${el.body}</div>
                </div>
                `)
        }
    })
}
getAllPosts();
