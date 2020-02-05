const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //solution 1
  //   fs.readFile("text-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  //
  //solution 2 : stream
  //   const readable = fs.createReadStream("text-file.txt");
  //   readable.on("data", chunk => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", err => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File not found!");
  //   });
  //
  //solution 3 : pipe
  const readable = fs.createReadStream("text-file.txt");
  //readableSource.pipe(writeDest)
  readable.pipe(res);
});

server.listen(3000, "localhost", () => {
  console.log("Listening.. !!");
});
