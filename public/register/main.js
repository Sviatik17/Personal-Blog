   $(document).ready(function(){
    $('.signUpBtn').click(async function(){
        const name = $('.name').val();
        const lastname = $('.lastName').val();
        const username = $('.username').val();
        const email = $('.email').val();
        const password = $('.password').val();
        try{
            const response= await axios.post('/auth/register',{name,lastname,username,email,password});
            $('.signUpText').css('display','none')
            console.log(response.data)
            alert('User created successfully, now you can log in');
        }catch(error){
            alert(error.response.data.message);
    
        }
    })
   })
  

