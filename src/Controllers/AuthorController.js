const AuthorModel = require("../Models/AuthorModel")
const jwt = require('jsonwebtoken')

//------------- ISVALID FUNCTION
const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}
//---------------------ISVALIDREQUESTBODY FUNCTION
const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}
//------------------ISVALIDOBJECTID FUNCTION
const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}


const createAuthor = async function (req, res) {
    try {
        const requestBody = req.body;
        if (!isValidRequestBody(requestBody)) {
            res.status(400).send({ status: false, message: 'Please provide details for create auothor' })
            return
        }
        const{firstname, lastname,title,email,password}=requestBody
        if (!isValid(firstname)) {
            res.status(400).send({ status: false, message: 'Please provide First Name' })
            return
        }
        if (!isValid(lastname)) {
            res.status(400).send({ status: false, message: 'Please provide Last Name' })
            return
        }
        if (!isValid(title)) {
            res.status(400).send({ status: false, message: 'Please provide Title' })
            return
        }
        if (!isValid(email)) {
            res.status(400).send({ status: false, message: 'Please provide Email-id' })
            return
        }
        const isemail = await AuthorModel.findOne({email})
        if (isemail){
            res.status(400).send({ status: false, message: 'email already used' })
            return
        }
        if (!isValid(password)) {
            res.status(400).send({ status: false, message: 'Please provide Password' })
            return
        }
        let author = req.body
        let authorCreated = await AuthorModel.create(author)
        res.status(201).send({ data: authorCreated ,msg:"Author created successfully"})
    }
    catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}



const loginAuthor = async function (req, res) {
    try {
        const requestBody = req.body;
        if (!isValidRequestBody(requestBody)) {
            res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide login details' })
            return
        }

        // EXTRACT PARAMS
        const { email, password } = requestBody;

        // VALIDATION STARTS
        if (!isValid(email)) {
            res.status(400).send({ status: false, message: `Email is required` })
            return
        }
    
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim()))) {
            res.status(400).send({ status: false, message: `Email should be a valid email address` })
            return
        }
        if (!isValid(password.trim())) {
            res.status(400).send({ status: false, message: `Password is required` })
            return
        }
       
        // VALIDATION ENDS
        // FIND AUTHOR DETAIL
        const author = await AuthorModel.findOne({ email, password });
        console.log(author)

        if (!author) {
            res.status(401).send({ status: false, message: `Invalid login credentials` });
            return
        }
        // GENERATE JWT TOKEN
        const token = await jwt.sign({
            authorId: author._id,
        }, 'someverysecuredprivatekey')

        res.header('x-api-key', token);
        res.status(200).send({ status: true, message: `Author login successfull`, data: { token } });
    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}

module.exports = { createAuthor, loginAuthor }


