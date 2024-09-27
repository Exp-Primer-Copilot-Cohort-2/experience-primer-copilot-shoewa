// Create web server
app.use(express.static('public'));
app.get('/comments', function (req, res) {
    res.send(comments);
});
app.post('/comments', function (req, res) {
    let newComment = req.body;
    comments.push(newComment);
    res.send(comments);
});
app.listen(3000, function () {
    console.log('Web server is listening on port 3000!');
});