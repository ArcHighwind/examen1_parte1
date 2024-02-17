-- Active: 1705978756250@@127.0.0.1@5432@api_hechizeros@public
create table tbl_mages
(
    id serial primary key,
    first_name varchar(500),
    second_name varchar(500),
    mage_age INT,
    id_school INT REFERENCES tbl_schools(id),
    id_spell INT REFERENCES tbl_spells(id),
    id_weapon INT REFERENCES tbl_weapon(id),
    id_equipment INT REFERENCES tbl_equipment(id)
);


create table tbl_schools
(
    id serial primary key,
    school_name VARCHAR(500)
);

create table tbl_spells
(
    id serial primary key,
    spell_name VARCHAR(200),
    spell_cost INT,
    spell_effect VARCHAR(500),
    spell_rank INT
);

create table tbl_equipment
(
    id serial primary key,
    equipment_name VARCHAR(200),
    equipment_rank VARCHAR(3),
    equipment_effect VARCHAR(500)
);

create table tbl_weapons
(
    id serial primary key,
    weapon_name VARCHAR(200),
    weapon_effect VARCHAR(500)
    
);