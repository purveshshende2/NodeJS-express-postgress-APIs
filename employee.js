const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"myfirstdb",
    password:"7890",
    port:5432,
});

const createEmployee = (req,res)=>{
    const {first_name,last_name,gender} = req.body;

    pool.query(
        "INSERT INTO employee (first_name,last_name,gender) VALUES($1,$2,$3) RETURNING *",
        [first_name,last_name,gender],
        (err,result) => {
            if(err){
                console.log('err')
                throw err
            }
            res.status(200).json({
                msg:"data created successfully",
                data:result.rows[0],
            });
        }
    );
};

//for getting all employees from data base
const getEmployee = (req,res)=>{
    pool.query("SELECT * FROM employee",(err,result)=>{
        if(err){
            throw err
        }
        res.json({
            data:result.rows
        })
    })
}

module.exports={
    createEmployee,getEmployee
}