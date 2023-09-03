# Blog Post Application

## Bootstrap Application

To run this application kindly install all dependencies by running Yarn install

## Start Application

There are two ways of starting this application

* Yarn run dev : This is for running application on development
* Yarn start : This is for starting the application without using nodemon

## Application Endpoints and Payload

#### Note

    All the request methods on this application was made a Post request this was done for security reasons, tho not necessary for the application but just an addition.

* /create-blog : This endpoint is for creating a blog post and the payload expected to be passed for this endpoint are :
  {
"title": "",
"author": "",
"body": "",
"comment": ""
}
* /get-blogs : This endpoint is a paginated endpoint for getting all blog post on the system and the expected payload to be passed are :
  {
  "page":2,
  "limit":3
}.

* /get-blog : This endpoint is used for get a blog by its id, and the expected payload to be passed is : {"id":""}
  
* /update-blog : This endpoint is used to update an exsiting blog and the payload to be passed are :
   {
    "title": "How not to cook food",
    "author": "John",
    "body": "This is a book to read for not sleeping",
    "comment": "this is noce sha",
    "id": "3e2ad120-765a-4de2-b8e4-0f5b2a0dd9e3",
  }

* /delete-blog: This endpoint is used to deleted a blog post and the type of delete being carried out is a hard delete where the blog post is deleted from the database completly. And the payload to be passed is :  {"id":""}
  
* /search-blog : This endpoint is used to search blogs on the system and the payload to be passed is : {"query": ""}
