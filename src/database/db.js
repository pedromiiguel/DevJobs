const sqlite3 = require('sqlite3').verbose()
// criar o obejtos que ira fazer operações no banco de dados

const db = new sqlite3.Database('./src/database/database.db')


db.serialize(() => {
//     //Criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS jobs (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         title TEXT,
    //         description TEXT,
    //         company TEXT,
    //         state TEXT,
    //         city TEXT,
    //         image TEXT,
    //         salary TEXT,
    //         email TEXT,
    //         created_at TEXT DEFAULT CURRENT_TIMESTAMP
    //     );
    // `)
//     //Inserir dados na tabela
//     const query = `
//     INSERT INTO jobs (
//         title,
//         description,
//         company,
//         state,
//         city,
//         image,
//         salary
//     ) VALUES (?,?,?,?,?,?,?)
// `

//     const values = [
//         "Programador Web",
//         "Programador que tenha experiência com desenvolvimento web com as principais tecnologias HTML, CSS e Javascript.",
//         "Rocketseat",
//         "Santa Catarina",
//         "Rio do Sul",
//         "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//         "1000"
//     ]

//     function afterInsertData (err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log('Cadastrado com sucesso!')
//         console.log(this)
//     }

//     // db.run(query, values, afterInsertData )

//     //Consultar os dados da tabela

    // db.all(`SELECT * FROM jobs`, function(err, rows) {
    //     if(err) {
    //         console.log(err)
    //     }

    //     console.log('Aqui estão seus registros: ')
    //     console.log(rows)
    // })


//     //Deletar um dado na tabela

    // db.run(`DELETE FROM jobs WHERE id = ?`, [12], function(err) {
    //     if(err) {
    //         console.log(err)
    //     }
    //     console.log('Registro deletado com sucesso!')
    // })

   


    
})

module.exports = db;