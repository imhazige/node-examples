### Collections and pub/sub methods  
#### [pubsub1](/imports/pubsub1/client/pubsub1.js)  
subscribe to mongolist, render with react and Tracker.autorun.  
use methods to update.
#### [pubsub2](/imports/pubsub2/client/pubsub2.js)  
subscribe to mongolist, render with withtrack.  
use methods to update.  
#### [pubsub1](/imports/pubsub3/client/pubsub3.js)  
subscribe to customer collection, which actually is a local collection  

### Conclusion  
tried local collection without mongodb, it will not publish the change across the connections as each collection
is a local collection.

So, use mongodb if you using meteor, otherwise, most feature dispear!!!


### problems:

#### func is not a function
see https://github.com/aldeed/meteor-collection2-core/issues/30, 
just remove aldeed:simple-schema from .meteor/packages and .meteor/versions
and import:  
`import SimpleSchema from 'simpl-schema';` instead