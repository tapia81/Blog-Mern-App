# Blog Journal

## Table of contents 📒

- [Description](#description)
- [Features](#feautres)
- [Dependencies](#denpendencies)
- [Installation](#installation)

## Description 📝

**Blog Journal** is a simple Full Stack **MERN** App using **CRUD**
operations. This app was created to allow a user to write
and keep track of their blog entries. They will be able to
create new entries, reread old entries, update any entry,
and delete entries. I created this so a person can keep personal
thoughts somewhere safe and not just accessible in a notebook
or even a doc application.

## Features 🕹️

- **Create Blog Entries**
- **Read Previous Blog Entries**
- **Update Blog Entries**
- **Delete Blog Entries**
- **Easliy Navigate Between Home, Blogs Entries, and Create Entry**

## Dependencies ⚙️

- [Axios](https://github.com/axios/axios)
- [Cors](https://www.npmjs.com/package/cors)
- [Express](https://expressjs.com/en/starter/installing.html)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## Installation 💿

**Step 1: Clone Blog Repo**

Using your terminal(Mac OS) cd into a directory you want to
clone the repo at. Copy the repo URL and run the following command
in the terminal

        git clone https://github.com/tapia81/Blog-Mern-App.git

**Step 2: Create A MongoDB Atlas Account**

If you haven't created a MongoDB account. Go to MongoDB.com
and sign up. After the initial set up, create an organization.
Click on your created organization and create a project. Click
on your created project and click on the connect button after sandbox.
Choose connect your application and copy your connection string.

**Step 3: Install Dependencies**

Using your terminal(Mac OS) install dependencies Axios, Cors,
Express, Mongoose, Morgan, and Nodemon(Optional for Testing)

To Install, cd into server & client and run the following command
at each directory.

    npm i

**Step 4: Connect to your Mongo DB database**

Using your code editor, open the cloned repo. Expand the server
folder, expand the db folder, and open the index.js file.
On line 3, replace the string "your address" with your MongoDB
connection string previously copied. In your connection string
replace **<password>** with the password created during the initial
set up of your project on MongoDB.

**Step 5: Run App**

Open two terminals(Mac OS), use one to cd into client and the
second one to cd into server.

Run the following code in the server terminal

    npm start

Run the following in the client terminal

    npm start

**Step 6: Happy Blogging**
