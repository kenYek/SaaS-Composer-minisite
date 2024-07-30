# 3D Animation Path  

The 3D animation path is the same as that of the 2D function, which is to realize the movement of one element along the trajectory of another element  

## I.	Animation path demo  

![3D动画路径展示.gif](image250.gif)  

## II.	How to set the animation path  


How to set the animation path:  
1.	Sketch two elements on the display; one element (object) moves along the trajectory of another element (path)  
2.	Select the path and customize the name in the tag  
3.	Select the object and fill in the name of the tag that was customized in the previous step in the binding tag  
4.	Click on the object to complete the logical processing of the animation path in the data binding of the animation path; the return value will be between 0 and 1. The return value represents the proportion of the position of the object's movement along the entire path  

In this case, the object moves along the trajectory and returns. The function is as follows: `function(input,output){  i = (i+0.005)%1;  return i;}`  


![3D动画路径设置1.gif](image251.gif)  