# <img src="https://user-images.githubusercontent.com/57604289/155508952-574739e0-fb0d-4d9b-b5d7-2b1c8c37ef4b.png" width="50px" height="50px"> Daily Taks , [Show me Demo, please](https://daily-task-birukendris.netlify.app/)


### ✨ Quick link

- [About Daily Task application](#-about-daily-task)
- [Folder Structure ](#-folder-structure-and-layout)
- [Design](#-design)
- [Technology used](#-technology-used)
- [Running Instruction](#-running-instruction)
- [Demo](#-demo)

<!-- - [Vision](#vision)
- [Version](#version) -->

## ✨ About Daily Task

Daily Task is a full-stack web application that allows users to manage and organize their respective duties and steps. This application helps to stay focused and productive.<br>
Backend can be found [here](https://github.com/Biruk-hub/DailyTask-Backend)

### ✨ Application Features <br>

- [x] Create task
- [x] Read task
- [x] Delete task
- [x] Edit Task
- [x] Make task complete 
- [x] Login user
- [x] Register user
- [x] Store task on database
- [x] Retrive Task from database
- [x] Task CRUD

**Nice to have**
- [ ] Change Firstname / Username / Password functionality.
- [ ] Store profile picture functionality.<br>


## ✨ Folder Structure and layout
```
.
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── og_logo.png
│   └── robots.txt
├── src
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── custom_button
│   │   │   └── index.js
│   │   ├── custom_icon
│   │   │   └── index.js
│   │   ├── error
│   │   │   └── index.js
│   │   ├── header
│   │   │   └── index.js
│   │   ├── heading
│   │   │   └── index.js
│   │   ├── input
│   │   │   └── index.js
│   │   ├── loading
│   │   │   └── index.js
│   │   ├── page_not_found
│   │   │   └── index.js
│   │   ├── page_wrapper
│   │   │   └── index.js
│   │   ├── task
│   │   │   ├── task.js
│   │   │   └── taskController.js 
│   │   ├── task_container
│   │   │   └── index.js
│   │   ├── text
│   │   │   └── index.js
│   │   └── text_area
│   │       └── index.js
│   ├── pages
│   │   ├── add_task_page
│   │   │   └── index.js
│   │   ├── detail
│   │   │   └── index.js
│   │   ├── edit
│   │   │   └── index.js
│   │   ├── home
│   │   │   └── index.js
│   │   ├── login
│   │   │   └── index.js
│   │   ├── not_found
│   │   │   └── index.js
│   │   └── register
│   │       └── index.js
│   ├── provider
│   │   ├── message
│   │   │   └── index.js
│   │   ├── task
│   │   │   └── index.js
│   │   ├── user
│   │   │   └── index.js
│   │   └── index.js
│   ├── router
│   │   └── index.js
│   ├── utils
│   │   └── useFetch.js
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   └── index.js
└── UI Design
    ├──	daily task logo.png
    └── sample ui design.xd

```

## ✨ Design

### ✨ Concept UI Design

<p float="left">
<img src="https://user-images.githubusercontent.com/57604289/155513445-e3597626-8732-4ebe-81f2-67da831821fb.png" width="300px" height="200px">
<img src="https://user-images.githubusercontent.com/57604289/155513582-c91515ac-efae-4588-9a6d-8594d5f4b1cc.png" width="300px" height="200px">
</p>
<br>
<p float="left">
<img src="https://user-images.githubusercontent.com/57604289/155513909-bea0a943-34de-4047-abc0-2147a90fedb0.png" width="300px" height="200px">
<img src="https://user-images.githubusercontent.com/57604289/155514048-571b6cdb-c096-4883-9100-477f0dc4bebb.png" width="300px" height="200px">
</p>
<br>

### ✨ Final Result

#### ✨ Mobile View

<p float="left">
<img src="https://user-images.githubusercontent.com/57604289/157234662-b13a8360-d26d-4d1c-815d-00cfa983e073.png" width="230px" height="300px">
<img src="https://user-images.githubusercontent.com/57604289/157234938-a0b58b7d-b3a2-4ca9-b424-bd257ced785d.png" width="230px" height="300px">
<img src="https://user-images.githubusercontent.com/57604289/157235201-80920ea6-60c0-4713-a948-4fd4a3ff746d.png" width="230px" height="300px">
<img src="https://user-images.githubusercontent.com/57604289/157235084-44d6ff4f-f647-4211-a82b-b60dc0bab3f5.png" width="230px" height="300px">
</p>
<br>
<p float="left">
<img src="https://user-images.githubusercontent.com/57604289/157235682-3d5e0ebf-f1db-45b8-9041-a60af86b8c3d.png" width="230px" height="300px">
<img src="https://user-images.githubusercontent.com/57604289/157235902-4f641415-414d-4d7c-8d5f-b04575c3a691.png" width="230px" height="300px">
<img src="https://user-images.githubusercontent.com/57604289/157236020-beccba28-d30c-4c20-83c6-e6bf64272b01.png" width="230px" height="300px">
<img src="https://user-images.githubusercontent.com/57604289/157236172-005a8c46-5f30-4267-a55a-61220023738c.png" width="230px" height="300px">
</p>

#### ✨ Desktop View

<p float="left">
<img src="https://user-images.githubusercontent.com/57604289/157236696-bfab541c-0342-4b7d-ad01-54957bede0b1.png" width="450px" height="250px">
<img src="https://user-images.githubusercontent.com/57604289/157237360-1415bc69-6acf-46e1-a19b-072a5a45e738.png" width="450px" height="250px">
<img src="https://user-images.githubusercontent.com/57604289/157237564-e3a7612f-a2ba-4611-ad88-b4c4573a8f40.png" width="450px" height="250px">
<img src="https://user-images.githubusercontent.com/57604289/157237710-dc275fbb-e7ff-4ec2-a2a3-f5f5b4eff716.png" width="450px" height="250px">

</p>
<br>
<p float="left">
 <img src="https://user-images.githubusercontent.com/57604289/157237910-e23c06a4-ff92-4ca5-b2c5-fd26d48a61fe.png" width="450px" height="250px">
 <img src="https://user-images.githubusercontent.com/57604289/157238189-fcdb9b29-83b8-4bb6-8bbe-d9985b950902.png" width="450px" height="250px">
</p>

<br>

## ✨ Technology Used

- HTML
- CSS & Tailwind CSS
- JS & React JS

## ✨ Running Instruction

- The first thing first is to clone this repo on your repo
- Then run ```npm install``` on your terminal to install all the dependency 
- Finally run the application using ```npm start``` on your terminal, "that's it 😉"

## ✨ Demo
you want to see live demo click [here](https://daily-task-birukendris.netlify.app/)

### Note
⭐ if you like the project, please leave a star ⭐
