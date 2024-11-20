const express = require("express");
const app = express();
const port = 3100;

app.listen(port, () => { console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`) });

// 정적 자원
app.use(express.static("public"));

// 라우트
app.get('/', (req, res) => { res.sendFile(__dirname + '/public/index.html'); });
app.get("/write", (req, res) => { res.sendFile(__dirname + '/public/write.html') });
app.get("/detail", (req, res) => { res.sendFile(__dirname + '/public/detail.html') });