const express = require("express");
const router = express.Router();
const path = require("path");
const errorController = require("../controllers/errorController");
const db = require("../config/db");

// 라우터
router.get("/", (req, res) => {
    const sqlQuery = "SELECT * FROM note";

    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error("Error executing query:", err); // 에러 확인
            res.status(500).send("Database query failed");
            return;
        }
        
        console.log("Query result:", result); // 결과 출력
        res.send(result); // 결과 반환
    });
});

router.get("/write", (req, res) => { console.log("write"); res.sendFile('C:/study/my-petit-note/public/write.html'); });
router.get("/detail", (req, res) => { console.log("detail"); res.sendFile('C:/study/my-petit-note/public/write.html') });

router.use(errorController.pageNotFoundError);
router.use(errorController.internalServerError);

module.exports = router;
