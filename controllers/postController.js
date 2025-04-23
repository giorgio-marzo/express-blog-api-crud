const postData = require(`../data/posts.js`)

//index
function index(req, res) {
    res.json(postData);
}

//show
function show(req, res) {
    const id = parseInt(req.params.id)

    const postPos = postData.find((postPos) => {
        return postPos.id === id;
    })

    res.json(postPos)

}

//store
function store(req, res) {
    //console.log(req.body);

    //nuovo id
    const newId = postData[postData.length - 1].id + 1;

    // destrutturo il body.req
    const { title, content, image, tags } = req.body

    //nuovo post
    const newPost = {
        id: newId,
        title,
        content,
        image,
        tags
    }

    postData.push(newPost);

    console.log(postData)

    //  codice stato 201 e risposta nuovo post
    res.status(201)

    res.json(newPost)

}

//update
function update(req, res) {

    // id del post da modificare
    const id = parseInt(req.params.id);

    const postMod = postData.find(postMod => postMod.id === id);

    // destrutturo il body.req
    const { title, content, image, tags } = req.body

    //nuovo post
    postMod.title = title;
    postMod.content = content;
    postMod.image = image;
    postMod.tags = tags;

    console.log(postData)



}

//modify
function modify(req, res) {
    res.send(`modifica parziale post con id: ${req.params.id} `);
}

//destroy
function destroy(req, res) {
    const id = parseInt(req.params.id)

    const postDel = postData.find((postDel) => {
        return postDel.id === id;
    })

    postData.splice(postData.indexOf(postDel), 1);

    // verifica rimozione
    console.log(postData)

    //codice di stato 204
    res.sendStatus(204)
}

module.exports = { index, show, store, update, modify, destroy }