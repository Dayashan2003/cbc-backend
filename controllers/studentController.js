import Student from "../models/student.js"

export function getStudents(req,res){
        Student.find().then(
            (students)=>{
                res.json(students)
            }
        ).catch(
            ()=>{
                res.json(
                    {
                    message : "Failed to fetch students"
                    }
            )
            }
        )
        console.log("This is a get request")
    }

export function saveStudents(req ,res){
        
        if(req.user == null){
            res.status(403).json({
                message : "Please login to create a student"
            })
            return
        }
        if(req.user.role != "admin"){
            res.status(403).json({
                message : "Please login as an admin to create a student"
            })
            return
        }

        console.log(req.body)

        const student = new Student(
            {
               name : req.body.name,
               age : req.body.age,
               email : req.body.email
            }
        )
        student.save().then(()=>{
           res.json(
            {
                message : "Student saved sccessfully"
            }
           )
        }).catch(
            ()=>{
                console.log("Failed to save student")
            }
        )
        
        
    }