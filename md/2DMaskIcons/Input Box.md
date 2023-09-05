# SaaS Composer Input Box  


**Step by Step:**  

![inputBox_01.png](/dataSource/resource/1581577280284065964.png)

**1. Add a new 2D display**  
Displays --> Root of Displays --> WADEMO(optional) --> basic(optional) --> New Display  

![inputBox_02.png](/dataSource/resource/1581577300281707061.png)

**2. Enter the new display name, e.g. 2D_InputBox**  

![inputBox_03.png](/dataSource/resource/1581577305742615770.png)

**3. There are three objects will be added in this SOP.**  

- A text object for displaying static text
- A text object for displaying whatever user enters in input box
- A input box for user to enter whatever text.

**4. Click text object “ A and enter Display text**  

![inputBox_04.png](/dataSource/resource/1581577310849915789.png)

**5. Add second text object and assign a Tag to it.**  

Basic --> Tag --> myText1 (or any other name)

![inputBox_05.png](/dataSource/resource/1581577316519995587.png)

**6. Add an input box**  

Symbols --> Root of Symbols --> builtIn --> ui --> input

![inputBox_06.png](/dataSource/resource/1581577322889455316.png)

Modify "On Keydown" property
Input object is selected --> click empty part of On Keydown --> enter following code  

	if (event.keyCode == 13) { var currentInput = event.target.value; dataModel.getDataByTag('myText1').s('text', currentInput) }
	
Click "**Ok**" button to complete it.

- Note 1 : because SaaS Composer uses event in function(event, data, view) so event.keyCode and event.target.value must also use event
- Note 2: myText1 in getDataByTag is the tag name of second text object.

![inputBox_07.png](/dataSource/resource/1581577328396800249.png)

**7. Save and go to Sketch View**  

![inputBox_08.png](/dataSource/resource/1581577333563802842.png)

**8. R esult in Sketch View**  

![inputBox_09.png](/dataSource/resource/1581577338428667323.png)

Entering a text and click Enter keyboard, second text object will display whatever text user enter in
input box.

![inputBox_10.png](/dataSource/resource/1581577345342000075.png)

**9. Extra note: Using Input box to modify tag value (e.g tag40001)**  

Input object Keydown property --> click its empty part --> enter following code

	if (event.keyCode == 13) { 
		var currentInput = event.target.value; 
		dataRefreshUtil.setValue(
			"webaccess", 
			"webaccess", 
			{"target":"tag40001", "value":currentInput}
		) 
	}
	
![inputBox_11.png](/dataSource/resource/1581577350237882432.png) 

