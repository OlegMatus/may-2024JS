use mysql2024;

create table skills
(
    id    int primary key auto_increment,
    skill varchar(20) not null
);
insert into skills (skill)
values ('JS'),
       ('TS'),
       ('HTML'),
       ('REACT'),
       ('CSS'),
       ('PYTHON');

create table developers
(
    id       int primary key auto_increment,
    username varchar(40)  not null,
    password varchar(100) not null
);
insert into developers (username, password)
values ('Maks', 'qsfdsdf23'),
       ('Dima', 'qsfdsdyryf23'),
       ('Olya', 'qsfdsd75yf23'),
       ('Oleksandr', 'qsf546yryf23'),
       ('Mila', 'qs3tydfhyryf23'),
       ('Kate', 'qs3t555hyryf23'),
       ('Yulia', 'qs3t55kkyryf23'),
       ('Mark', 'qs3t55kkyryf23');

create table developers_skills
(
    id           int primary key auto_increment,
    developer_id int not null,
    skill_id     int not null,
    foreign key (developer_id) references developers (id),
    foreign key (skill_id) references skills (id)
);

insert into developers_skills(developer_id, skill_id)
VALUES (1, 1),
       (2, 3),
       (2, 5),
       (3, 2),
       (4, 4),
       (5, 6),
       (6, 3),
       (6, 6),
       (7, 1),
       (8, 2);
create table profile
(
    id        int primary key auto_increment,
    firstName varchar(30) not null,
    lastName  varchar(30) not null,
    age       int         not null,
    user_id   int         not null unique,
    foreign key (user_id) references developers (id)
);
insert into profile(firstName, lastName, age, user_id)
VALUES ('Maks', 'Skam', 22, 1),
       ('Kolya', 'Topolya', 44, 2),
       ('Oksana', 'Blum', 52, 3),
       ('Denys', 'Barbarys', 30, 4),
       ('Kokos', 'Kokosiv', 19, 5),
       ('Bayraktar777', 'Bayraktar', 28, 6),
       ('Sony', 'Panasony', 33, 7);

select p.firstName, s.skill,COUNT(*) count_age
from developers d
         join developers_skills ds on d.id = ds.developer_id
         join profile p on d.id = p.user_id
         join skills s on s.id = ds.skill_id
where s.skill = 'PYTHON'
group by p.firstName, s.skill
having COUNT(age)
order by count_age;

