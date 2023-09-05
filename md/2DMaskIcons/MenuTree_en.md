# Menu Tree  

209/09/02  

![tree_01.png](/dataSource/resource/1581572545782971296.png)  

![tree_02.png](/dataSource/resource/1581572556276713601.png)  

![tree_04.png](/dataSource/resource/1581572994992553102.png)

Property：  

Json data in `ht.dataSource` property  

    "ht.dataSource": [{
        "text": "BuiltIn",
        "expanded": true,
        "badges": [
            {
                "text": "warn",
                "textColor": "white",
                "backColor": "red"
            }
        ],
        "children": [
            {
                "text": "graph",
                "expanded": true,
                "children": [
                    {
                        "text": "DefaultInteractor",
                        "isLeaf": true,
                        "id": "ae6e463b-5e0d-4184-9e5b-360d8f154d48"
                    },
                    {
                        "text": "GraphView",
                        "isLeaf": true,
                        "id": "c5a1b69b-12a9-40bb-9531-75120155c3c3"
                    },
                    {
                        "text": "Interactor",
                        "isLeaf": true,
                        "id": "e729622d-298a-464c-a073-b7dbeaf3b6d0"
                    },
                    {
                        "text": "MoveInteractor",
                        "isLeaf": true,
                        "id": "306215ef-a00f-4d4c-a77d-9824c931abe7"
                    },
                    {
                        "text": "ScrollBarInteractor",
                        "isLeaf": true,
                        "id": "7cd16906-aa34-412e-a24e-8b5bbb1ee95b"
                    },
                    {
                        "text": "SelectInteractor",
                        "isLeaf": true,
                        "id": "13f4656c-a7de-4d5c-b3c9-521d45e4a2b8"
                    },
                    {
                        "text": "TextEditInteractor",
                        "isLeaf": true,
                        "id": "9d020ac8-18d3-4db4-b916-4a1110120c71"
                    },
                    {
                        "text": "TouchInteractor",
                        "checked": true,
                        "isLeaf": true,
                        "id": "b1914040-0cf0-4503-8aef-53206e54f508"
                    }
                ],
                "id": "a1f888dd-5232-46c4-9a63-95e2583920b5"
            },
            {
                "text": "graph3d",
                "expanded": true,
                "badges": [
                    {
                        "text": "66",
                        "textColor": "white",
                        "backColor": "#777777"
                    },
                    {
                        "text": "99",
                        "textColor": "white",
                        "backColor": "green"
                    }
                ],
                "children": [
                    {
                        "text": "DefaultInteractor",
                        "isLeaf": true,
                        "id": "181da324-a138-48ea-a291-3e9bd97f1b20"
                    },
                    {
                        "text": "Graph3dView",
                        "isLeaf": true,
                        "id": "d79812d5-1d63-4d13-bc67-e6ac55fc5521"
                    },
                    {
                        "text": "Interactor",
                        "isLeaf": true,
                        "id": "82bb6c8d-3bb9-4ec0-a20e-15b07451caf4"
                    },
                    {
                        "text": "MapInteractor",
                        "isLeaf": true,
                        "disabled": true,
                        "id": "19edfcb6-3c82-453e-a0fb-593765e7bd3d"
                    }
                ],
                "id": "55e316fa-4868-4c92-b962-d6220b195c26"
            }
        ],
        "id": "c62764f8-750b-475c-895e-6c5df14e72e8"
    }]  


| Tables   |   property    | type       | default |
|----------|:-------------:|------------|---------|
| text     |  test         | string     | Tree    |
| id       |  unique Id    | int,string |         |
| icon     |  icon         | string     | null    |
| children |  child node   | array      | []      |
| badges   |  badges       | array      | []      |
| expanded | expanded      | boolean    | false   |
| selected | selected      | boolean    | false   |
| disabled | disabled      | boolean    | false   |
| checked  | checked       | boolean    | false   |
| isLeaf   | isLeaf        | boolean    | false   |
    
badges: 

    [{ text: '', textColor: '', backColor: '' }]

Set multiple tree root  

![tree_03.png](/dataSource/resource/1581572563562943264.png)  
