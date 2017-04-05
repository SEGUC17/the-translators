let Gym = require ('../Model/BusinessModel');
let BusinessController={
//     getsubscribebygym_name: function (gym_name,callback){
//         var query= {'gym_name',gym_name};
//         subscribe.find(query,callback);
//     }
//     getsubscribebylocation_of_the_gym: function (location_of_the_gym,callback){
//         var query={'location_of_the_gym',location_of_the_gym};
//         subscribe.find(query,callback);
//
//     }
//     getsubscribebyEmail: function (Email,callback){
//         var query={'Email',}
//     }
// }
        gymSubscribtion: function(req, res){
            var gymSubscribe = new gym(req.body);
            gymSubscribe.save(function(err)){
                if(err)
                    res.send(err.message);
                else{
                    res.send('Subscribtion successful');
                    res.redirect('/'); //redirect to business owner home page
                }
            }
        }

        uploadGymSchedule: function(req, res){
            gym.findOne({username: req.user.username},
                function (err){
                    if(err)
                    res.send(err.message);
                    else{
                        gym.save(req.file.schedules);
                    }
                }
            })
        }

// m3rafsh dah sa7 wala habl

let uploadschedule= require('../model/uploadschedule');
let uploadschedulecontroller={
    get Alluploadschedule: function(req,res){
        uploadschedule.find(function(err,subscribe)){

        }
    }
}
