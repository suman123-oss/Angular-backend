const User= require('../models/users');

exports.getUsers= async(req, res)=>{
    try{

        const result = await User.find({})

        if(result){
            res.status(200).json({result})
        }else{
            res.status(400).json({msg: "Records not found"})
        }

    }catch(e){
        console.log(e);
        res.status(500).json({msg: "internal server error"})
    }
}


exports.postUsers= async(req, res)=>{
    console.log(req.body);        
    try{
        const {firstName, lastName, age, email, gender, contact, skill}=req.body;
        const formUser= new User({
            firstName,
            lastName,
            age,
            email,
            gender,
            contact,
            skill
        })

        await formUser.save();
        res.status(201).json({msg:"new user created successfully"})

    }catch(e){
        console.log(e);
        res.status(500).json({msg: "internal server error"})
    }
}


exports.updateUsers= async(req, res)=>{
    // console.log(req.body);        
    try{
        const {id, firstName, lastName, age, email, gender, contact, skill}=req.body;
        const user= await User.findByIdAndUpdate({_id:id},{
            $set:{
                skill:skill,
                contact:contact,
                age:age,
                email:email,
                firstName:firstName,
                lastName:lastName,
                gender:gender
            }
        },{new:true})
        
        res.status(201).json({msg:"User updated sucessfully!", user})

    }catch(e){
        console.log(e);
        res.status(500).json({msg: "internal server error"})
    }
}
exports.deleteUser= async(req, res)=>{
    // console.log(req.body);        
    try{
        const {id}=req.params;
        const result= await User.findByIdAndDelete({_id:id})
        
        res.status(201).json({msg:"User Deleted sucessfully!", result})

    }catch(e){
        console.log(e);
        res.status(500).json({msg: "internal server error"})
    }
}

exports.getUserById= async(req,res)=>{
    try{
        const {id}=req.params;
        const result= await User.findOne({_id:id})
        
        res.status(201).json({result})

    }catch(e){
        console.log(e);
        res.status(500).json({msg: "internal server error"})
    } 
}
