const postData = require(`../data/posts.js`)

//index
function index(req, res) {
    res.send('indice dei post');
}

//show
function show(req, res) {
    res.send(`post con id: ${req.params.id} `);
}

//store
function store(req, res) {
    res.send(`aggiunta nuovo post`);
}
