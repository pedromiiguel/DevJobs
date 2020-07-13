const express = require('express')
const router = express.Router()
const db = require('./database/db')




// INDEX
router.get('/', (req, res) => {

    const search = req.query.job
    if (!search) {
        db.all(`SELECT * FROM jobs ORDER BY created_at DESC`, function (err, rows) {
            if (err) {
                console.log(err)
            }
            const total = rows.length
            return res.render('index.html', { jobs: rows, total, search })
        })

    } else {
        db.all(`SELECT * FROM jobs WHERE title LIKE '%${search}%' ORDER BY created_at DESC `, function (err, rows) {
            if (err) {
                console.log(err)
            }
            const total = rows.length
            return res.render('index.html', { jobs: rows, total, search })
        })
    }

})

// CREATE-JOBS
router.get('/create-jobs', (req, res) => {

    return res.render('create-jobs.html')

})

// FORMULÁRIO CREATE-JOB

router.post('/savejob', (req, res) => {
    const query = `
        INSERT INTO jobs (
            title,
            description,
            company,
            state,
            city,
            image,
            salary,
            email
        ) VALUES (?,?,?,?,?,?,?,?)
    `

    const values = [
        req.body.title,
        req.body.description,
        req.body.company,
        req.body.state,
        req.body.city,
        req.body.image,
        req.body.salary,
        req.body.email
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        console.log('Cadastrado com sucesso!')
        console.log(this)
        return res.render('create-jobs.html', { saved: true })
    }

    db.run(query, values, afterInsertData)
})

// VIEW JOBS


router.get('/views/jobs/:id', (req, res) => {
    const id = req.params.id
    // console.log(id)
    db.all(`SELECT * FROM jobs WHERE id = ?`,[id], function (err, rows) {
        if (err) {
            console.log(err)
        }
        return res.render('view-jobs.html', { jobs: rows})
    })
   
})

module.exports = router
