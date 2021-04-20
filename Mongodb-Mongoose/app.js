const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/classDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(()=>{console.log("Connection Successfull..!")})
  .catch((err)=>{console.log(err)})

//* After connecting mongo now we have to define a Schema for our database;
//* A mongoose schema defines the structure of the document
//* default values, validators, etc..
//* Creating schema instance
const classSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true, // validators
        unique:true,
        trim:true
    },
    roll:Number,
    /* create your own Custom validation ----> we can use validator for num{
        type:Number,
        validate(valur)
        {
            if(value<0)
            throw new Error("Can't be negative")
        }

    }*/
    batch:{
        type:String,
        enum:["CSE","ECE","MTECH"]//ensures that the field must be filled with these options only otherwise it throws error
    },
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

//* Now we have to create a Model-> It is a wrapper on the mongoose schema.
//* In simple words we are creating a collection using model

const Classdata = new mongoose.model("Classdata",classSchema);

//* create a document or insert
const createDocument = async ()=>{
    try{
        //* inserting one document in collection
    // const studentData = new Classdata({
    //     name:"Ritik",
    //     roll:145,
    //     batch:"CSE",
    //     active:true
    // })
    // const result = await studentData.save();
    //* for multiple entry
    const user1= new Classdata({
        name:"Aryan",
        roll:185,
        batch:"CSE",
        active:true
    })
    const user2= new Classdata({
        name:"Suraj",
        roll:186,
        batch:"CSE",
        active:true
    })
    const user3= new Classdata({
        name:"Sneha",
        roll:178,
        batch:"CSE",
        active:true
    });
    const result = await Classdata.insertMany([user1,user2,user3]);
    console.log(result);
        }
    catch(err)
    {
        console.log(err);
    }
}
//createDocument();

// Read operation
const getDocument = async ()=>{
    try{
        const result = await Classdata.find({$or:[{name:"Ritik"},{name:"Suraj"}]}).select({name:1,_id:0})
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
} 
getDocument();

//* Comparison
//* Example : Classdata.find({roll:{$gte:50}})
//* find the roll no which are greater than equal to 50.
//* Example : Classdata.find({roll:{$nin:[180,54]})
//* give list of roll no except 180,54;
//* below are more comparison operators :-
// For comparison of different BSON type values, see the specified BSON comparison order.
// $eq
// Matches values that are equal to a specified value.
// $gt
// Matches values that are greater than a specified value.
// $gte
// Matches values that are greater than or equal to a specified value.
// $in
// Matches any of the values specified in an array.
// $lt
// Matches values that are less than a specified value.
// $lte
// Matches values that are less than or equal to a specified value.
// $ne
// Matches all values that are not equal to a specified value.
// $nin
// Matches none of the values specified in an array.

//* Logical operators
// $and
// Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
//! $not this operator need some practice syntax is diff for this : ({field:{$not : {<operator-expression>}}})
// Inverts the effect of a query expression and returns documents that do not match the query expression.
// $nor
// Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
// $or
// Joins query clauses with a logical OR returns all documents that match the conditions of either clause.
//* example -: collection_name.find({$and : [{ctype:"Back End"},{author:"Ritik Raj"}]}); array of query