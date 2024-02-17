import {db} from '../db/conn.js'

const getEquip = async (req, res) => {
    const sql = `select * from tbl_equipment`
    const result = await db.query(sql);
    res.json(result);
}

const postEquip = async (req, res) => {
    const {equipment_name, equipment_rank, equipment_effect} = req.body;
    const params = [equipment_name, equipment_rank, equipment_effect];
    const sql = `insert into tbl_equipment
                (equipment_name, equipment_rank, equipment_effect)
                values
                ($1, $2, $3) returning *`
    const result = await db.query(sql,params);
    res.json(result);
}

const putEquip = async (req, res) => {
    const {equipment_name, equipment_rank, equipment_effect} = req.body
    const {id} = req.params
    const params = [equipment_name, equipment_rank, equipment_effect, id]
    const sql = `update tbl_equipment
                set
                equipment_name = $1
                equipment_rank = $2
                equipment_effect = $3
                where id = $4 returning *`
    const result = await db.query(sql,params)
    res.json(result);
}

const deleteEquip = async (req, res) => {
    const params =[req.params.id]
    const sql = `delete from tbl_equipment
                where id = $1
                returning *`;
    const result = await db.query(sql,params);
    res.json(result);
}

export {getEquip, postEquip, putEquip, deleteEquip}