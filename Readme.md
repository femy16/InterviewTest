# Client-Sales Details

This project is to display display their cost & sell rates of client in a grid to determine how much money they have earned. They have provided us with two files. One file is a CSV file
(‘rates_lookup.csv’) containing the Product Code, Description, Items per Unit, Unit Cost Price and Unit Sell Price. The second file is in JSON format (‘itemlist.json’) and contains
objects with a Product Code, Job Number, Description and Quantity.

### UX

The goal was to display all the sales details in a Table, in which quantity can be edited. We could add a row to the table and also should be able to remove a row of the table. 
#### Structure and Design

All the design process was developed paying attention to the User Experience. Making sure that the users' experience is as positive as posible, easy to follow and well structured.

I have conveted the CSV file data to a table (prod_table) to display all the Products and its prices. which will be displayed when Products link is clicked. I have converted Json file and and also did processing the data from csv file to create table (sales_table) which displays all the sales report with 
product details and its prices. Total Cost Price, Total Sell Price are processed from csv file. the sales_table is able to add new row and also delete new row.
the Quantity field is editable in each row. I have applied an example logo for the client.
The web page responsive in different viewports (desktop, mobile and tablet).

### Technologies
+ JavaScript
+ jQuery
+ HTML
+ CSS
+ Bootstrap (3.3.7)

### Features

+ The navbar stays collapsed in the mobile screen size for responsiveness design.
+ Images displays according to screen size.
+ Able to add and delete rows of the sales_table.
+ Quantity field is editable.

#### Features Left to Implement

+ When Quantity field is edited Total Cost Price and Total Sell Price should be calculated accordingly.


### Testing

+ Responsive : The website has been tested in different viewports and it is responsive.
+ Links : All the links included in the website have been tested and they are all working.
+ Hover : Hover effects on icons and links  have been tested and they al change color or have a hover effect working as expected.

### Credits


##### Media

All images have been obtained through different searches through [Google](www.google.com).

