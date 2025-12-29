import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  
    const jokes = [
  {
    id: "1",
    joke: "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
    status: 200,
  },
  {
    id: "2",
    joke: "I told my computer I needed a break, and it froze. Now we both need help.",
    status: 200,
  },
  {
    id: "3",
    joke: "Why do programmers prefer dark mode? Because light attracts bugs.",
    status: 200,
  },
  {
    id: "4",
    joke: "I started a band called 1023MB. We still haven’t gotten a gig.",
    status: 200,
  },
  {
    id: "5",
    joke: "Debugging is like being the detective in a crime movie where you are also the murderer.",
    status: 200,
  },
];
  res.send(jokes);
});

const port = process.env.port || 3000; // this tells that if port avilable form env then take form there or form 3000

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
