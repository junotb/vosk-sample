import express from 'express'; // ES Module의 경우
const express = require('express'); // CommonJS의 경우
// 위의 구문의 경우 두 줄 다 쓰는 것이 아니라 자신이 쓰는 형식에 맞춰서 써야한다
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});