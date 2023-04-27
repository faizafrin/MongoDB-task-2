// Data for users
db.createCollection("users")

db.users.insertMany([
   {
    "userid":1,
    "name":"faiza",
    "email":"faiza@gmail.com"
   },
   {
    "userid":2,
    "name":"Andrew",
    "email":"andrew@gmail.com"
   },
   {
    "userid":3,
    "name":"manisha",
    "email":"manisha@yahoo.com"
   },
   {
    "userid":4,
    "name":"ahamad",
    "email":"ahamad@outlook.com"
   },
   {
    "userid":5,
    "name":"dhanish",
    "email":"dhanish@yahoo.com"
   }


])


//Data for codekata details

db.createCollection("codekata");

db.codekata.insertMany([
    {
        userid:1,
        problems:320
    },
     {
        userid:2,
        problems:560
    },
     {
        userid:3,
        problems:167
    },
     {
        userid:4,
        problems:100
    },
     {
        userid:5,
        problems:690
    }
    ])  


    //Data for topics


    db.createCollection("topics");

db.topics.insertMany([
    {   
        topicid:1,
        topic:"HTML",
        topic_date:new Date("7-oct-2022")
    },
     {
         topicid:2,
        topic:"CSS",
        topic_date:new Date("10-oct-2022")
    },
     {
         topicid:3,
        topic:"JavaScript",
        topic_date:new Date("15-oct-2022")
    },
     {
         topicid:4,
        topic:"React Js",
        topic_date:new Date("16-oct-2022")
    },
     {
         topicid:5,
        topic:"MongoDB",
        topic_date:new Date("27-oct-2022")
    }
    ])


   //Data for tasks

    db.createCollection("tasks");

    db.tasks.insertMany([
    {
        taskid:1,
        topicid:1,
        userid:1,
        task:"HTML task",
        due_date:new Date("7-oct-2022"),
        submitted:true
    },
    {
        taskid:2,
        topicid:2,
        userid:2,
        task:"CSS task",
        due_date:new Date("10-oct-2022"),
        submitted:true
    },
     {
        taskid:3,
        topicid:3,
        userid:3,
        task:"JavaScript task",
        due_date:new Date("15-oct-2022"),
        submitted:false
    },
      {
        taskid:4,
        topicid:4,
        userid:4,
        task:"React Js task",
        due_date:new Date("16-oct-2022"),
        submitted:true
    },
     {
        taskid:5,
        topicid:5,
        userid:5,
        task:"MongoBD task",
        due_date:new Date("27-oct-2022"),
        submitted:false
    }
    ])

    
   //Data for attendance

      db.createCollection("attendance");

      db.attendance.insertMany([
    {
        userid:1,
        topicid:2,
        attended:true
    },
     {
        userid:2,
        topicid:1,
        attended:false
    },
     {
        userid:3,
        topicid:5,
        attended:false
    },
    {
        userid:4,
        topicid:3,
        attended:true
    },
    {
        userid:5,
        topicid:4,
        attended:false
    }
    
    ])
    
    
 // Database for mentors

      db.createCollection("mentors");

    db.mentors.insertMany([
    {
        mentorid:1,
        mentorname:"Sathish",
        mentor_email:"sathish@yahoo.com",
        mentee_count: 20
    },
      {
        mentorid:2,
        mentorname:"Natraj",
        mentor_email:"natraj@gmail.com",
        mentee_count:15
    },
      {
        mentorid:3,
        mentorname:"Sai Mohan",
        mentor_email:"sai@yahoo.com",
        mentee_count:100
    },
      {
        mentorid:4,
        mentorname:"sangeetha",
        mentor_email:"sangeetha@gmail.com",
        mentee_count:18
    },
      {
        mentorid:5,
        mentorname:"sanjay",
        mentor_email:"sanjay@outlook.com",
        mentee_count:25
    }
    ])

   
  //Database for companydrives

      db.createCollection("companydrives");

      db.companydrives.insertMany([
    {
        userid:1,
        drive_date:new Date("8-oct-2022"),
        company:"V-Dart"
    },
     {
        userid:1,
        drive_date:new Date("12-oct-2022"),
        company:"IBM"
    },
     {
        userid:2,
        drive_date:new Date("20-oct-2022"),
        company:"Amazon"
    },
     {
        userid:3,
        drive_date:new Date("01-Nov-2022"),
        company:"Zoho"
    },
     {
        userid:4,
        drive_date:new Date("07-Nov-2022"),
        company:"V-Dart"
    },
    {
       userid:5,
        drive_date:new Date("15-Nov-2022"),
        company:"Infosys"
    }
    ])
    