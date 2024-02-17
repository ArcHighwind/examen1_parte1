import {db} from '../db/conn.js'

const getMage = async (req,res)=>{
    const sql = `SELECT * FROM tbl_mages
    INNER JOIN tbl_schools
    ON tbl_mages.id_school = tbl_schools.id
    INNER JOIN tbl_spells
    ON tbl_mages.id_spell = tbl_spells.id
    INNER JOIN tbl_equipment
    ON tbl_mages.id_equipment = tbl_equipment.id
    INNER JOIN tbl_weapons
    ON tbl_mages.id_weapon = tbl_weapons.id;`; 
    const result = await db.query(sql);

    res.json(result)
}

const postMage = async (req,res)=>{

    const {first_name, second_name, mage_age, id_school, id_spell, id_weapon, id_equipment} = req.body;
    const params = [first_name, second_name, mage_age, id_school, id_spell, id_weapon, id_equipment];
    const sql = `insert into tbl_mages
                (first_name, second_name, mage_age, id_school, id_spell, id_weapon, id_equipment)
                values
                ($1, $2, $3, $4, $5, $6, $7) returning * `
    const result = await db.query(sql, params);
    res.json(result);
}

const putMage = async (req,res) =>{

    const {first_name, second_name, mage_age, id_school, id_spell, id_weapon, id_equipment} = req.body
    const {id} = req.params
    const params = [first_name, second_name, mage_age, id_school, id_spell, id_weapon, id_equipment, id]
    const sql = `update tbl_mages
                set 
                first_name = $1,
                second_name = $2,
                mage_age = $3,
                id_school =$4,
                id_spell = $5,
                id_weapon = $6,
                id_equipment =$7
                
                where id =$8 returning *`

    const result = await db.query(sql, params)
    res.json(result);

}

const deleteMage = async (req,res) =>{

    const params = [req.params.id];
    const sql = `delete from tbl_mages
                where id = $1
                returning *`;
    const result = await db.query(sql,params);
    res.json(result);
}

export {getMage, postMage, putMage, deleteMage}