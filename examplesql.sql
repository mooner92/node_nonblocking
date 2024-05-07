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
SELECT * username FROM users While username = 'qwer1234!!';

INSERT INTO shows(showname,show_date,show_price,show_info,show_image_path) VALUES ()