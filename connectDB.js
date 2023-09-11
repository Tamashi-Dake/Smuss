// import mongoose from "mongoose";
// import * as mongoose from "mongoose";
const mongoose = require('mongoose')

async function connectMongo(){
    try {
        // dotenv dell hoạt động
        await mongoose.connect(process.env.MONGO_URI)
        console.log('CONNNECCTTTTEEED')
    } catch (error) {
        console.log('Error')
        console.log(error)
        
    }
}

module.exports = { connectMongo };


// const connectMongo = async () => {
//     try {
//       await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log('MongoDB connected');
//     } catch (error) {
//       console.error('Error connecting to MongoDB:', error.message);
//     }
//   };
  
//   export default connectMongo;

// async function connectMongo() {
//   try {
//       await mongoose.connect(process.env.MONGO_URI, {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//           useCreateIndex: true,
//       });
//       console.log('Connect successfully!!!');
//   } catch (error) {
//       console.log('Connect failure!!!');
//       console.log(error)
//   }
// }
// exports.connectMongo =  connectMongo ;

// // mongoose.set('debug', true)
// mongoose.set('useFindAndModify', true)

// // CONNECTION EVENTS
// // When successfully connected
// mongoose.connection.on('connected', function () {
//     console.log('Mongoose default connected ' + process.env.DB_MONGO)
// });

// // If the connection throws an error
// mongoose.connection.on('error', function (err) {
//     console.log('Mongoose default connection error: ' + err)
// });

// // When the connection is disconnected
// mongoose.connection.on('disconnected', function () {
//     console.log('Mongoose default connection disconnected')
// });

// // When the connection is open
// mongoose.connection.on('open', function () {
//     console.log('Mongoose default connection is open')
//     console.log('===================================')
// })


// /**
//  * hàm `myConnection` để file thực thi app.js hoặc bin/www thực thi connection
//  */
// module.exports.myConnection = () => {
//     console.log(`Mongoose connecting ${process.env.MONGO_URL}`)
//     /// connect mongodb
//     mongoose.connect(process.env.DB_MONGO, 
//         {
//             useNewUrlParser: true, 
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//             useNewUrlParser: true
//         }
//     )
// }

// const MONGODB_URI = 'mongodb://localhost:27017/testDB'; 

// if (!MONGODB_URI) {
//   throw new Error(
//     'Vui lòng đặt biến MONGODB_URI trong tệp .env.local. Xem thêm: https://nextjs.org/docs/basic-features/environment-variables'
//   );
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function connect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const options = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default connect;

// export class Database {
//     constructor() {
//       this._connect()
//     }
//   _connect() {
//        mongoose.connect(`mongodb://${server}/${database}`)
//          .then(() => {
//            console.log('Database connection successful')
//          })
//          .catch(err => {
//            console.error('Database connection error')
//          })
//     }
//   }