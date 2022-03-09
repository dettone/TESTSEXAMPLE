import Server from "./server.js";

const server = Server.listen(3000).on("listening", () => {
console.log(`Server is listening on port ${server.address().port}`);
})

const server2 = Server.listen(3001).on("listening", () => {
    console.log(`Server is listening on port ${server2.address().port}`);
    })