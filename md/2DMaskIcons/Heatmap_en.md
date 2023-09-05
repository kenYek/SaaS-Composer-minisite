
# 2D heat map

1.	Draw heat points and create the heat map display medium: Select the heat points at the upper-right corner to draw heat points on the drawing sheet. Select the round rectangle or rectangle to create a heat map display medium (the heat map will be displayed at the location of the medium).

![heat map icon 1.png](h01.png)

2.	Heat map binding:

a) Create labels for the heat map display medium

![heat map icon 2.png](h02.png)

b) Fill in the “HeatFloor” field of the heat point with the revised label content 

![heat map icon 3.png](h03.png)

3.	Heat point property

`heatValue`: Current heat point value, which indicates the brightness of the heat points.  
`heatRadius`: Radius of the heat map.  
`heatFloor`: Area show heatpoints.  
`valueMax`: Upper bound of value.  
`valueMin`: lower bound of value.  
`maxOpacity`: The maximal opacity the highest value.  
`minOpacity`: The minimum opacity the lowest value.  
`deafultBlur`: [0,1] the blur factor is, the smoother the gradients will be.  
`Gradient`: An object that represents the gradient (syntax: number string [0,1] : color string)  

![s03_1.png](h04.png)  
![s03_2.png](h05.png)  


4.	Hide the heat points to preview the heatmap

![heat map icon 5.png](h06.png)

# 3D heat map

1.	Draw heat points and create the heat map display medium: Select the heat points at the upper-right corner to draw heat points on the drawing sheet. Select hexahedron to create a heat map display medium (the heat map will be displayed at the location of the medium, and the height of the hexahedron can be adjusted).

![heat map icon 6.png](h07.png)

2.	Heatmap binding:

a) Enter the label of the heat map display medium on the selected surface of the hexahedron.

![heat map icon 7.png](h08.png)

b) Select a heat point and click the figure to the right of the heat point to bind it. Select a heat point and fill in the “**HeatFloor**” field with the revised label content. 

![heat map icon 8.png](h09.png)

3.	Heat point property  

`heatValue`: Current heat point value, which indicates the brightness of the heat points.  
`heatRadius`: Radius of the heat map.  
`heatFloor`: Area show heatpoints.  
`Max`: Upper bound of value.  
`Min`: lower bound of value.  
`max Opacity`: The maximal opacity the highest value.  
`min Opacity`: The minimum opacity the lowest value.  
`Gradient`: An object that represents the gradient (syntax: number string [0,1] : color string)  

![s03_3.png](h10.png)

4.	Hide the heat points to preview the heatmap

![heat map icon 10.png](h11.png)
