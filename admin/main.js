

$('#addPost').click(()=>{
    let data={
        title:$('#title').val(),
        body:$('#post').val()
    };
    axios.post('/api/posts',data)
    .then(res=>{
        console.log(res);
        alert('Новий пост  створено');
        $('#title').val('');
        $('#post').val('');

    })
})