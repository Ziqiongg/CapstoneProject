insert into app_user (user_first_name, user_last_name, user_address, user_password, wallet) values ('Alex', 'Leaver Hernandez', 'Cambridge', '123', 1000);
insert into app_user (user_first_name, user_last_name, user_address, user_password, wallet) values ('Peace', 'Akib', 'London', '321', 1000);
insert into app_user (user_first_name, user_last_name, user_address, user_password, wallet) values ('Carol', 'Ziqiong', 'Bristol', '123', 1000);
insert into app_user (user_first_name, user_last_name, user_address, user_password, wallet) values ('Joseph', 'Sutherland', 'Copford', '123', 1000);
insert into app_user (user_first_name, user_last_name, user_address, user_password, wallet) values ('Michelle', 'Tambi', 'London', '123', 1000);


insert into product (name, category, price, stock) values ('Big Boi Hat', 'HATS', 99.99, 200);
insert into product (name, category, price, stock) values ('Little Boat', 'BOATS', 2590.56, 30);
insert into product (name, category, price, stock) values ('Bigger Boat', 'BOATS', 25900.56, 3);
insert into product (name, category, price, stock) values ('Thicc Oats', 'OATS', 5.99, 1000);
insert into product (name, category, price, stock) values ('Special Goat', 'GOATS', 79.33, 57);


insert into individual_purchase (quantity, purchased, product_id, app_user_id) values (5, True, 1, 1);
insert into individual_purchase (quantity, purchased, product_id, app_user_id) values (5, True, 1, 1);
insert into individual_purchase (quantity, purchased, product_id, app_user_id) values (5, False, 3, 2);
insert into individual_purchase (quantity, purchased, product_id, app_user_id) values (5, False, 2, 2);
insert into individual_purchase (quantity, purchased, product_id, app_user_id) values (5, True, 1, 2);



