SHOW DATABASES;
USE kdt;
SHOW TABLES;

-- #######################################
-- PK(primary key) - FK(foreign key) 연결

CREATE TABLE customer (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);

INSERT INTO customer (id, name, birthday) VALUE ('aaa', '김민수', '1999-03-17');
INSERT INTO customer (id, name, birthday) VALUE ('bbb', '윤정희', '1986-05-12');
INSERT INTO customer (id, name, birthday) VALUE ('ccc', '박재범', '1997-11-23');


CREATE TABLE orderlist (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY(customer_id) REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO orderlist (id, customer_id, product_name, quantity) VALUE (1, 'aaa', '맥북m1', '1');
INSERT INTO orderlist (id, customer_id, product_name, quantity) VALUE (2, 'bbb', '빅파이', '31');
INSERT INTO orderlist (id, customer_id, product_name, quantity) VALUE (3, 'ccc', '키보드', '3');
INSERT INTO orderlist (id, customer_id, product_name, quantity) VALUE (4, 'bbb', '초코파이', '5');
INSERT INTO orderlist (id, customer_id, product_name, quantity) VALUE (5, 'ccc', '귀여운 텀블러', '1');

-- #######################################
-- [join 조인]
-- 두 테이블을 묶어서 하나의 테이블을 만들기!

-- one to many (일대다 관계)
-- a 테이블에는 하나의 값, b 테이블에는 여러개의 값
-- 한명의 유저가 여러개의 개인 게시물을 게시 가능한 관계와 유사

-- SELECT <열 목록>
-- FROM <기준 테이블>
--     INNER JOIN<참조할 테이블>
--     ON <조인 조건>
-- [WHERE 검색조건]

SELECT * 
FROM customer
    INNER JOIN orderlist
    ON customer.id = orderlist.customer_id;


SELECT * 
FROM customer
    INNER JOIN orderlist
    ON customer.id = orderlist.customer_id
WHERE quantity >= 5;

SELECT customer.id, customer.name, orderlist.product_name, orderlist.quantity 
FROM customer
    INNER JOIN orderlist
    ON customer.id = orderlist.customer_id;

SELECT orderlist.id AS order_id, customer.id as user_id, orderlist.product_name, orderlist.quantity
FROM customer
    INNER JOIN orderlist
    ON customer.id = orderlist.customer_id;

SELECT orderlist.id AS order_id, customer.id as user_id, orderlist.product_name, orderlist.quantity
FROM customer
    INNER JOIN orderlist
    ON customer.id = orderlist.customer_id
where orderlist.id = 3;