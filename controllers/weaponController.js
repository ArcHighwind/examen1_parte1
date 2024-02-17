import {db} from '../db/conn.js'

const getWeapon = async (req,res)=>{
    const sql = `select * from tbl_weapons`;
    const result = await db.query(sql);

    res.json(result)
}

const postWeapon = async (req,res)=>{
    const {weapon_name, weapon_effect} = req.body;
    const params = [weapon_name, weapon_effect];
    const sql = `insert into tbl_weapons
                (weapon_name, weapon_effect)
                values
                ($1, $2) returning *`
    const result = await db.query(sql,params);
    res.json(result);

}

const putWeapon = async (req,res)=>{
    const {weapon_name, weapon_effect} = req.body
    const {id} = req.params
    const params = [weapon_name, weapon_effect, id]
    const sql = `update tbl_weapons
                set
                weapon_name = $1,
                weapon_effect = $2
                where id = $3 returning *`;
    const result = await db.query(sql, params)
    res.json(result);
}

const deleteWeapon = async (req,res)=>{
    const params = [req.params.id];
    const sql = `delete from tbl_weapons
                where id = $1
                returning *`;
    const result = await db.query(sql,params);
    res.json(result);
}

export {getWeapon, postWeapon, putWeapon, deleteWeapon}