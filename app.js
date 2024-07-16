const express=require('express');
const mongoose=require('mongoose');
const app=express();

const PORT=3000;

mongoose.connect(`mongodb+srv://root:JS3ibNgyhbwzhCuI@cluster0.cx5ubjc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
    console.log('mongoDB connected')
})

app.listen(PORT,()=>{
    console.log(`server work on port ${PORT}`);
})
// JS3ibNgyhbwzhCuI
