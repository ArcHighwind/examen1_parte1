import {db} from '../db/conn.js'

const getSchool = async (req, res)=> {

    const sql = `select * from tbl_schools`;
    const result = await db.query(sql);
    res.json(result);

}

const postSchool = async (req, res) => {
    const {school_name} = req.body;
    const params = [school_name];
    const sql = `insert into tbl_schools
                (school_name)
                values
                ($1) returning *`;
    const result = await db.query(sql, params);
    res.json(result);
}

const putSchool = async(req,res)=>{
    const {school_name} =req.body;
    const {id} = req.params;
    const params = {school_name, id};
    const sql = `update tbl_schools
                set school_name = $1
                where id = $2
                returning * `;
    const result = await db.query(sql, params);
    res.json(result);
}

const deleteSchool = async (req,res)=>{
    const {id} = req.params;
    const params =[id];
    const sql = `delete from tbl_schools
                where id = $1
                returning *`;
    const result = await db.query(sql,params);
    res.json(result);
}

export {getSchool, postSchool, putSchool, deleteSchool}