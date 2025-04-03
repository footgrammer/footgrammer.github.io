---
slug: flutter-team-project
title: 플러터 팀 프로젝트 시작
authors: [junseok]
tags: [journal, flutter]
date: 2025-04-03T20:00
---

# 2025-04-03-flutter-team-project

# 📚 오늘의 학습 내용

오늘은 새롭게 팀 프로젝트를 시작했다. 간단한 쇼핑몰을 만드는 것이었는데 복잡한 서비스는 아니지만 5명이 함께 팀 프로젝트를 하면서 깃헙 충돌도 나보고 협업을 체험할 수 있었다. 역시 지금까지는 혼자서만 개발을 해 봤기에 이런 경험이 없어서 간단하더라도 이렇게 업무를 분담하고 깃헙으로 협업을 해 보는 경험이 중요한 것 같다.

## ✍️ 주요 학습 내용

### 배운 내용

- 깃헙으로 협업하는 법

### 새로 알게 된 개념

- Commit Type
  - 타입은 태그와 제목으로 구성되고 태그는 영어로 쓰되 첫 문자는 대문자로 쓰기
  - `태그 : 제목` 의 형태
    - feat : 새로운 기능 추가
    - fix : 버그 수정
    - docs : 문서 수정
    - style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
    - refactor : 코드 리펙토링
    - test : 테스트 코드, 리펙토링 테스트 코드 추가
    - chore : 빌드 업무 수정, 패키지 매니저 수정
  영문으로 표기하는 경우 동사(원형)를 가장 앞에 두고 첫 글자는 대문자로 표기(과거 시제를 사용하지 않기)

### Branch 관련 git 명령어

**브랜치 생성**

`git switch -c [생성할 브랜치 이름]`

**브랜치 변경**

`git switch [브랜치 이름]`

브랜치 목록 보기

`git branch`

브랜치 삭제

`git branch -d [삭제할 브랜치 이름]`

### **깃에 업로드하기**

`git push origin [push할 브랜치 이름]`

origin : 원격 저장소 이름

push : 로컬 저장소의 변경사항을 원격 저장소에 업로드

### **현재 브랜치를 main 브랜치와 동일한 상태를 적용하기**

```dart
git rebase main
```

- 현재 작업 중인(main이 아닌 브랜치)에서 해당 명령어 입력
- 만약 feat/test에서 명령어를 입력했다면 feat/test/의 최신 커밋을 main과 동일하게 적용됨

---

### Git 명령 되돌리기

```dart
git reset --soft HEAD~1
```

- reset : 커밋 되돌리기
- soft : 커밋만 취소, 스테이지는 건들이지 않음
- HEAD~1 : 가장 최근에 커밋한 1개를 가리킴

<aside>
🔥

만약 작업 브랜치가 아닌 main 브랜치에 커밋을 했을 때 유용함

</aside>

---

### 브랜치로 작업하는 과정

1. git pull request extensions 로 브랜치 생성

→ 이 extension을 사용하면 깃헙에서 이슈에 연동해서 브랜치 생성이 가능하고 구현이 끝나면 브랜치를 제거할 수 있음

→ 이슈별로 작업 후 브랜치를 없애면서 작업이 가능

1. 코드 구현
2. 커밋 및 푸쉬
3. Pull Request 제출

- 개발자가 작업한 브랜치의 코드를 main 브랜치에 병합해 달라고 요청

1. 코드리뷰
2. Github 상에서 병합(merge)

- 누군가가 병합을 했는데 그 코드를 내가 최신화시키지 않고 내가 다시 PR을 하게 되면 내 코드로 최신 코드를 덮어씌울 수 있기 때문에 누군가 merge를 하면 코드를 최신화시키는 것이 중요.

1. 개발자는 병합된 원격 저장소의 main 브랜치의 코드를 로컬 저장소에 옮겨야 함

- `git pull`

1. 로컬 저장소의 main 브랜치와 원격 저장소의 main 브랜치가 동일하다면 본래 작업하던 브랜치로 돌아와 메인 브랜치와 상태를 동일하게 맞추는 작업이 필요

```dart
git rebase main
```

1. 다시 코드 구현

---

### `git upstream`

> 다른 개발자의 원격 저장소에 있는 변경사항을 가져오는 기능. 이를 통해 협업하고 있는 프로젝트의 최신 업데이트를 받아올 수 있음

1. Upstream 설정 방법
   1. 로컬 저장소의 터미널에서 `git remote add upstream [원격 저장소 URL]` 명령어 실행
   2. 이제 원격 저장소를 추가했으며 변경사항을 가져오기 위해 `git fetch upstream` 명령어 실행가능
2. upstream 설정 후 사용 방법
   1. `git fetch upstream` 명령어를 실행하여 원격 저장소의 변경사항을 로컬 저장소로 가져옴
   2. 가져온 변경사항을 로컬 브랜치에 병합하기 위해 `git merge upstream/[브랜치 이름]` 명령어 실행

명령어

## [**💋 명령어**](https://engineerinsight.tistory.com/234#%F0%9F%92%8B%C2%A0%EB%AA%85%EB%A0%B9%EC%96%B4-1)

1. `git remote add upstream [원격 저장소 URL]`: 로컬 저장소에 upstream 원격 저장소를 추가합니다.
2. `git remote -v`: 현재 설정된 원격 저장소 목록을 확인합니다.
3. `git fetch upstream`: upstream 원격 저장소의 변경사항을 로컬 저장소로 가져옵니다.
4. `git merge upstream/[브랜치 이름]`: 가져온 upstream 변경사항을 로컬 브랜치에 병합합니다.
5. `git remote remove upstream`: upstream 원격 저장소 설정을 제거합니다.

---

### 클린코드

- 섹션을 추출할 때 `메소드` 가 아닌 `StatelessWidget` 으로 추출하는 이유는 `BuildContext` 를 분리해 주기 위함.
- BuildContext를 분리해 주지 않으면 위젯 트리 상에서 다른 위젯과 공유되는 context를 사용하게 되고 이로 인해 다른 위젯에서 상태 변화로 인해 새롭게 빌드 될 때 상태와 관련이 없는 위젯들도 `함께 빌드되는 문제` 가 발생할 수 있음
- 위젯의 `리빌드 최소화` 를 하기 위해 StatelessWidget을 사용하는 것이 좋음

- 특정 페이지에서만 사용되는 위젯들은 앞에 \_를 추가해 `private 접근 제한자`를 이용하면 좋음

```dart
part of '../product_detail_screen.dart';

class _Header extends StatelessWidget {}
```

- `part` `part of` 를 활용해서 page위젯과 분리한 섹션 위젯들을 연결해 줄 수 있음
- 섹션들을 나눠서 관리해 주면 좋음

---

### 실습한 내용

- 우리 조는 먼저 조장의 레포지터리에서 fork를 해 나의 깃헙 레퍼지토리로 가져온 다음에 그 토드를 git clone 을 해서 나의 로컬 저장소에 가지고 왔다.
- 그 후에는 pull request extension을 통해서 이슈별로 브랜치를 생성해서 개발을 진행하고 푸시를 하고 pull request를 진행했다.
- 하지만 내 코드가 기존의 코드를 덮을 수 있기 때문에 pull request 를 하기 전에 먼저 git pull 을 통해서 가지고 오는 게 필요

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드
git upstream main
```

## 📚 내일 학습할 내용

- 상품 등록 페이지 제작

## 💭 오늘의 회고

### 잘한 점 👍

- 깃헙 모르는 것을 물어봄

### 개선할 점 🔨

- 모르는 것을 아는 척 하지 말고 물어보자!

### 배운 점 💡

- git 협업

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
