function getAllPosts(){
    axios.get('http://localhost:3000/api/all-posts')
    .then(res=>{
        console.log(res.data);
        for(let el of res.data){
            $('.posts').append(`
                <div class="post">
                <div class="title">${el.title}</div>
                <div class="body">${el.body}</div>
                <img src="data:${el.photo.contentType};base64,${toBase64(el.photo.data.data)}" alt="photo">
                </div>
                `)

                    
                    // $('.post').append( $('<img>', {
                    //     src: `data:${el.photo.contentType};base64,${toBase64(el.photo.data.data)}`
                    // }));
                
               
        }      

        // function toBase64(arr) {
        //     return btoa(String.fromCharCode.apply(null, new Uint8Array(arr)));
        // }

        function toBase64(buffer) {
            const binary = [];
            const bytes = new Uint8Array(buffer);
            bytes.forEach((byte) => binary.push(String.fromCharCode(byte)));
            return btoa(binary.join(''));
        }
    
    })
}
getAllPosts();
