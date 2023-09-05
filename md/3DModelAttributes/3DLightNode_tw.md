# Head Light  

![h_00.png](/dataSource/resource/1651025822998502243.png) 

Property         | default          | Note
-----------------|------------------|-------------
Disable          | false            | 
Color            | rgb(255,255,255) | 
Range            | 0                | 0: infinity
Intensity        | 1                | > 1: enhance, < 1: decline
AmbientIntensity | 0.7              |  


## Head Light Disable: false  

![h_01.png](/dataSource/resource/1651025837962197029.png)

## Head Light Disable: true  

![h_02.png](/dataSource/resource/1651025851551718240.png)

## Head Light Color  

![h_03.png](/dataSource/resource/1651025862311854900.png)

## Head Light Ragne: 0  

![h_04.png](/dataSource/resource/1651025870029409710.png)

## Head Light Ragne: Positive Number  

![h_05.png](/dataSource/resource/1651025878298599741.png)

## Head Light Intensity

![h_06.png](/dataSource/resource/1651025889666773833.png)

## Head Light Ambient Intensity

![h_07.png](/dataSource/resource/1651025903795243927.png)

![h_08.png](/dataSource/resource/1651025913431421740.png)

# Light  

![l_00.png](/dataSource/resource/1651025969055939688.png)

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

![l_01.png](/dataSource/resource/1651025930881785227.png)

## spot light  

Depend on light point center, and `light.center`、`light.range`、`light.angle`、`light.exponent`.  

![l_02.png](/dataSource/resource/1651025940807712323.png)

## directional light  

Depend on distance between light point center with [0,0,0]。  

![l_03.png](/dataSource/resource/1651025987887145109.png)

![l_04.png](/dataSource/resource/1651025997375310516.png)


## Shadow  

Enable 3D Scene shadow

![shadow_01.png](/dataSource/resource/1651026007515151719.png)

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

![shadow_02.png](/dataSource/resource/1651026018283620060.png)

3D object shadow property：  

    "s": {
        "shadow.receive": false,
        "shadow.cast": false
    }