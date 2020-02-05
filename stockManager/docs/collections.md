# Collections

Stock collection definition using collection2 and simple-schema.
autoform is used to specify which fields not to render in the templates.

## Schemas

### Item
     
 | field     	| type             |
 |-------------	|------------------|
 | name         | String           |
 | amount     	| String           |
 
 
### Stock
     
 | field     	| type             |
 |-------------	|------------------|
 | name         | String           |
 | desc     	| String           |
 | Item     	| Item Array       |
 | owner     	| String           |
 | createdAt  	| Date             |