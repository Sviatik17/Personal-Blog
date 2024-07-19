const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const app=express();
const path= require('path')

const Post=require('./model/Post')
const PORT=3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'admin')))

mongoose.connect(`mongodb+srv://root:JS3ibNgyhbwzhCuI@cluster0.cx5ubjc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
    console.log('mongoDB connected')
})

app.get('/admin',(req,res)=>{
    res.sendFile(path.join(__dirname, 'admin','index.html'))
});
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public','index.html'))
});

app.post('/api/posts',async(req,res)=>{
    try{
        const {title,body}=req.body;
        const newPost= new Post({title,body});
        await newPost.save();
         res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ message: 'Post not created' });
    }

})

app.listen(PORT,()=>{
    console.log(`server work on port ${PORT}`);
})

