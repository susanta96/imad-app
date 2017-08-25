//Submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
  //make a req to server and send the name
     //create a request
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                alert('Login Successfully!!');
            }else if(request.status === 403){
                alert('Username/Password is Invalid');
            } else if(request.status === 500){
                alert('Something went wrong in the server');
            }
        }  
        //not done yet
    };    
  //  Make a request
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  console.log(username);
  console.log(password);
  request.open('POST','http://susantvanu7278.imad.hasura-app.io/login', true);
  request.send(JSON.stringify({username: username ,password: password}));
  
  //capture a list of name and render it as a list
 
  
    
};