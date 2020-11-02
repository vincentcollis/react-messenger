

const express = require('express');
const bodyParser = require("body-parser")

const app = express();
const PORT = 1337

app.use(bodyParser.json())


//used to trigger re render of conversation
app.post("/sms", (req, res) => {
  console.log('working') // Call your action on the request here
  // res.status(200).end() // Responding is important
})

app.listen(PORT, ()=>console.log(`🚀 Server running on port ${PORT}`));