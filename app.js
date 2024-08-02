const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const path= require('path')
const multer=require('multer');

const app=express();
const Post=require('./model/Post')
const PORT=3000;
const storage=multer.memoryStorage();
const upload=multer({storage:storage});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')))

mongoose.connect(`mongodb+srv://root:JS3ibNgyhbwzhCuI@cluster0.cx5ubjc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
    console.log('mongoDB connected')
})

app.get('/admin',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'admin','index.html'))
});
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public','index.html'))
});

app.get('/api/all-posts',async(req,res)=>{
    try{
        const allPosts= await Post.find();
        res.json(allPosts)
    }catch{
        res.status(500).json({message:'Posts not find'})
    }
})

app.post('/api/posts',upload.single('photo'),async(req,res)=>{
    try{
        const {title,body}=req.body;
        const newPost= new Post({title,body, 
            photo:{
                data: req.file.buffer,
                contentType:req.file.mimetype
            }  
          
            });
        await newPost.save();
         res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ message: 'Post not created' });
    }

})

app.listen(PORT,()=>{
    console.log(`server work on port ${PORT}`);
})


