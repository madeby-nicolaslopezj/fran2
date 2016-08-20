
var fc = new FileCollection("data", {
      resumable: true,
      resumableIndexName: 'resumableIndex',
      http: [{
               method: 'get',
               path: '/id/:_id',
               lookup: function (params, query) { return { _id: params._id }; }
            }]
    });


if (Meteor.isServer) {
   // These need to be tightened down to enforce
   fc.allow({
     insert: function(){
       return true;
     },
     remove: function(){
       return true;
     },
     write: function(){
       return true;
     },
     read: function(){
       return true;
     }
   });
}
