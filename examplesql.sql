CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    useremail VARCHAR(255) NOT NULL,
    passwd VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ordernum VARCHAR(255) NOT NULL,
    ordered_at DATETIME DEFAULT CURRENT_TIMESTAMP,  -- DATE를 DATETIME으로 변경
    showname VARCHAR(255) NOT NULL,
    ordered_username VARCHAR(255) NOT NULL,
    ordered_useremail VARCHAR(255) NOT NULL,  -- 'NUT NULL'을 'NOT NULL'로 수정
    show_date DATE NOT NULL,
    ordered_quantity INT,
    show_price INT,
    total_ordered_price INT
);

CREATE TABLE shows (
    id INT AUTO_INCREMENT PRIMARY KEY,
    showname VARCHAR(255) NOT NULL,
    show_date DATE NOT NULL,
    show_price INT,
    show_info VARCHAR(511) NOT NULL,
    show_image_path VARCHAR(255)
);

INSERT INTO users (username,useremail,passwd,created_at) VALUES (
    '박빙구','bing999@hanmail.net','qwer1234!!','2017-02-13 09:36:25');
SELECT username FROM users WHERE passwd = 'qwer1234!!';


INSERT INTO shows(showname,show_date,show_price,show_info,show_image_path) VALUES (
    '위대한쇼맨','2017-03-21',8000,'마이클베이 감독의 유쾌상쾌통쾌 액션. . .','./src/images/show_images/the_greatest_showman_poster.jpeg');
SELECT show_price FROM shows WHERE showname = '위대한쇼맨';


INSERT INTO orders(ordernum,ordered_at,showname,ordered_username,ordered_useremail,show_date,ordered_quantity,show_price,total_ordered_price) VALUES (
    217,'2017-03-17','위대한쇼맨','박빙구','bing999@hanmail.net','2017-03-21',186,8000,795000);
SELECT * FROM orders WHERE ordernum = 217;

-- DB실습 내용 --
