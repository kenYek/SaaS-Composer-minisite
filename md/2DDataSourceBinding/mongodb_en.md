# MongoDB  

## 1. Add datasource
**Go to the data source list page of an organization**

![Add datasource image](MongoDB01.png)

Sequential steps:
1. Add a new data source.
2. Give the data source name.
3. Select “MongoDB” as the data source type.
4. Set the connection information.
5. Click “Save” to save the data source.
6. If the connection is successful, “Data Source Connection Successful” will pop up at the top of the page.

## 2.1 Data Binding
Sequential steps:

1. Add text, the words displayed in the text can be changed at will, click on the new text message.
2. On the right side of the page, text → content → click the paperclip pattern to pop out the window of data binding.

![Methods to display data image](MongoDB02.png)

## 2.2.1 Data Binding Format (Timeseries)

1. Unified binding format:
* Source selection, the data source name added in the data source list, the type must be “MongoDB”
* The format is “timeseries”
2. Method to display data
* Only support **aggregate** , ex : db.collection_name.aggregate
* The field names that must be included in “timeseries” are “value, ts”. If your own data table does not have these two fields, you can use **$project**.

![Methods to display data image](MongoDB03.png)

example:  
```
db.datatest.aggregate({"$project": { "value": "$A", "ts":"$B" }})
```

## 2.2.2 Data Binding Format (Table)
1. Unified binding format:
* Source selection, the data source name added in the data source list, the type must be “MongoDB”
* The format is “table”
2. Method to display data
* Only support **aggregate** , ex : db.collection_name.aggregate
* NO field names restriction

![Methods to display data image](MongoDB04.png)

example:  
```
db.datatest.aggregate({"$project": { "value": "$A", "time":"$B", "zg":"$_id","_id":0 }})
```
Set `"_id":0`, if you don't want to query `_id` field from collection.   

## 2.3 Preview the text message of the bound data source
Sequential steps:

1. Click the pattern of the save button at the top right to save the text message settings.
2. Click the triangle pattern on the upper right to preview. (The preview page is shown below)

![To preview page image](MongoDB05.png)

3. Result
![Result](MongoDB06.png)