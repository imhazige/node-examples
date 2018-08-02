- going to use user feature
- going to use apollo with postgress with real data fetching





## problems:

### func is not a function
see https://github.com/aldeed/meteor-collection2-core/issues/30, 
just remove aldeed:simple-schema from .meteor/packages and .meteor/versions
and import:  
`import SimpleSchema from 'simpl-schema';` instead