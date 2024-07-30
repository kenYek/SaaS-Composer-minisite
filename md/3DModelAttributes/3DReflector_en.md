# Reflect  

![r_00.png](image273.png)  

shape3d.type is `billboard` or `plane` can set as a reflector

![r_01.png](image274.png)  

Property                     | default          | Note
-----------------------------|------------------|-------------
shape3d.reflector            | false            | 
shape3d.reflector.color      | rgb(128,128,128) | 
shape3d.reflector.background | null             | 
shape3d.reflector.clip       | 0.003            | 
 

`shape3d.reflector`：Default is false

![r_02.png](image275.png)  

`shape3d.reflector.color`： rgb(128,128,128)


![r_03.png](image276.png)  

`shape3d.reflector.background`：Reflector background, default is null

![r_04.png](image277.png)  

`shape3d.reflector.clip`：Reflector clip, default is 0.003

![r_05.png](image278.png)  

## Remove node reflector  

Set `3d.reflectable:false` to remove single object reflect.  

    node.s('3d.reflectable',false)


![r_06.png](image279.png)  