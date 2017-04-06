//this method is for business owners to subscribe on the platform.
let Gym = require ('/Users/benyamin/Desktop/code/Models/BusinessModel.js');
let BusinessController={

        gymsubscription: function(req, res){
            var gymSubscribe = new gym(req.body);
            gymSubscribe.save(function(err, gymsubscription){
                if(err)
                    res.send(err.message);
                else{
                    res.send('Subscription successful');
                    //res.redirect('/'); //redirect to business owner home page
                }
            })
        },
//this method is for business owners to upload schedule on their profile.
        uploadGymSchedule: function(req, res){
            gym.findOne({username: req.user.username},
                function (err, uploadschedule){
                    if(err){
                    res.json(err.message);
                }
                else{
                    if(uploadschedule){
                        if(req.body){
                                console.log(uploadschedule)
                        }
                        gym.save(req.body.schedules);
                    }
                }
            })
        }
}

module.exports = BusinessController;
