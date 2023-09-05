# URL Property

## Editor :  

1. `http://localhost/?display=displays/aa.json&org_id=3`    
 `org_id` = Set SaaS Composer org id 
`display` = Display file path  

2. `http://localhost/?lang=en ` 
`lang` = language  


## Viewer :  

1. `http://localhost/display.html?tag=displays/ff/AAA.json&org_id=3`        
`org_id` = Set SaaS Composer org id  
`tag` = Display file path.  

2. `http://localhost/display.html?tag=displays/ff/AAA.json&org_id=3&fullscreen=1`    
`fullscreen` = hide banner when fullscreen equal 1.  

3. `http://localhost/display.html?tag=displays/ff/AAA.json&org_id=3&var-var1=1`  
Use `var-` as prefix can set default value for each variables.  
`var-var1` is set `var1` equal 1.   

4. `http://localhost/display.html?tag=displays/ff/AAA.json&org_id=3&var-var1=1&allCache=true&allCacheTime=15310303546`  
`allCache` = Catch file.  
`allCacheTime` = set time stamp for catch   