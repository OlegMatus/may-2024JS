use mysql2024;

-- # 1.Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
select *
from client
where length(FirstName) < 6;
-- # 2.Вибрати львівські відділення банку.
select *
from department
where DepartmentCity = 'lviv';
-- # 3.Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
select *
from client
where Education = 'high'
order by LastName;
-- # 4.Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
select *
from application
order by idApplication desc
limit 5;
-- # 5.Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
select *
from client
where LastName like '%iv'
   or LastName like '%iva';
-- # 6.Вивести клієнтів банку, які обслуговуються київськими відділеннями.
select *
from client
         join department d on d.idDepartment = client.Department_idDepartment
where d.DepartmentCity = 'kyiv';
-- # 7.Знайти унікальні імена клієнтів.
select distinct FirstName
from client;
-- # 8.Вивести дані про клієнтів, які мають кредит більше ніж на 5000 гривень.
select *
from application
where Sum > 5000;
-- # 9.Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
select COUNT(*) as total_clients, SUM(d.DepartmentCity = 'lviv') as lviv_clients
from client
         join department d on d.idDepartment = client.Department_idDepartment;
-- # 10.Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
select max(a.Sum), c.LastName
from application a
         join client c on c.idClient = a.Client_idClient
group by c.LastName;
-- # 11. Визначити кількість заявок на крдеит для кожного клієнта.
select count(*), c.LastName
from application
         join client c on c.idClient = application.Client_idClient
group by c.LastName;
-- # 12. Визначити найбільший та найменший кредити.
select c.FirstName, a.Sum
from application a
         join client c on c.idClient = a.Client_idClient
where a.Sum = (select min(Sum) from application);
select c.FirstName, a.Sum
from application a
         join client c on c.idClient = a.Client_idClient
where a.Sum = (select max(Sum) from application);
-- # 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
select c.LastName, c.Education, COUNT(a.idApplication) as credit_Count
from application a
         join client c on c.idClient = a.Client_idClient
where c.Education = 'high'
group by c.LastName;
-- # 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
select c.*, AVG(a.Sum) avg_SumCredit
from client c
         join application a on c.idClient = a.Client_idClient
group by c.idClient, c.LastName
order by avg_SumCredit desc
limit 1;
-- # 15. Вивести відділення, яке видало в кредити найбільше грошей
select DepartmentCity, SUM(a.Sum) total_SumCredit
from department d
         join client c on d.idDepartment = c.Department_idDepartment
         join application a on c.idClient = a.Client_idClient
group by d.DepartmentCity
order by total_SumCredit desc
limit 1;
-- # 16. Вивести відділення, яке видало найбільший кредит.
select DepartmentCity, MAX(a.Sum) max_SumCredit
from department d
         join client c on d.idDepartment = c.Department_idDepartment
         join application a on c.idClient = a.Client_idClient
group by d.DepartmentCity
order by max_SumCredit desc
limit 1;
-- # 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
update application a
    join client c on c.idClient = a.Client_idClient
set a.Sum=6000
where c.Education = 'high';
-- # 18. Усіх клієнтів київських відділень пересилити до Києва.
update client c
    join department d on d.idDepartment = c.Department_idDepartment
set c.City='kyiv'
where d.DepartmentCity = 'kyiv';
-- # 19. Видалити усі кредити, які є повернені.
delete
from application
where CreditState = 'returned';
-- # 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
delete a
from application a
         join client c on c.idClient = a.Client_idClient
where substring(c.LastName, 2, 1) in ('a', 'o', 'u', 'e', 'y', 'i');
# where LastName like '_a%'
#    or LastName like '_o%'
#    or LastName like '_u%'
#    or LastName like '_e%'
#    or LastName like '_y%'
#    or LastName like '_i%';
-- # 21.Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
select d.idDepartment, d.DepartmentCity, SUM(a.Sum) total_Sum
from department d
         join client c on d.idDepartment = c.Department_idDepartment
         join application a on c.idClient = a.Client_idClient
where d.DepartmentCity = 'lviv'
group by d.idDepartment, d.DepartmentCity
having SUM(a.Sum) > 5000;
-- # 22.Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
select c.idClient, c.LastName, SUM(a.Sum) returnCredit_Sum
from client c
         join application a on c.idClient = a.Client_idClient
where a.CreditState = 'returned'
group by c.idClient, c.LastName
having SUM(a.Sum) > 5000;
-- # 23.Знайти максимальний неповернений кредит.
select c.FirstName, c.LastName, a.Sum
from application a
         join client c on c.idClient = a.Client_idClient
where a.CreditState = 'not returned'
  and a.Sum = (select MAX(a2.Sum)
               from application a2
               where a2.CreditState = 'not returned');
SELECT c.FirstName, c.LastName, a.Sum
FROM application a
         JOIN client c ON c.idClient = a.Client_idClient
WHERE a.CreditState = 'not returned'
ORDER BY a.Sum DESC
LIMIT 1;
-- # 24.Знайти клієнта, сума кредиту якого найменша
select c.FirstName, c.LastName, a.Sum
from client c
         join application a on c.idClient = a.Client_idClient
where a.Sum = (select MIN(a.Sum) from application a);
-- # 25.Знайти кредити, сума яких більша за середнє значення усіх кредитів
select Sum
from application
where Sum > (select AVG(Sum) from application);
-- # 26. Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів
# select c.FirstName, c.LastName
# from client c
# where c.City = (select COUNT(*) count_Credits
#                 from application a
#                          join client c on c.idClient = a.Client_idClient
#                 group by c.FirstName, c.LastName
#                 order by count_Credits desc
#                 limit 1);

select c.FirstName, c.LastName, c.City
from client c
where c.City = (select c1.City
                from client c1
                         join application a on c1.idClient = a.Client_idClient
                group by c1.idClient, c1.City
                order by COUNT(*) desc
                limit 1);
-- # 27. Місто клієнта з найбільшою кількістю кредитів
select c.City
from client c
where c.City = (select c1.City
                from client c1
                         join application a on c1.idClient = a.Client_idClient
                group by c1.idClient, c1.City
                order by COUNT(*) desc
                limit 1);