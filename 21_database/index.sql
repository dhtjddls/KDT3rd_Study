-- DDL
-- Data Definiton Language: 데이터베이스/테이블 정의

-- [데이터베이스 관련 명령어]
-- 1. 데이터베이스 생성 (+ 한글 인코딩)
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- 2. 데이터베이스 생성 확인 (목록 조회)
SHOW databases;

-- 3. 데이터베이스 사용 선언
USE kdt;

-- 4. 데이터베이스 삭제
DROP DATABASE kdt;


-- [테이블 관련 명령어]
-- 1. 테이블 생성
/*
CREATE TABLE 테이블명 (
    필드1 값형식,
    필드2 값형식
)
*/
-- 제약조건
-- NOT NULL: NULL 허용 x
-- AUTO_INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 기본키!
-- DEFAULT: 기본 값
-- UNIQUE: 중복 허용 x
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100) NOT NULL
);

-- 테이블 조회
DESC user;

-- 테이블 삭제
DROP TABLE user;
-- 레코드 초기화(삭제) -> 테이블, 컬럼은 남아있음
TRUNCATE TABLE user; 

-- 컬럼 추가 ADD
ALTER TABLE user ADD new_colunm VARCHAR(10);

-- 컬럼 수정 MODIFY
ALTER TABLE user MODIFY new_colunm INT;

-- 컬럼 삭제 DROP
ALTER TABLE user DROP COLUMN new_colunm;


-- ################################3########
-- DML
-- 데이터 조작어
-- 내부 데이터를 조작하기 위한 언어

DROP TABLE user;
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

-- [CREATE - INSERT]
-- 데이터 추가
INSERT INTO user (name, age, address) VALUE ('김민철', '20', '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUE ('이지수', '30', '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUE ('최솔이', '22', '대구광역시 동구');
INSERT INTO user (name, age, address) VALUE ('한소희', '25', '부산광역시 관악구');
INSERT INTO user (name, age, address) VALUE ('정세희', '19', '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUE ('이한이', '23', '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUE ('이지은', '32', '부산광역시 동구');
INSERT INTO user (name, age, address) VALUE ('윤세희', '37', '강원도 강릉시');
INSERT INTO user (name, age, address) VALUE ('박수진', '26', '충청남도 공주시');
INSERT INTO user (name, age, address) VALUE ('박찬희', '40', '강원도 속초시');
INSERT INTO user (name, age, address) VALUE ('권희수', '36', '서울특별시 영등포구');


-- [READ - SELECT]
SELECT * FROM user where age >= 25;
SELECT * FROM user where id = 7;
SELECT name FROM user where id = 7;
SELECT id, age FROM user where name = '이지은'

-- ORDER BY: 데이터 정렬
-- ASC : 오름차순
-- DESC : 내림차순
SELECT * FROM user ORDER BY age DESC;
SELECT * FROM user where id > 6 ORDER BY age ASC;


-- like: 패턴 조회
SELECT * FROM user where address like "서울%";
SELECT * FROM user where name like "__희";
SELECT * FROM user where name like "%희%";

--  limit 제한
SELECT * FROM user limit 3;
SELECT * FROM user where name like "%희%" limit 2;

-- BETWEEN a AND b 사이값 조회
SELECT * FROM user where age BETWEEN 25 AND 30;

-- IN 포함 관계 조회
SELECT * FROM user where age IN (21, 22, 23, 20);

-- IS NULL
-- IS NOT NULL
INSERT INTO user (name, age) VALUE ("천현승", 28);
SELECT * FROM user;

SELECT * FROM user where address IS NULL;
SELECT * FROM user where address IS NOT NULL;

-- 논리 연산자: AND, OR, NOT
SELECT * FROM user where address IS NOT NULL AND age < 25;
SELECT * FROM user where address IS NOT NULL OR age < 25;
SELECT * FROM user where name like "이%" AND age = 23;


-- [UPDATE - UPDATE]
-- 데이터 갱신(수정)
UPDATE user SET address = "서울특별시 강북구" where id = 1;
UPDATE user SET address = "제주특별자치도 제주시", name = "이지현" where id = 1;

-- 주의 UPDATE 시 WHERE 절 미사용시 모든 행의 데이터가 변경됨

-- [DELETE - INSERT]
-- 데이터 삭제

-- 주의 DELETE 시 WHERE 절 미사용시 모든 행의 데이터가 삭제됨

DELETE FROM user WHERE id = 11;
DELETE FROM user WHERE id > 8;


-- ##################################################
-- DCL
-- Data Control Language

-- GRANT: 특정 작업에 대한 수행 권한을 부여해주는 명령어
-- REVORKE: 권한을 회수, 박탈하는 명령어

