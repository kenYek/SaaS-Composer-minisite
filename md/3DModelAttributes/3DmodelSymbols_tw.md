## Rotation function of the 3D model
The entire movement process is split into several independent movements, and a single movement is executed within an interval [minValue,maxValue].    

   Use the value difference (diffValue) between the value of the current state (currentValue) and that of the initial state (startValue), such as time, to determine by which interval the trajectory function should be executed. 

    1. Rotation
        animate3D.overlooking(diffValue,minValue,maxValue,circle)
            // diffValue: Value difference between the current state value (currentValue) and the initial state value (startValue), such as time 
            // minValue: Initial state value of the trajectory   
            // maxValue: Final state value of the trajectory
            // circle: Number of rotations involved in the trajectory     
    2. Camera movement
        animate3D.eyeMove(diffValue,minValue,maxValue,eyeArray)
            // diffValue: Value difference between the current state value (currentValue) and the initial state value (startValue), such as time 
            // minValue: Initial state value of the trajectory
            // maxValue: Final state value of the trajectory
            // eyeArray: Coordinates of the camera location when the movement ends, which is shown as [x,y,z] comprising the numerical values of x, y, and z 
    3. Target movement
        animate3D.centerMove(diffValue,minValue,maxValue,centerArray)
            // diffValue: Value difference between the current state value (currentValue) and the initial state value (startValue), such as time
            // minValue: Initial state value of the trajectory
            // maxValue: Final state value of the trajectory
            // centerArray: Coordinates of the target location when the movement ends, which is shown as [x,y,z] comprising the numerical values of x, y, and z

## The function of lighting effect display of the 3D model 
    animate3D.setLightingEffect(jsonData)
        // jsonDate: A set of json data for the lighting. Multiple lights can be simultaneously set, with each light presented in json format.    
       Example:
            var jsonLight = [{
                "name":"lightOne",
                "type" : "point",
                "color" : "rgb(255,0,0)",
                "range" : "300",
                "location" : [-191,100,225]
            },{
                "name":"lightTwo",
                "type" : "point",
                "color" : "rgb(0,255,0)",
                "range" : "300",
                "location" : [263,100,166] 
            },{
                "name":"lightThree",
                "type" : "point",
                "color" : "rgb(0,0,255)",
                "range" : "300",
                "location" : [222,100,-314]
            }]
        //Parameters for lighting in json format
            {
                'name': Name of the light, according to which users can control the lighting effect 
                'type': “Point light” is set as the default type of light, and this can also be changed to “spot light” or “directional light”  
                'location': Coordinates of the light location, which is a set of numerical numbers [x,y,z]
                'color': Color of the light 
                'intensity': Intensity of the light. The default value is 1, with values higher than 1 indicating high intensity and those lower than 1 denoting low intensity. 
                'disabled': This parameter is to disable the lighting effect, with the default value being set as “false.” Setting the value to “true” will disable the lighting effect.    
                'range': Range of the lighting. The default value is 0, indicating that the light can be irradiated to an infinite distance. As the value increases, the object moves away from the light and the lighting effect reduces (relative to the location of the light).   
                'angle': Radian of the angle of spotlight radiation 
                'center': Location of the central point along the light irradiation direction of the spotlight, comprising [x,y,z]. The origin [0,0,0] is the default value.  
                'exponent': Exponent of radiation attenuation of the spotlight, which is set to 0 as the default value. An increase in value indicates that the object far from the center is less affected by the lighting effect (relative to the irradiation center).   
            }

## Page flipping function of the 3D model 
    Inset a button image on the page and then bind it with the “onclick” function. This allows users to flip to another page by clicking the button. 
    animate3D.setPageTurn(jsonData)
        // jsonData: Page flipping button in json format
        Example:
            var jsonButten = {
                "butten": "http://127.0.0.1:4000/symbols/Scorecard/button.png",
                "style" :{
                    "position": "absolute",
                    "top": "80px",
                    "left": "20px",
                    "width": "120px",
                    "height": "55px"
                },
                "URL":"http://127.0.0.1:4000/scene.html?tag=scenes/%E5%AE%A4%E5%86%85demo/%E5%B1%95%E5%8E%85demo.json&org_id=2"
            }
        //Parameters for the page flipping button in json format
            {
                "butten": Link for the image of the button
                "style": Location of the button image on the page, controlled by CSS 
                "URL": URL of the page that users jump to after clicking the button  
            }


## 3D model indicator overview page
    Create a 2D indicator overview page and insert it on the current 3D page. 
    animate3D.setOverViewBoard(jsonData)
        // jsonData: indicator overview page in json format
        Example: 
            var jsonStr = {
                "attribute":"http://127.0.0.1:4000/display.html?tag=displays/all_Item.json&org_id=2&&fullscreen=1",
                "style": {
                    "position":"absolute",
                    "top" :"160px",
                    "left":"0px",
                    "width" : ($("#mainDiv").width()/6) + "px",
                    "height" : ($("#mainDiv").width()/6)*(415/220) + "px",
                    "border" : "0px"
                }
                
            }
        //Parameters for the indicator overview page in json format
            {
                "attribute": Link for the indicator overview page
                "style": Location of the indicator overview page on the 3D page, controlled by CSS
            }

## Animation looping 
    Obtain the coordinates of the initial location 
    initValue = animate3D.record()
        // initValue: Coordinates of the camera and target locations at the time when the animation starts are returned in the form of a set of six numbers, with the first three numbers indicating the coordinates of the camera and the last three numbers indicating the coordinates of the target.  
    
    Set the loop animation 
    startValue = animate3D.setCirculation = function (startValue,cycleLength,initValue)
        // startValue: Value of the initial state of the loop animation, with an initial value returned. 
        // cycleLength: Looping cycle
        // initValue: Coordinates of the initial state of the animation, comprising six numbers, with the first three numbers indicating the coordinates of the camera and the last three numbers indicating the coordinates of the target.

