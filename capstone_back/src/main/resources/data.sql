insert into users (user_first_name, user_last_name, user_address, user_password, wallet) values ('Alex', 'Leaver Hernandez', 'Cambridge', '123', 1000);
insert into users (user_first_name, user_last_name, user_address, user_password, wallet) values ('Peace', 'Akib', 'London', '321', 1000);
insert into users (user_first_name, user_last_name, user_address, user_password, wallet) values ('Carol', 'Ziqiong', 'Bristol', '123', 1000);
insert into users (user_first_name, user_last_name, user_address, user_password, wallet) values ('Joseph', 'Sutherland', 'Copford', '123', 1000);
insert into users (user_first_name, user_last_name, user_address, user_password, wallet) values ('Michelle', 'Tambi', 'London', '123', 1000);


insert into product (name, category, price, stock, picture_address, description) values ('Big Boi Hat', 'HATS', 99.99, 200, 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60','nice');
insert into product (name, category, price, stock, picture_address, description) values ('Little Boat', 'BOATS', 2590.56, 30, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60','nice');
insert into product (name, category, price, stock, picture_address, description) values ('Bigger Boat', 'BOATS', 25900.56, 3,'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60','nice');
insert into product (name, category, price, stock, picture_address, description) values ('Thicc Oats', 'OATS', 5.99, 1000,'https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60','nice');
insert into product (name, category, price, stock, picture_address, description) values ('Special Goat', 'GOATS', 79.33, 57,'https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60','nice');

insert into individual_purchase (quantity, purchased, product_id, users_id) values (5, True, 1, 1);
insert into individual_purchase (quantity, purchased, product_id, users_id) values (5, True, 1, 1);
insert into individual_purchase (quantity, purchased, product_id, users_id) values (5, False, 3, 2);
insert into individual_purchase (quantity, purchased, product_id, users_id) values (5, False, 2, 2);
insert into individual_purchase (quantity, purchased, product_id, users_id) values (5, True, 1, 2);



