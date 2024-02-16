import {db} from '../db/conn.js'

const getMage = async (req,res)=>{
    const sql = `selelct * from tbl_hechizeros`;
    const result = await db.query(sql);

    res.json(result)
}

const postMage = async (req,res)=>{

    const {first_name, second_name, mage_age} = req.body;
    const params = [first_name, second_name, mage_age];
    const sql = `insert into tbl_mages
                (first_name, second_name, mage_age)
                values
                ($1, $2, $3) returning * `
    const result = await db.query(sql, params);
    res.json(result);
}

const putMage = async (res,req) =>{

    const {first_name, second_name, mage_age} = req.body
    const {id} = req.params
    const params = [first_name, second_name, mage_age, id]
    const sql = `update tbl_mages
                set 
                first_name = $1,
                second_name = $2,
                mage_age = $3
                where id =$4 returning *`

    const result = await db.query(sql, params)
    res.json(result);

}

const deleteMage = async (res,req) =>{

    const params = [req.params.id];
    const sql = `delete from tbl_mages
                where id = $1
                returning *`;
    const result = await db.query(sql,params);
    res.json(result);
}

export {getMage, postMage, putMage, deleteMage}