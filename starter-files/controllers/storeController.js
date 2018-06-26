// exports.myMiddleware = (req, res, next) => {
//     req.name = 'Kevin';
//     // res.cookie('name', 'Kevin-isn\'t-slim-shady', {maxAge: 99999999999999999});
//     // if (req.name === 'Kevin') {
//     //     throw Error('Lose some weight', 'Hello Kevin');
//     // }
//     next();
// }

exports.homePage = (req, res) => {
    console.log(req.name);
    res.render('index');
};

exports.addStore = (req, res) => {
    // res.send('<h1>ADD A STORE BRO</h1>');
    res.render('setUpStore', { title: 'Add a Store' });
}
exports.createStore = (req, res) => {
    // res.json(req.body);
    const store = new Store(req.body);
    store.save();
    store.age = 22;
    store.cool = true;
}
