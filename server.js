const express = require("express");
const app = express();
const port = 4500;
const routes = require("./routes/routes");
const db = require("./config/db");

app.listen(port, () => { console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`) });

// 정적 자원
app.use(express.static("public", { index : false }));

// 라우터 등록
app.use("/", routes); // 모든 요청을 routes.js로 처리하도록 등록

