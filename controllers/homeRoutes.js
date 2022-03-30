const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage')
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
})

router.get('/login', (req, res) => {
    res.render('login')
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
});

router.get('/signUp', (req, res) => {
    res.render('signUp')
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
});

router.get('/about', (req, res) => {
    res.render('about')
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
});

module.exports = router;