const { app } = require("./app.js");
const PORT = 3000;
// Listen on port 3000
app.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
    // console.log('server is running at http://localhost/${PORT}');

});