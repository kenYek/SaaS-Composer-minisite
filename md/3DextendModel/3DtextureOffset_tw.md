# 3D texture offset  


![flow02.gif](/dataSource/resource/1651565102339878073.gif)

# 使用情境：  

- 3D 管線流動  
- 3D 傳輸帶移動  
- 3D 牆面流光  

    flowNode.s('shape3d.uv.offset', [offset, 0]);

# 實作   

設定物件 `tag` = road  

設定貼皮，此範例為`top.image`  
![uv_01.png](/dataSource/resource/1651565116174499500.png)


設定貼皮uv值，此範例為`top.uv.scale`  
![uv_02.png](/dataSource/resource/1651565127757639041.png)

設定 `uv` 值移動  

    flowNode.s('top.uv.offset', [offset, 0]);

在開啟場景  

    window.offset = 0.1;

在執行期間  

    window.offset += 0.1
    dataModel.getDataByTag('road').s('top.uv.offset', [offset, 0]);

![flow01.gif](/dataSource/resource/1651565140592210525.gif)


# 各面向參數  

    "all.image"
    "all.uv.scale"
    "all.uv.offset"

    "front.image"
    "front.uv.scale"
    "front.uv.offset"

    "back.image"
    "back.uv.scale"
    "back.uv.offset"

    "top.image"
    "top.uv.scale"
    "top.uv.offset"

    "left.image"
    "left.uv.scale"
    "left.uv.offset"

    "right.image"
    "right.uv.scale"
    "right.uv.offset"

    "bottom.image"
    "bottom.uv.scale"
    "bottom.uv.offset"
