---
slug: wanna-exercise-board
title: 운동하실 앱을 만들면서 느낀 것!
authors: [junseok]
tags: [journal, dart]
date: 2025-04-28T20:00
---

# 📚 오늘의 학습 내용

- 조별 과제를 마무리하면서

이번 위치 기반 채팅앱 과제를 듣고 나서 예전부터 운동 관련해서 이 기능과 비슷한 서비스를 만들어 보고 싶었는데 때마침 이런 과제가 나와서 좋았고 팀원들도 저의 의견을 반영해 주셔서 감사했던 것 같음

그래서 내가 만들어 보고 싶은 서비스였기 때문에 평소보다는 의욕 넘치게 앱 로고도 만들어 보고 직접 와이어프레임도 만들었던 것 같음

---

### 빌드 문제

프로젝트를 시작하고 IOS 시뮬레이터 build가 안되어서 여러 가지 시도를 했고 가장 도움이 됐던 것은 `flutter run —verbose` 로 빌드과정을 콘솔에서 보면서 에러 메시지를 통해서 문제원인을 찾아갈 수 있었고 결국 빌드문제를 해결할 수 있었다.

---

### Firebase 연동 및 filter 기능 구현

> firebase를 통해 boards 데이터를 가지고 오고 특정 버튼을 누르면 게시글 가운데 축구, 농구, 풋살, 러닝 등 특정 운동에 관련된 게시글만을 띄우는 기능을 구현하고자 함

### ViewModel에서 필터 로직 내장하기

1. `BoardState`에 `filterType` 필드를 추가
2. `BoardViewModel` 에 `setFilter(String?)` 메서드 구현 → `state = ..` 로 필터 타입 변경
3. 상태 객체 안에서 `filteredBoards` 를 계산된 프로퍼티로 노출

```dart
class BoardState {
	final List<Board> boards;
	final String? filterType;

	BoardState({
		this.boards = const [], this.filterType
	});

	List<Board> get filteredBoards => filterType == null
	? boards
	: boards.where((board) => board.type == filterType).toList();

	BoardState copyWith({ List<Board>? boards, String? filterType}){
		return BoardState(
			boards : boards ?? this.boards,
			filterType : filterType
		)
	}
}
```

### Getter 문법

- 클래스 내의 변수의 값을 상태나 값을 계산한 다음에 제공
- `get foo` → `foo` 가 변수인 것
- `obj.foo` 로 사용 가능
- 매개변수는 받을 수 없음 (메서드는 받을 수 있음)

```dart
class BoardViewModel extends Notifier<BoardState>{
	@override
  build() {
    return BoardState(filterType: null);
  }

  void getBoards() async {
    BoardRepository boardRepository = BoardRepository();
    List<Board>? boards = await boardRepository.getBoardsData();
    state = state.copyWith(boards: boards);
  }

  void setFilter(String? type) {
    state = state.copyWith(filterType: type);
  }

}
```

### `getBoards()`

- `filter`가 없는 `boards` 를 가지고 와줌

### `setFilter()`

- `filter` 를 정함으로써 `state` 의 `filteredBoards` 의 상태가 변하게 됨

### `Board_page.dart`

```dart
Expanded(
  child: ListView.builder(
    itemCount: boardState.filteredBoards?.length ?? 0,
    itemBuilder: (context, index) {
      final List<Board> boards = boardState.filteredBoards!;
      return BoardItem(boards[index]);
    },
  ),
),
```

- `board_page` 에서 `boardState` 의 `boards` 가 아닌 `filteredBoards` 를 사용함으로써 `filterType` 의 유무에 따라 달라지는 `filteredBoards` 을 받을 수 있음

```dart
FilterButton(
  text: '전체',
  filterFunction: () => ref
    .read(boardViewModelProvider.notifier)
    .setFilter(null),
),
```

- `ref.read(boardViewModelProvider.notifier)` → boardViewModel
- `ref.watch(boardViewModelProvider)` → boardState

---

### 결론

- vue에서 다른 값이 변하면 자동으로 바뀌는 computed 하고 dart의 getter 가 비슷해서 dart의 getter를 활용해서 값이 변경됐을 때 자동으로 변경되는 변수를 만들 수 있음
