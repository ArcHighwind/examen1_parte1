-- Active: 1705978756250@@127.0.0.1@5432@api_hechizeros@public
create table tbl_mages
(
    id serial primary key,
    first_name varchar(500),
    second_name varchar(500),
    mage_age INT
    name_school VARCHAR(500) REFERENCES tbl_schools(school_name)

);

create table tbl_schools
(
    id serial primary key,
    school_name VARCHAR(500),
)

create table tbl_spells
(
    id serial primary key,
    spell_name VARCHAR(200),
    spell_cost INT,
    spell_effect VARCHAR(500),
    spell_rank INT
)