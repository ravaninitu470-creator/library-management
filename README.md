# library-management

This is a library management API Backend for the management of users and the books

# Routes and the Endpoints

## /users
GET:Get all the list of users in the system
POST:create/Register a new users

## /users/{id}
GET:Get a user by their ID
PUT:Updating a user by their ID
DELETE:Deleting a user by their ID (check if the user still has an issued book)
&& (is there any fine/panelty to be collected)

## /users/subscription-detail{id}
GET:Get a user subscription details by their ID
 >> Date of subscription details by their ID
 >> Valid till ?
 >> Fine if any ?

 ## /books
 GET:Get all the books inthe system
 POST:Add a new book to the system

 ## /books{id}
 GET:Get a book by their ID
 PUT:Update a book by its ID
 DELETE:Delete a book by its ID

 ## /books/issued
 GET:Get all the issued books

 ## /books/issued/withFine
 GET:Get all issued books with their fine amount


 ### subscription types
  >> Basic(3 months)
  >> standard(6 months)
  >> Premium(12 months)

  >> if a user missed the renewal date, then user should be collected with  $100
  >>if a user missed his subscription,then user is expected to pay $100
  >>if a user missed both renewal & subscription,then the collected amount should be $200

## commands
npm init
npm i express
npm i nodemon --save-dev

npm run dev