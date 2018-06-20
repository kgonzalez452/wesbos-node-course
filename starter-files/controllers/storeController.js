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