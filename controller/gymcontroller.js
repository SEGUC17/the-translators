let Gym = require ('../Model/gym');
let subscribecontroller={
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

        registerGym: function(req, res){
            Gym.findOne({username: req.body.username}, function(err, foundGym){
                if(err) throw err;
                if(foundGym){
                    res.json(success: false, message: "username not available");
                } else {
                    Gym.create({
                        
                    }, function(err, createdGym){

                    })
                }
            })
        }

// m3rafsh dah sa7 wala habl
