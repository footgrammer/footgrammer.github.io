"use strict";(self.webpackChunkfootgrammer=self.webpackChunkfootgrammer||[]).push([[5763],{640:t=>{t.exports=JSON.parse('{"permalink":"/blog/flutter-theater-app","editUrl":"https://footgrammer.github.io/blog/2025-03-26-flutter-theater-app.md","source":"@site/blog/2025-03-26-flutter-theater-app.md","title":"\ud50c\ub7ec\ud130 \uc601\ud654\uad00 \uc571 \ub9cc\ub4e4\uae30","description":"\uc624\ub298\uc740 \uc601\ud654\uad00 \uc571\uc744 \ub9cc\ub4e4\uc5b4 \ubcf4\uba74\uc11c State \uad00\ub9ac\uc5d0 \ub300\ud574\uc11c\ub3c4 \ubc30\uc6b8 \uc218 \uc788\uc5c8\uace0 \ub610\ud55c \uc704\uc82f\ub4e4\uc744 \ud074\ub798\uc2a4 \ubc0f \uba54\uc18c\ub4dc\ub85c \ub9cc\ub4e4\uc5b4\uc11c \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574\uc11c \ubc30\uc6b8 \uc218 \uc788\uc5c8\ub2e4.","date":"2025-03-26T20:00:00.000Z","tags":[{"inline":false,"label":"journal","permalink":"/blog/tags/journal","description":"journal tag description"},{"inline":false,"label":"flutter","permalink":"/blog/tags/flutter","description":"flutter tag description"}],"readingTime":4.4,"hasTruncateMarker":false,"authors":[{"name":"Junseok Yang","title":"Football Loving Programmer","url":"https://github.com/footgrammer","page":{"permalink":"/blog/authors/junseok"},"socials":{"github":"https://github.com/footgrammer"},"imageURL":"https://github.com/footgrammer.png","key":"junseok"}],"frontMatter":{"slug":"flutter-theater-app","title":"\ud50c\ub7ec\ud130 \uc601\ud654\uad00 \uc571 \ub9cc\ub4e4\uae30","authors":["junseok"],"tags":["journal","flutter"],"date":"2025-03-26T20:00"},"unlisted":false,"nextItem":{"title":"\ud50c\ub7ec\ud130 \ub808\uc2dc\ud53c \uc571 \ub9cc\ub4e4\uae30","permalink":"/blog/flutter-recipe-app"}}')},5563:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var l=n(640),i=n(4848),r=n(8453);const s={slug:"flutter-theater-app",title:"\ud50c\ub7ec\ud130 \uc601\ud654\uad00 \uc571 \ub9cc\ub4e4\uae30",authors:["junseok"],tags:["journal","flutter"],date:"2025-03-26T20:00"},d="2025-03-26-flutter-theater-app",o={authorsImageUrls:[void 0]},a=[{value:"\u270d\ufe0f \uc8fc\uc694 \ud559\uc2b5 \ub0b4\uc6a9",id:"\ufe0f-\uc8fc\uc694-\ud559\uc2b5-\ub0b4\uc6a9",level:2},{value:"\ubc30\uc6b4 \ub0b4\uc6a9",id:"\ubc30\uc6b4-\ub0b4\uc6a9",level:3},{value:"\uc0c8\ub85c \uc54c\uac8c\ub41c \uac1c\ub150",id:"\uc0c8\ub85c-\uc54c\uac8c\ub41c-\uac1c\ub150",level:3},{value:"\uc2e4\uc2b5\ud55c \ub0b4\uc6a9",id:"\uc2e4\uc2b5\ud55c-\ub0b4\uc6a9",level:3},{value:"\ud83d\udea8 \ubc1c\uc0dd\ud55c \ubb38\uc81c/\uc5d0\ub7ec",id:"-\ubc1c\uc0dd\ud55c-\ubb38\uc81c\uc5d0\ub7ec",level:2},{value:"1. \ubb38\uc81c/\uc5d0\ub7ec \uc815\uc758",id:"1-\ubb38\uc81c\uc5d0\ub7ec-\uc815\uc758",level:3},{value:"2. \uc2dc\ub3c4\ud55c \ud574\uacb0 \ubc29\ubc95",id:"2-\uc2dc\ub3c4\ud55c-\ud574\uacb0-\ubc29\ubc95",level:3},{value:"3. \ucd5c\uc885 \ud574\uacb0 \ubc29\ubc95",id:"3-\ucd5c\uc885-\ud574\uacb0-\ubc29\ubc95",level:3},{value:"4. \uc0c8\ub86d\uac8c \uc54c\uac8c \ub41c \uc810",id:"4-\uc0c8\ub86d\uac8c-\uc54c\uac8c-\ub41c-\uc810",level:3},{value:"5. \ub2e4\uc74c\uc5d0 \ube44\uc2b7\ud55c \ubb38\uc81c\ub97c \ub9cc\ub09c\ub2e4\uba74?",id:"5-\ub2e4\uc74c\uc5d0-\ube44\uc2b7\ud55c-\ubb38\uc81c\ub97c-\ub9cc\ub09c\ub2e4\uba74",level:3},{value:"\ud83d\udcdd \ucf54\ub4dc \uc2a4\ub2c8\ud3ab",id:"-\ucf54\ub4dc-\uc2a4\ub2c8\ud3ab",level:2},{value:"\ud83d\udcda \ub0b4\uc77c \ud559\uc2b5\ud560 \ub0b4\uc6a9",id:"-\ub0b4\uc77c-\ud559\uc2b5\ud560-\ub0b4\uc6a9",level:2},{value:"\ud83d\udcad \uc624\ub298\uc758 \ud68c\uace0",id:"-\uc624\ub298\uc758-\ud68c\uace0",level:2},{value:"\uc798\ud55c \uc810 \ud83d\udc4d",id:"\uc798\ud55c-\uc810-",level:3},{value:"\uac1c\uc120\ud560 \uc810 \ud83d\udd28",id:"\uac1c\uc120\ud560-\uc810-",level:3},{value:"\ubc30\uc6b4 \uc810 \ud83d\udca1",id:"\ubc30\uc6b4-\uc810-",level:3},{value:"\u270f\ufe0f \ucc38\uace0 \uc790\ub8cc",id:"\ufe0f-\ucc38\uace0-\uc790\ub8cc",level:2}];function c(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"-\uc624\ub298\uc758-\ud559\uc2b5-\ub0b4\uc6a9",children:"\ud83d\udcda \uc624\ub298\uc758 \ud559\uc2b5 \ub0b4\uc6a9"}),"\n",(0,i.jsx)(e.p,{children:"\uc624\ub298\uc740 \uc601\ud654\uad00 \uc571\uc744 \ub9cc\ub4e4\uc5b4 \ubcf4\uba74\uc11c State \uad00\ub9ac\uc5d0 \ub300\ud574\uc11c\ub3c4 \ubc30\uc6b8 \uc218 \uc788\uc5c8\uace0 \ub610\ud55c \uc704\uc82f\ub4e4\uc744 \ud074\ub798\uc2a4 \ubc0f \uba54\uc18c\ub4dc\ub85c \ub9cc\ub4e4\uc5b4\uc11c \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574\uc11c \ubc30\uc6b8 \uc218 \uc788\uc5c8\ub2e4."}),"\n",(0,i.jsx)(e.h2,{id:"\ufe0f-\uc8fc\uc694-\ud559\uc2b5-\ub0b4\uc6a9",children:"\u270d\ufe0f \uc8fc\uc694 \ud559\uc2b5 \ub0b4\uc6a9"}),"\n",(0,i.jsx)(e.h3,{id:"\ubc30\uc6b4-\ub0b4\uc6a9",children:"\ubc30\uc6b4 \ub0b4\uc6a9"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"StatefulWidget\uacfc StatelessWidget\uc758 \ucc28\uc774"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\uc0c8\ub85c-\uc54c\uac8c\ub41c-\uac1c\ub150",children:"\uc0c8\ub85c \uc54c\uac8c\ub41c \uac1c\ub150"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"StatefulWidget\uc744 \uc0c1\uc18d\ubc1b\uc740 \ub2e4\uc74c\uc5d0 setState \ud568\uc218\ub97c \ud1b5\ud574\uc11c \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud574 \uc90c\uc73c\ub85c\uc368 \ube4c\ub4dc\ub97c \ub2e4\uc2dc \ud574 \ubcc0\uacbd\ub41c \uc0c1\ud0dc\ub97c \uc571\uc5d0 \ubcf4\uc5ec\uc904 \uc218 \uc788\uac8c \ub428"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"State (\uc0c1\ud0dc)\ub77c\ub294 \uac83\uc740 UI\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce58\ub294 \ub370\uc774\ud130"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"StatefulWidget \ud074\ub798\uc2a4\uc640 State \ud074\ub798\uc2a4\uac00 \ud544\uc694"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"state \uac12\uc744 \ubcc0\uacbd\ud574 \uc8fc\uba74 setState\ub97c \ud1b5\ud574\uc11c \uac12\uc774 \ubcc0\uacbd\ub418\uc5c8\uc73c\ub2c8 \ub2e4\uc2dc \ube4c\ub4dc\ud574 \ub2ec\ub77c\ub294 \uc694\uccad\uc744 \ud574\uc57c \ud568"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"color : Colors.grey[200] \uc774\ub807\uac8c \ubc1d\uae30\ub97c \uc870\uc808\ud560 \uc218 \uc788\uc74c"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"container \uc758 \ud2b9\uc131"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"child\uac00 \uc5c6\uc73c\uba74 \uae30\ubcf8\uc801\uc73c\ub85c \ud06c\uae30\uac00 \ud655\uc7a5"}),"\n",(0,i.jsx)(e.li,{children:"child\uac00 \uc788\uc744 \uacbd\uc6b0\uc5d0\ub294 child \ud06c\uae30\uc5d0 \ub9de\ucdb0\uc11c \uc904\uc5b4\ub4ec"}),"\n",(0,i.jsxs)(e.li,{children:["\uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 child\uac00 \uc788\uc744 \ub54c\ub294 ",(0,i.jsx)(e.code,{children:"width : double.infinity"})," \ub97c \ud1b5\ud574\uc11c \uac00\ub85c \ud06c\uae30\ub97c \ucd5c\ub300\ub85c \ud0a4\uc6b8 \uc218 \uc788\uc74c"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"ElevatedButton"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"flutter\uc5d0\uc11c \uc81c\uacf5\ud574 \uc8fc\ub294 \ubc84\ud2bc \ud234 \uc911 \ud558\ub098."}),"\n",(0,i.jsx)(e.li,{children:"\uc6b0\uce21 \ud558\ub2e8\uc5d0 \uadf8\ub9bc\uc790\uac00 \uc788\uc5b4 \uc0b4\uc9dd \ub5a0\uc788\uc5b4 \ubcf4\uc774\ub294 \uc785\uccb4\uc801\uc778 \ubaa8\uc591\uc758 \ubc84\ud2bc"}),"\n",(0,i.jsx)(e.li,{children:"SizedBox \u2192 ElevatedButton\uc73c\ub85c \uad6c\uc131\ud574 \uc0ac\uc774\uc988 \uad6c\uc131 \uac00\ub2a5"}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"style : ElevatedButton.styleFrom(backgroundColor : Colors.ember)"})," \u2192 \uc2a4\ud0c0\uc77c \ubcc0\uacbd\ud560 \ub54c"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\uc720\uc800\uc758 \uc81c\uc2a4\ucc98\uc5d0 \ubc18\uc751\ud558\uace0 \uc2f6\ub2e4\uba74 ",(0,i.jsx)(e.code,{children:"GestureDetector()"})," \uc0ac\uc6a9"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"CupertinoDialog"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:"onPressed : (){\n\tshowCupertinoDialog(\n\t\tcontext : context,\n\t\tbuilder : (context) {\n\t\t\treturn CupertinoAlertDialog(\n\t\t\t\ttitle : Text('\ud655\uc778'),\n\t\t\t\tcontent : Text('\uc608\uc57d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?'),\n\t\t\t\tactions : [\n\t\t\t\t\tCupertinoDialogAction(\n\t\t\t\t\t\tchild : Text('\ucde8\uc18c'),\n\t\t\t\t\t\tisDefaultAction : true,\n\t\t\t\t\t\tonPressed(){\n\t\t\t\t\t\t\tNavigator.of(context).pop();\n\t\t\t\t\t\t}\n\t\t\t\t\t),\n\t\t\t\t\tCupertinoDialogAction(\n\t\t\t\t\t\tchild : Text('\ud655\uc778'),\n\t\t\t\t\t\tisDestructiveAction : true,\n\t\t\t\t\t\tonPressed(){}\n\t\t\t\t\t)\n\t\t\t\t]\n\t\t\t)\n\t\t}\n\t){\n\n\t}\n}\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Navigator.pop(context)"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ud50c\ub7ec\ud130 \ub0b4\uc5d0\uc11c \ud398\uc774\uc9c0 \uc774\ub3d9 \uc2dc \uae30\ubcf8\uc801\uc73c\ub85c Stack \uad6c\uc870\uc5d0 \ucc28\uace1\ucc28\uace1 \uc313\uc774\ub294 \uad6c\uc870"}),"\n",(0,i.jsx)(e.li,{children:"\uc704 \ucf54\ub4dc\ub294 \uac00\uc7a5 \uc704\uc5d0 \uc788\ub294 \ud398\uc774\uc9c0\ub97c \ud558\ub098 \uc81c\uac70(pop)\ud574\uc11c \uc774\uc804 \ud398\uc774\uc9c0\ub85c \ub3cc\uc544\uac00\uac8c \ud558\ub294 \ucf54\ub4dc"}),"\n",(0,i.jsx)(e.li,{children:"showCupertinoDialog \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uba74 SeatPage \uc704\uc5d0 CupertinoAlertDialog\uac00 \uc313\uc784"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\uc2e4\uc2b5\ud55c-\ub0b4\uc6a9",children:"\uc2e4\uc2b5\ud55c \ub0b4\uc6a9"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uc601\ud654\uad00 \uc571 \uc2e4\uc2b5"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"-\ubc1c\uc0dd\ud55c-\ubb38\uc81c\uc5d0\ub7ec",children:"\ud83d\udea8 \ubc1c\uc0dd\ud55c \ubb38\uc81c/\uc5d0\ub7ec"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\ubb38\uc81c/\uc5d0\ub7ec 1","\n",(0,i.jsx)(e.h3,{id:"1-\ubb38\uc81c\uc5d0\ub7ec-\uc815\uc758",children:"1. \ubb38\uc81c/\uc5d0\ub7ec \uc815\uc758"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ud074\ub9ad\ud558\uba74 \uac00\ub054 \uc774\uc0c1\ud55c \ud589\uacfc \uc5f4\uc774 \ud074\ub9ad\uc774 \ub41c\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"2-\uc2dc\ub3c4\ud55c-\ud574\uacb0-\ubc29\ubc95",children:"2. \uc2dc\ub3c4\ud55c \ud574\uacb0 \ubc29\ubc95"}),"\n",(0,i.jsx)(e.h3,{id:"3-\ucd5c\uc885-\ud574\uacb0-\ubc29\ubc95",children:"3. \ucd5c\uc885 \ud574\uacb0 \ubc29\ubc95"}),"\n",(0,i.jsx)(e.h3,{id:"4-\uc0c8\ub86d\uac8c-\uc54c\uac8c-\ub41c-\uc810",children:"4. \uc0c8\ub86d\uac8c \uc54c\uac8c \ub41c \uc810"}),"\n",(0,i.jsx)(e.h3,{id:"5-\ub2e4\uc74c\uc5d0-\ube44\uc2b7\ud55c-\ubb38\uc81c\ub97c-\ub9cc\ub09c\ub2e4\uba74",children:"5. \ub2e4\uc74c\uc5d0 \ube44\uc2b7\ud55c \ubb38\uc81c\ub97c \ub9cc\ub09c\ub2e4\uba74?"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"-\ucf54\ub4dc-\uc2a4\ub2c8\ud3ab",children:"\ud83d\udcdd \ucf54\ub4dc \uc2a4\ub2c8\ud3ab"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:"// \uc624\ub298 \ubc30\uc6b4 \uc8fc\uc694 \ucf54\ub4dc\n// StatefulWidget \ud074\ub798\uc2a4\n// \uc5b4\ub5a4 \uc0c1\ud0dc(State \ud074\ub798\uc2a4)\ub97c \uac00\uc9c0\ub294\uc9c0 \uc815\uc758\ud558\ub294 \ud074\ub798\uc2a4\n// createState \uba54\uc18c\ub4dc\uc5d0\uc11c \uc7ac\uc815\uc758(override)\ud558\uc5ec \uad6c\ud604\nclass MyHomePage extends StatefulWidget {\n\tconst MyHomePage({super.key, required this.title})\n\n\tfinal String title;\n\n\t@override\n\tState<MyHomePage> createState() => _MyHomePageState();\n}\n\n// state\ud074\ub798\uc2a4\n// \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uace0 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ud074\ub798\uc2a4\n// State<MyHomePage> => MyHomePage \ub77c\ub294 StatefulWidget\uc758 state\ud074\ub798\uc2a4\nclass _MyHomePageState extends State<MyHomePage> {\n\tint _counter = 0;\n\n\tvoid _incrementCounter(){\n\t\t// \uc0c1\ud0dc(\ubcc0\uc218) \uac00 \ubcc0\uacbd\ub418\uba74 setState \ud568\uc218\ub97c \ud1b5\ud574\n\t\t// \ud50c\ub7ec\ud130 \ud504\ub808\uc784\uc6cc\ud06c\uc5d0 \ub2e4\uc2dc \uadf8\ub824\ub2ec\ub77c\uace0 \uc694\uccad\n\t\tprint('_incrementCounter \ud638\ucd9c\ub428 $_counter');\n\t\tsetState((){\n\t\t\t_counter++;\n\t\t});\n\t}\n\n\t@override\n\tWidget build(BuildContext context){\n\t\tprint('build \ud638\ucd9c\ub428');\n\t\treturn Scaffold(\n\t\t\tbody : Center(\n\t\t\t\tchild : Text(\n\t\t\t\t\t'$_counter',\n\t\t\t\t\tstyle : TextStyle(fontSize : 100)\n\t\t\t\t)\n\t\t\t)\n\t\t)\n\t}\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"-\ub0b4\uc77c-\ud559\uc2b5\ud560-\ub0b4\uc6a9",children:"\ud83d\udcda \ub0b4\uc77c \ud559\uc2b5\ud560 \ub0b4\uc6a9"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ud50c\ub7ec\ud130 \uac15\uc758 \uc644\uac15"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"-\uc624\ub298\uc758-\ud68c\uace0",children:"\ud83d\udcad \uc624\ub298\uc758 \ud68c\uace0"}),"\n",(0,i.jsx)(e.h3,{id:"\uc798\ud55c-\uc810-",children:"\uc798\ud55c \uc810 \ud83d\udc4d"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ube61\uacf5"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\uac1c\uc120\ud560-\uc810-",children:"\uac1c\uc120\ud560 \uc810 \ud83d\udd28"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ud63c\uc790\uc11c \uc2e4\uc2b5 \ub0b4\uc6a9\uc744 \ucc98\uc74c\ubd80\ud130 \ud574\ubcfc \ud544\uc694\uac00 \uc788\ub294 \uac83 \uac19\uc74c"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\ubc30\uc6b4-\uc810-",children:"\ubc30\uc6b4 \uc810 \ud83d\udca1"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uc704\uc82f\ub4e4"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\ufe0f-\ucc38\uace0-\uc790\ub8cc",children:"\u270f\ufe0f \ucc38\uace0 \uc790\ub8cc"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Flutter \uacf5\uc2dd \ubb38\uc11c: ",(0,i.jsx)(e.a,{href:"https://docs.flutter.dev",children:"https://docs.flutter.dev"})]}),"\n"]})]})}function h(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(c,{...t})}):c(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>d});var l=n(6540);const i={},r=l.createContext(i);function s(t){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),l.createElement(r.Provider,{value:e},t.children)}}}]);