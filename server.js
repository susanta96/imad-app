var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

var articles ={ 
    'article-one':{
        title: 'Article One | Susanta',
        heading: 'Article One',
        date: 'June 24, 2017',
        content:` <p>
                        This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                    </p>
                    <p>
                        This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                    </p>
                    <p>
                        This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                    </p>`
    },
    'article-two':{
         title: 'Article Two | Susanta',
        heading: 'Article Two',
        date: 'June 29, 2017',
        content:` <p>
                        This is the content for my second article.This is the content for my second article.This is the content for my first article.This is the content for my first article.This is the content for my second article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                </p>`
                  
    },
    'article-three':{
         title: 'Article Three | Susanta',
        heading: 'Article Three',
        date: 'July 9, 2017',
        content:` <p>
                        This is the content for my Third article.
                </p>`
    }
};

function createTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width-device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet"/>
    </head>    
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h2>${heading}</h2>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div> 
        </div>
    </body>    
</html>`;
  return htmlTemplate;
}
var names=[];
app.get('/submit-name', function (req, res) {//URL: submit-name?name=xxx
    //get the name from the req
  var name = req.query.name;
  
  names.push(name);
  //JSON: Javascript Object Notation
  res.send(JSON.stringify(names));
});

app.get('/:articleName',function(req, res) {
    //articleName=article-one
    //articles[articleName]=={} content obj of article One
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName])); 
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counters = 0;
app.get('/ui/counter', function (req, res) {
  counters = counters + 1;
  res.send(counters.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});





var port = 80; 
app.listen(80, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
