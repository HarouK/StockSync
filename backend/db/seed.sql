USE ims_db;

INSERT INTO users (username, email, password)
VALUES
('admin', 'admin@stocksync.com', 'admin123');

INSERT INTO products (name, category, quantity, price, reorder_level)
VALUES
('Wireless Mouse', 'Electronics', 45, 599.99, 10),
('Keyboard', 'Electronics', 30, 899.99, 10),
('Notebook', 'School Supplies', 100, 49.99, 20),
('Coffee Beans', 'Food', 15, 399.99, 5);

INSERT INTO transactions (product_id, action_type, quantity)
VALUES
(1, 'RESTOCK', 45),
(2, 'RESTOCK', 30),
(3, 'RESTOCK', 100),
(4, 'RESTOCK', 15);