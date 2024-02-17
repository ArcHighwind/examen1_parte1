import {db} from '../db/conn.js'

const getSpell= async (req, res) =>{
    const sql = `select * from tbl_spells`;
    const result = await db.query(sql);
    res.json(result);
}

const postSpell = async (req, res) =>{
    const {spell_name, spell_cost, spell_effect, spell_rank} = req.body;
    const params = [spell_name, spell_cost, spell_effect, spell_rank];
    const sql =`insert into tbl_spells
                (spell_name, spell_cost, spell_effect, spell_rank)
                values
                ($1, $2, $3, $4) returning *`
    const result = await db.query(sql, params);
    res.json(result);
}

const putSpell = async (req, res) =>{
    const {spell_name, spell_cost, spell_effect, spell_rank} = req.body;
    const {id} = req.params;
    const params = [spell_name, spell_cost, spell_effect, spell_rank, id]
    const sql = `update tbl_spells
                set
                spell_name = $1,
                spell_cost = $2,
                spell_effect = $3,
                spell_rank = $4
                where id =$5 returning *`;
    const result = await db.query(sql,params)
    res.json(result);
}

const deleteSpell = async (req, res) =>{
    const params = [req.params.id];
    const sql = `delete from tbl_spells
                where id = $1
                returning *`;
    const result = await db.query(sql,params);
    res.json(result);

}

export {getSpell, postSpell, putSpell, deleteSpell}