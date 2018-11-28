var FCM = require('fcm-node')
    
//var serverKey = require('security/svfcmnotifyapp-privatekey.json') //put the generated private key path here    
var serverKey = require('/Users/sulabhvikas/project_home/node_projects/fcmtokenmysql/security/svfcmnotifyapp-privatekey.json') //put the generated private key path here 

var fcm = new FCM(serverKey)
 
var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to: 'c25I2DzEmyM:APA91bFPSwMPsbpliZsHr5exY_HYs6uzY0Sp4gvEsKBU0lo4MoQ56Z5uqA7HHWum7PXb2y_lS6IVdIuyYUtIiFGhizjGSgPDszykaa0tLH47hj3Sqi76gB1-5q7nVmkZ1p97rBWTilKn', 
    //collapse_key: 'notification',
    
    notification: {
        title: 'svik test2 from node server', 
        body: 'svik notification test2 from node server' 
    }
    
    //data: {  //you can send only notification or only data(or include both)
    //    my_key: 'my value',
    //    my_another_key: 'my another value'
    //}
}

fcm.send(message, function(err, response){
    if (err) {
        console.log("Something has gone wrong!", err)
    } else {
        console.log("Successfully sent with response: ", response)
    }
})