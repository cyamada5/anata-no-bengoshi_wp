particlesJS('hoge',{
    "particles":{
   
  //--シェイプの設定----------
        "number":{
          "value":10, //シェイプの数
          "density":{
            "enable":true, //シェイプの密集度を変更するか否か
            "value_area":2000 //シェイプの密集度
          }
        },
        "shape":{
          "type":"image", //シェイプの形（circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像）
          "stroke":{
            "width":0, //シェイプの外線の太さ
            "color":"#ffcc00" //シェイプの外線の色
          },
          //typeをpolygonにした時の設定
          "polygon": {
            "nb_sides": 4 //多角形の角の数
          },
          //typeをimageにした時の設定
          "image": {
            "src": "img/fukidashi.png",
            "width": 100,
            "height": 63
          }
        },
        "color":{
          "value":"#DCEFF2" //シェイプの色
        },
        "opacity":{
          "value":0.9, //シェイプの透明度
          "random":true, //シェイプの透明度をランダムにするか否か
          "anim":{
            "enable":false, //シェイプの透明度をアニメーションさせるか否か
            "speed":30, //アニメーションのスピード
            "opacity_min":0.3, //透明度の最小値
            "sync":false //全てのシェイプを同時にアニメーションさせるか否か
          }
        },
        "size":{
          "value":200, //シェイプの大きさ
          "random":true, //シェイプの大きさをランダムにするか否か
          "anim":{
            "enable":true, //シェイプの大きさをアニメーションさせるか否か
            "speed":30, //アニメーションのスピード
            "size_min":0.5, //大きさの最小値
            "sync":false //全てのシェイプを同時にアニメーションさせるか否か
          }
        },
  //--------------------

  //--線の設定----------
        "line_linked":{
          "enable":false, //線を表示するか否か
          "distance":150, //線をつなぐシェイプの間隔
          "color":"#ffffff", //線の色
          "opacity":0.4, //線の透明度
          "width":1 //線の太さ
        },
  //--------------------
  
  //--動きの設定----------
        "move":{
          "speed":1, //シェイプの動くスピード
          "straight":false, //個々のシェイプの動きを止めるか否か
          "direction":"none", //エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
          "out_mode":"out" //エリア外に出たシェイプの動き(out、bounceより選択)
        }
  //--------------------
  
      },
   
      "interactivity":{
        "detect_on":"canvas",
        "events":{
  
  //--マウスオーバー時の処理----------
          "onhover":{
            "enable":true, //マウスオーバーが有効か否か
            "mode":"bubble" //マウスオーバー時に発動する動き(下記modes内のgrab、repulse、bubbleより選択)
          },
  //--------------------
  
  //--クリック時の処理----------
          "onclick":{
            "enable":true, //クリックが有効か否か
            "mode":"repulse" //クリック時に発動する動き(下記modes内のgrab、repulse、bubble、push、removeより選択)
          },
  //--------------------
  
        },
   
        "modes":{
  
  //--カーソルとシェイプの間に線が表示される----------
          "grab":{
            "distance":400, //カーソルからの反応距離
            "line_linked":{
              "opacity":1 //線の透明度
            }
          },
  //--------------------
  
  //--シェイプがカーソルから逃げる----------
          "repulse":{
            "distance":200 //カーソルからの反応距離
          },
  //--------------------
  
  //--シェイプが膨らむ----------
          "bubble":{
            "distance":400, //カーソルからの反応距離
            "size":40, //シェイプの膨らむ大きさ
            "opacity":8, //膨らむシェイプの透明度
            "duration":2, //膨らむシェイプの持続時間(onclick時のみ)
            "speed":3 //膨らむシェイプの速度(onclick時のみ)
          },
  //--------------------
  
  //--シェイプが増える----------
          "push":{
            "particles_nb":4 //増えるシェイプの数
          },
  //--------------------
  
  //--シェイプが減る----------
          "remove":{
            "particles_nb":2 //減るシェイプの数
          }
  //--------------------
  
        }
      },
      "retina_detect":true, //Retina Displayを対応するか否か
      "resize":true //canvasのサイズ変更にわせて拡大縮小するか否か
    }
  );