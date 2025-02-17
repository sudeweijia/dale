const express = require('express');
const app = express();
const port = 3000;

// 解析 JSON 请求体
app.use(express.json());

// 处理留言提交
app.post('/submit-message', (req, res) => {
    const message = req.body.message;
    if (message) {
        console.log('收到留言：', message); // 打印到终端
        res.json({ status: '留言提交成功！' });
    } else {
        res.status(400).json({ status: '留言内容不能为空！' });
    }
});

// 静态文件服务（用于加载 HTML、CSS、JS）
app.use(express.static('public'));

// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});