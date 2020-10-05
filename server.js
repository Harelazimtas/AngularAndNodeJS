var express=require('express')
bodyParser = require("body-parser");


app= express();

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/my-app/dist/my-app/"));

var items=[]

app.get('/', (req,res) => {
    res.sendFile(process.cwd()+"/my-app/dist/my-app/index.html")
});


app.get('/getAllItems',function(req,res){
    res.json({items:items});
});

app.get('/getItemById/:id',function(req,res){
    items.forEach(element => {
        if(element['item_no'] == Number(req.params.id) ){
           
           return res.end(JSON.stringify(element));
        }
    });
    res.end("The item don't exist");
});

app.get('/deposit/:id/:amount',function(req,res){
    items.forEach(element => {
        if(element['item_no'] == req.params.id ){
            element['amount']+=Number(req.params.amount);
            return res.json({message:"The quantity has been added"});
        }
    });
    res.end("The item don't exist");
});

app.get('/withdraw/:id/:amount',function(req,res){
    items.forEach(element => {
        if(element['item_no'] == req.params.id ){
            if(element['amount'] -req.params.amount >=0){
                element['amount'] =element['amount']-Number(req.params.amount);
                return res.json({message:"The quantity has been reduced"});
            }
            else{
                 return res.json({message:"The quantity not enough"});
            }     
        }
    });
    res.end("The item don't exist");

});

app.post('/addItem',function (req, res){
    const item = req.body.item;
    var bool=1;
    items.forEach(element => {
        if(element['item_no'] == item['item_no']){
            bool=0;          
        }
    });
    if(bool==1){
        items.push(item);
        res.end(JSON.stringify(item));
    }
    else{
        res.end("the item exist");
    }    
});

app.delete("/deleteById/:id",function(req,res){
    for(let i=0;i<items.length;i++){
        if(items[i]['item_no'] == req.params.id){
            items.splice(i,1);
            res.end(JSON.stringify("The item delete"));
        }
    }
    res.end("The item don't exist");

});


app.listen(3000);