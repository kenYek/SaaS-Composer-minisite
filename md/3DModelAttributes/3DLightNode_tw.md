# Head Light  

![h_00.png](image257.png)  

Property         | default          | Note
-----------------|------------------|-------------
Disable          | false            | 
Color            | rgb(255,255,255) | 
Range            | 0                | 0: infinity
Intensity        | 1                | > 1: enhance, < 1: decline
AmbientIntensity | 0.7              |  


## Head Light Disable: false  

![h_01.png](image258.png)  

## Head Light Disable: true  

![h_02.png](image259.png)  

## Head Light Color  

![h_03.png](image260.png)  

## Head Light Ragne: 0  

![h_04.png](image261.png)  

## Head Light Ragne: Positive Number  

![h_05.png](image262.png)  

## Head Light Intensity

![h_06.png](image263.png)  

## Head Light Ambient Intensity

![h_07.png](image264.png)  

![h_08.png](image265.png)  

# Light  

![l_00.png](image266.png)  

Property         | default          | Note
-----------------|------------------|-------------
Disable          | false            | 
Type             | point            | point/ spot/ directional
Color            | #FF0000          | 
Range            | 0                | 0: infinity
Angle            | 3.1415           | radian 0 ~ PI
Intensity        | 1                | > 1: enhance, < 1: decline
Center           | [0,0,0]          | 0: infinity
Exponent         | 0                |  

## point light  

Depend on light point center, and `light.range`、`light.intensity`. 

![l_01.png](image267.png)  

## spot light  

Depend on light point center, and `light.center`、`light.range`、`light.angle`、`light.exponent`.  

![l_02.png](image268.png)  

## directional light  

Depend on distance between light point center with [0,0,0]。  

![l_03.png](image269.png)  

![l_04.png](image270.png)  


## Shadow  

Enable 3D Scene shadow

![shadow_01.png](image271.png)  

3D Scene shadow property：  

    "a": {
        "sceneShadowEnabled": true,
        "sceneShadowDegreeX": 29.53,
        "sceneShadowDegreeZ": -9.64,
        "sceneShadowIntensity": 0.14,
        "sceneShadowQuality": "ultra",
        "sceneShadowType": "none",
        "sceneShadowRadius": 1.4,
        "sceneShadowBias": -0.0081,
        "sceneOrthographic": false
    },

![shadow_02.png](image272.png)  

3D object shadow property：  

    "s": {
        "shadow.receive": false,
        "shadow.cast": false
    }