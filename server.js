let express = require("express")
const Container = require("./index")
const products = new Container("products.txt")
const PORT = 8080
let app = express()

let connectedServer = app.listen(process.env.PORT || PORT, () => console.log(`Server on http://localhost:${PORT}`));

connectedServer.on("error", error => console.log(error));


app.get("/products", async (req, res) => {
    const allProducts = await products.getAll()
    res.send(allProducts);;

})
app.get("/randomProducts", async (req, res) => {
    const product = await products.getRandom()
    res.send(product)
})
app.get("/", (req, res) => {
    res.send('<h1 style="display:flex;justify-content:center;color:green;text-align:center">this is the main page</h1>')
})