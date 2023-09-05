# 導航巡視  

導航巡視一共由3部分組成：

1. 導航相機路徑
           相機的移動軌跡路徑
2. 導航目標路徑
           目標的移動軌跡路徑
3. 導航速度
           移動的速度



![導航路徑效果展示.gif](Navigation01.gif)

導航巡視效果

# 方法#1-設置導航巡視路徑

導航巡視設置方式：

![导航路径设置.gif](Navigation02.gif)

1. 選擇場景，在場景中繪製兩條管道，分別在"**標籤**"中命名，例如 path1，path2
  -path1 等同於**觀看者**的位置。
  -path2 等同於**觀看者**眼睛所注視的方向
  上圖的gif檔範例，**觀看者**在外圈移動的同時，注視者內圈的線道軌跡。
2. 為了增加移動的流暢度，建議按兩下管線折點，以弧線型的路徑進行移動，避免直角的轉折。
3. 如果希望流暢度接近動畫，每1秒呈現30幀的比例，可以把畫面更新頻率跟資料更新頻率調為0.03（秒）
  -依照客戶需求來調適更新頻率。  
4. 在"**導航相機路徑**"輸入**觀看者**的位置"**標籤**"名稱 
  ex. path1
5. 在"**導航目標路徑**"輸入**眼睛注視的方向**"**標籤**"名稱     
  ex. path2
6. 在"**導航速度**"輸入 **相對移動的刷新幅度** 
-單位為總長度的百分比，ex. 輸入 "0.1" 等同每次更新會移動管線總長的10%距離。 
-如以上圖的gif檔範例，輸入0.005 等同每次0.5%的位置遞增
-填寫導航速度來控制整個導航巡視時間，
    導航巡視時間 = 刷新頻率 ÷ 導航速度
4. 可以將兩個管道分成相等的段數來實現導航巡視分段的功能
5. 設置分段長度足夠小來實現旋轉巡視功能


### 使用腳本控制  

設定參數暫停啟動 `viewer3dUtil.navigationSwitch` 相機的導覽  

	viewer3dUtil.navigationSwitch = false
	viewer3dUtil.navigationSwitch = true

讀取 `commonViewUtil.currentFiles[0].json.a['custom.navigationPercentage']` 可獲得當前相機位置的百分比.

# 方法#2-通過代碼完成動畫路徑


可以在執行期間中寫標準JavaScript代碼來實現導航巡視功能
方式及調用介面如下：

    次方法將整個運動過程按照區間劃分為獨立的運行過程，在某一個狀態欄間值 [minValue,maxValue] 之內執行一個簡單的運動過程。

    根據當前狀態值 currentValue 和初始狀態值 startValue（例如時間）之間的差值 diffValue 來判斷執行哪一個區間的軌跡函數。


    1. 環繞旋轉
        animate3D.overlooking(diffValue,minValue,maxValue,circle)
            // diffValue: 當前狀態值 currentValue 和初始狀態值 startValue（例如時間）之間的差值
            // minValue : 運動軌跡的起始狀態值
            // maxValue : 運動軌跡的結束狀態值
            // circle    : 運動軌跡的旋轉圈數
    2. 相機移動
        animate3D.eyeMove(diffValue,minValue,maxValue,eyeArray)
            // diffValue: 當前狀態值 currentValue 和初始狀態值 startValue（例如時間）之間的差值
            // minValue : 運動軌跡的起始狀態值
            // maxValue : 運動軌跡的結束狀態值
            // eyeArray  : 運動軌跡結束時相機的位置座標，x、y、z 組成的一個陣列 [x,y,z]
    3. 目標移動
        animate3D.centerMove(diffValue,minValue,maxValue,centerArray)
            // diffValue   : 當前狀態值 currentValue 和初始狀態值 startValue（例如時間）之間的差值
            // minValue    : 運動軌跡的起始狀態值
            // maxValue    : 運動軌跡的結束狀態值
            // centerArray  : 運動軌跡結束時目標的位置座標，x、y、z 組成的一個陣列 [x,y,z]



設置動畫迴圈功能：


    獲取初始位置座標
    initValue = animate3D.record()
        // initValue: 將頁面動畫開始時相機以及目標的座標以一個陣列形式返回
                       陣列長度為6，前三位為相機座標，後三位元為目標座標

    設置迴圈動畫
    startValue = animate3D.setCirculation = function (startValue,cycleLength,initValue)
        // startValue  : 迴圈動畫的初始狀態值，並返回一個初始狀態值
        // cycleLength ：迴圈週期
        // initValue   ：陣列形式的初始狀態座標，陣列長度為6，前三位為相機座標，後三位元為目標座標

例如：


   //獲取當前狀態值（此處時間值）
   current_value = new Date().getTime();
    if (typeof(start_value) == "undefined"){
          start_value = current_value;
        //獲取起始位置座標
        init_value = animate3D.record()
    }


    //設置動畫迴圈週期
    diff_value = current_value - start_value;
    start_value = animate3D.setCirculation(start_value,25*1000,init_value);
    //視角環繞
    animate3D.overlooking(diff_value,0,10*1000,1)
    //相機位置移動
    animate3D.eyeMove(diff_value,10*1000,25*1000,[144,81,-203])
    //目標位置移動
    animate3D.centerMove(diff_value,10*1000,25*1000,[-267,181,-38])
 
