
#
> 프로젝트 설명

<br/>

 - wanted_pre_onboarding 선발과제를 구현해 놓은 프로젝트 입니다. 
 - react.js , styled-component를 통해 구현되었습니다.
 
<br/>

> 프로젝트 작동 순서 

 <br/>

 ```sh
 git clone https://github.com/stau0444/wanted_pre_onboarding.git

 cd wanted_pre_onboarding

 npm install 
 
 npm start
 ```

<br/>

#

## 1. Toggle


<img src="https://user-images.githubusercontent.com/51349774/151395336-a814d0a8-9c52-4cf9-9a43-f5ee24d2db0f.gif" width=300>

#

>구현 방식 
- 상태값 isOn을 handleSwitch 함수를 통해 핸들링하고 있습니다. 
- 배경이되는 Wrap 컴포넌트와 배경안의 버튼인 Round 컴포넌트를 나눴고 각각 styled-component를 통해 isOn을 props로 받아 css가 변경되도록 구현했습니다. 

<br/>


>실행방법
```
toggle의 배경(Wrap 컴포넌트를)을 클릭합니다. 
```

#

## 2. Tab


<img src=https://user-images.githubusercontent.com/51349774/151395928-78d94212-a24f-41fb-96f2-40e357cc94a2.gif width=300>

#

>구현 방식 
- CheckedId(체크된 Tab 인덱스값) , tabList(탭 리스트) 두가지 상태값을 사용했습니다. 
- tabList는 {name:"탭이름"} 형태의 오브젝트를 갖는 배열이며 tabList 는 map 함수를 통해 CustomTab 컴포넌트로 render 됩니다.
- checkedId는 체크된 탭의 인덱스 값이며 해당 값에 따라 styled-component props로 전달되어 css가 변경됩니다

<br/>


>실행방법
```
1. 인풋창에 추가할 탭이름을 적고 탭추가 버튼을 누르면 {name:"추가된탭"} 형태로 tabList에 오브젝트가 추가된다. 
2. 각각의 탭을 클릭하면 클릭한 탭의 css가 변경된다.  
```


#
## 3. Tag


<img src="https://user-images.githubusercontent.com/51349774/151396079-7c3aa66e-33d1-4c7c-b3f0-d36dedbdd111.gif" width=300>


#

<br/>


>구현 방식 

- tagId, tagList 두가지 상태값을 사용하고 있습니다. 
- 하나의 태그는  인풋창에서 태그입력 후 Enter키를 누를때  {id:1 , name:"태그이름"} 형태로 tagList(배열)에 저장됩니다. 
- id 값은 태그가 추가될때마다 1씩 올라가며  tagList는 map 함수를 통해  TagPiece 컴포넌트로 render 됩니다. 
- 태그 삭제시에는 tagList에서 삭제버튼을 클릭한 태그의 id를 가져와 filter 함수를 통해 해당하는 id값과 일치되지 않는 것만 rerender 되도록 구현했습니다. 

<br/>

>실행방법
```
1. 인풋창에 추가할 태그명을 적은 후 Enter 키를 누른다
2. 삭제시에는 Tag이름 옆 - 버튼을 누른다.  
```

#
## 4. AutoComplete


<img src="https://user-images.githubusercontent.com/51349774/151396043-43d5cdd8-a9ac-43fb-8686-e09a57e252cf.gif" width=300>


#

>구현 방식 

- isEmpty , keyword 두가지 상태값을 사용하고 있습니다.  
- isEmpty는 검색창이 비어있을 경우의 boolean 값 입니다. 
- isEmpty값에 따라 검색창 css가 변경됩니다. 
- keyword는 인풋창에 onChange 이벤트를 통해 들어오는 이벤트값(검색어)입니다. 
- keywordList는 서버에서 추천 검색어를 가져오는 것을 대신하는 임의의 데이터(문자열 배열)입니다.
- keyword 변경시 filter 함수를 통해  keywordList에서 keyword로 시작하는 것만 렌더링 되며 리스트 클릭시 해당 추천 검색어가 선택되도록 구현했습니다. 

<br/>


>실행방법
```
1. 인풋창에 검색어를 입력한다
2. 추천 검색어를 클릭하면 자동으로 단어가 완성된다.
3. 취소시에는 검색창 오른쪽 x버튼을 누른다

```


#
## 5. ClickToEdit


<img src="https://user-images.githubusercontent.com/51349774/151396098-ed9a3697-116f-4430-80ba-5293670fd7cc.gif#" width=300>


#
>구현 방식 

- name ,age 두가지 상태값이 사용됩니다. onBlur 이벤트를 통해 인풋창에 입력한 후에 포커스가 아웃되면 입력값이 변경됩니다.


>실행방법
```
1. 인풋창에 값을 입력하고 탭키를 눌러 다음 탭으로 넘어간다.
```

#
## 6. Modal


<img src="https://user-images.githubusercontent.com/51349774/151397029-ea7b5e54-2ee0-4c7d-a6cc-78525ea2a07a.gif" width=300>


#

> 구현 방식 

- isOpen이라는 boolean 값을 상태값으로 사용합니다. isOpen은 ModalBackground 컴포넌트로 props로 전달되어 display값을 변경합니다. 