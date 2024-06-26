function chngimg() {
    var img = document.getElementById('imgplus').src;
    if (img.indexOf('https://cdn.vectorstock.com/i/1000v/36/28/lightbulb-on-transparent-background-vector-15093628.jpg')!=-1) {
        document.getElementById('imgplus').src = 'https://i.pinimg.com/736x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg';
        document.body.style.background = "black"; 
        document.getElementById("title").style.color = 'white'
        document.getElementById("header").style.color = 'white'
        document.getElementById("body").style.color = 'white'
        
    }
    else{
        document.getElementById('imgplus').src = 'https://cdn.vectorstock.com/i/1000v/36/28/lightbulb-on-transparent-background-vector-15093628.jpg'
        document.body.style.background = "yellow";
        // document.getElementsByClassName("about").style.color = 'white'
        document.getElementById('header').style.color = 'black'
        document.getElementById('title').style.color = 'black'
        document.getElementById('body').style.color = 'black'
    }

}

// about class = [h2, h2]
