# Reflect  

![r_00.png](/dataSource/resource/1650511722391893674.png)

shape3d.type is `billboard` or `plane` can set as a reflector

![r_01.png](/dataSource/resource/1650511733120454585.png)

Property                     | default          | Note
-----------------------------|------------------|-------------
shape3d.reflector            | false            | 
shape3d.reflector.color      | rgb(128,128,128) | 
shape3d.reflector.background | null             | 
shape3d.reflector.clip       | 0.003            | 
 

`shape3d.reflector`：Default is false

![r_02.png](/dataSource/resource/1650511744729335974.png)

`shape3d.reflector.color`： rgb(128,128,128)


![r_03.png](/dataSource/resource/1650511758479141537.png)

`shape3d.reflector.background`：Reflector background, default is null

![r_04.png](/dataSource/resource/1650511771512282079.png)

`shape3d.reflector.clip`：Reflector clip, default is 0.003

![r_05.png](/dataSource/resource/1650511812776011621.png)

## Remove node reflector  

Set `3d.reflectable:false` to remove single object reflect.  

    node.s('3d.reflectable',false)


![r_06.png](/dataSource/resource/1650511827005928563.png)