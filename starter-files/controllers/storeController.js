// exports.myMiddleware = (req, res, next) => {
//     req.name = 'Kevin';
//     // res.cookie('name', 'Kevin-isn\'t-slim-shady', {maxAge: 99999999999999999});
//     // if (req.name === 'Kevin') {
//     //     throw Error('Lose some weight', 'Hello Kevin');
//     // }
//     next();
// }
const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
    console.log(req.name);
    req.flash('error', ' <strong>Something</strong> happened');
    req.flash('info', 'Something happened');
    req.flash('warning', ' <strong>Something</strong> happened');
    req.flash('success', 'Something happened');
    res.render('index');
};



exports.addStore = (req, res) => {
    // res.send('<h1>ADD A STORE BRO</h1>');
    res.render('editStore', {
        title: 'Add a Store'
    });
            exports.createStore = async (req, res) => {
                const store = await (new Store(req.body)).save();
                req.flash('success', `Successfully created ${store.name}. Care to leave a review?`);
                res.redirect(`/store/${store.slug}`);
            };
}

exports.getStores = async (req, res) => {
    // 1. Query the database for a list of all stores
    const stores = await Store.find();
    // console.log(stores);
    res.render('stores', { title: 'Stores', stores });
};