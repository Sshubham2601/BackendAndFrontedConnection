import  Express  from "express";

const app=Express();

// app.get('/', (req,res)=>{
//           res.send("server is ready");
// });
//get a five jokes
app.get('/api/jokes',(req,res)=>{

          const jokes=[
                    {
                              "id":1,
                              "title":'a joke',
                              "contents":'this is a joke'
                    },
                    {
                              "id":2,
                              "title":"another joke",
                              "contents":"this is another joke"
                    },
                    {
                              "id":3,
                              "title":"third joke",
                              "contents":"this is third joke"
                    },
                    {
                              "id":4,
                              "title":"fourth joke",
                              "contents":"this is fourth joke"
                    },
                    {
                              "id":5,
                              "title":"fifth joke",
                              "contents":"this is fifth joke"
                    },

          ];
      res.send(jokes);
})

const port=process.env.PORT||3000;
app.listen(port,()=>{
          console.log(`Serve at http://localhost:${port} `);
       }
);
