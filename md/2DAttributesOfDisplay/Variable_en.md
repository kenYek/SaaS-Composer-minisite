# Variable Change Setting  

## Open the Variable window in the attribute of the drawing sheet

![tempSetting.PNG](v_01.png)

Enter the variable name and values; different values are separated using a comma (,) 

ex:
Name var1  
Value A,B,C,D  

![tempSetting_1.PNG](v_02.png)

## Apply the variable to the attribute

Use `[[var1]]` or `$var1` to represent a string that is used to replace a variable

![tempSetting_2.PNG](v_03.png)

On the preview page, variables will be replaced by the corresponding string according to the setting. 

![tempSetting_3.PNG](v_04.png)
## Add the variable selection icon

Select the icon  
Symbols > builtIn > sc_control > variableChange  

Enter the variable name in the “attribute name” field

![tempSetting_3.PNG](v_05.png)

Preview 

![tempSetting_4.PNG](v_06.png)

![tempSetting_5.PNG](v_07.png)


## Use the “variable” function in the data source (Grafna simple json)

In the Data Binding window, enter `[[var name]]` in the “target” field.

![tempSetting_7.PNG](v_08.png)

Preview 

![tempSetting_8.gif](v_09.gif)


## API Script

In Viewer, get all variable objects table:  

	dataRefreshUtil.variableSrv.getCurVarMapTable()

Set Variable value： 

	dataRefreshUtil.variableSrv.setVariable(name, value, callback)

Batch Set Variable value： 

	dataRefreshUtil.variableSrv.setVariables(varArray, callback)
	// varArray = [{name, value}]

Get Variable value： 

	dataRefreshUtil.variableSrv.getVariable(name)


