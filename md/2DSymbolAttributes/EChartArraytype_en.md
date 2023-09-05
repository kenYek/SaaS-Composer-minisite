# E-Chart Data Binding
Select Symbols > builtIn > html > echart  

![chart.PNG](image059.png)

Bind data "line Data1" & "line Data2"  

with format "timeseries" and data type "array".  

Set x-axis can use series number.  

    function(){
        var ary = []
        for(var i = 0 ; i < 120; i++){
            ary.push(i)
        }
        return ary
    }

![chart_1.PNG](image060.png)

Preview：

![chart_2.PNG](image061.png)