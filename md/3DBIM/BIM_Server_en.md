# BIM server

![bimServer00.png](bim01.png)

# Login  

Please contact SaaS Composer Product PM apply the login account.  

![bimServerLogin.png](bim02.png)

# .ifc format  

Save BIM model to .ifc foramt file，Please use **IFC2x3 Coordination View 2.0** ifc format  
![0._IFCFormat.jpg](bim03.jpg)  

# Upload .ifc file  

When ifc file upload success, the model will show in the center area, then we can edit model and save snapshot in BIM-server.

![bimServer02.gif](bim04.gif)


# Save snapshot in BIM server  

Edit model checkout (show or hide) objects, then save.  

1. Click SnapShot in toolbar  

![bimServer00.png](bim05.png)  

![bimServer03.png](bim06.png)  

2. Write description (option), then save snapshot  

![bimServer05.png](bim07.png)  

3. After create snapshot, will show success dialog message.

![bimServer06.png](bim08.png)  

4. can preview snapshot in snapshot file list  

![bimServer04.png](bim09.png)  

# Uploaded model objects unseen in BIM editor  

![bimServer08.png](bim10.png)  

model objects is `0`  

Click filter tab  

![bimServer09.png](bim11.png)      

uncheck all filter  

![bimServer10.png](bim12.png)    

Click `refresh` button  

![bimServer11.png](bim13.png)    


# Download snapshot IFC resource  

Click `Download IFC resource` in toolbar  

![bimServer00.png](bim14.png)  

`.snap.json` is snapshot file  
filename `.json` is model file  

![bimServer07.png](bim15.png)  

In SaaS Composer Editor import BIM, 加載BIM-->離線快照，drag Model json and SnapShot json file into inputbox 

![23._InportBIMSnapShot.jpg](bim16.jpg)  


Then wIll see the model 

![24._InportBIMSnapShot.jpg](bim17.jpg)  


# Transparent object  

1. Separate Transparent object and nontransparent object in two different snapshot.  

![27._Transparent.jpg](bim18.jpg)  

![28._Transparent-2.jpg](bim19.jpg)  

![29._Transparent-3.jpg](bim20.jpg)  

2. Import both model in SaaS Composer editor

3. check Transparent & Reverse Cull option in object properties.

![30._Transparent-4.jpg](bim21.jpg)  

4. Make two objects overlap

![31._Transparent-5.jpg](bim22.jpg)  


# Separate BIM object by Cobie Tag    

When we need to integrate COBie (Construction to Operations Building information exchange)  data in SaaS Composer. There are some preprocessing have to do in BIM server. Separate objects snapshot by Tag.


1. Create snapshot, Group Rule select `Grouped By Tag` or `Group by Property` then save snapshot.  

![COBie01.png](bim23.png)  

2. In 3D editor，load BIM model.

![COBie02.png](bim24.png)  

3. We can see all object separate by tag or property.    

![COBie03.png](bim25.png)  

4. If not separate by tag, all 3D objects in BIM will group as single object in 3D editor.  

![COBie04.png](bim26.png)  






