---
slug: flutter-study
title: 플러터 테마, 라우터, 반응형 디자인
authors: [junseok]
tags: [journal, flutter]
date: 2025-05-12T20:00
---

# 📚 오늘의 학습 내용

- 플러터 테마 익스텐션 설정
- GoRouter를 활용한 플러터 라우팅
- 반응형 디자인 만들기

## ✍️ 주요 학습 내용

### 새로 알게된 개념

- ThemeExtension을 확장해서 테마를 확장시킬 수 있음

`extends ThemeExtension<클래스이름>`

```dart
class AppThemeExtension extends ThemeExtension<AppThemeExtension> {
  AppThemeExtension({
    required this.main,
    required this.mainLight,
    required this.sub,
    required this.background,
  });

  final Color main;
  final Color mainLight;
  final Color sub;
  final Color background;

  @override
  ThemeExtension<AppThemeExtension> lerp(
    covariant AppThemeExtension? other,
    double t,
  ) {
    if (other == null) {
      return this;
    }
    print(t);
    return AppThemeExtension(
      main: Color.lerp(main, other.main, t)!,
      mainLight: Color.lerp(mainLight, other.mainLight, t)!,
      sub: Color.lerp(sub, other.sub, t)!,
      background: Color.lerp(background, other.background, t)!,
    );
  }
}

class LightTheme extends AppThemeExtension {
	LightTheme({
		super.main = Colors.red,
		super.mainLight = const Color(0xAAFF0000)
		uper.sub = const Color(0xFFFFF000), // 0xFF(투명도)FF(R)F0(G)00(B)
    super.background = Colors.white,
	})
}

class DartTheme extends AppThemeExtension {
  DartTheme({
    super.main = const Color(0XFF0000FF),
    super.mainLight = const Color.fromARGB(170, 151, 151, 168),
    super.sub = const Color(0xFFFF00FF),
    super.background = Colors.black,
  });
}
```

### theme.dart

```dart
import 'package:flutter/material.dart';
import 'package:flutter_theme_example/custom_theme.dart';

final lightTheme = _theme(Brightness.light, LightTheme());
final darkTheme = _theme(Brightness.dark, DartTheme());

ThemeData _theme(Brightness brightness, AppThemeExtension ext) {
  return ThemeData(
    brightness: brightness,
    useMaterial3: true,
    scaffoldBackgroundColor: ext.background,
    colorScheme: ColorScheme.fromSeed(
      brightness: brightness,
      seedColor: ext.main,
    ),
    extensions: [ext],
  );
}

// extension 클래스를 확장해 주는 기능
// BuildContext 클래스를 확장해 주는 것
// 추가적인 메서드를 구현할 수 있게 해 줌
extension BuildContextExtension on BuildContext {
  ThemeData get theme => Theme.of(this);
  AppThemeExtension get appColor => theme.extension<AppThemeExtension>()!;
}

// Theme.of(context).primaryColor 로 접근을 했지만
// context.theme
// context.appColor 이렇게 접근이 가능함
```

### Color Scheme

| 속성 이름            | 설명                                                 |
| -------------------- | ---------------------------------------------------- |
| `primary`            | 앱의 주 색상. 버튼, 활성화된 상태 등에 사용됨.       |
| `onPrimary`          | `primary` 위에 놓일 텍스트/아이콘 색상.              |
| `secondary`          | 보조 색상. 강조 요소 등에 사용.                      |
| `onSecondary`        | `secondary` 위에 놓일 텍스트/아이콘 색상.            |
| `background`         | 전체 화면 배경 색상.                                 |
| `onBackground`       | 배경 위의 텍스트/아이콘 색상.                        |
| `surface`            | 카드, 시트(sheet), 다이얼로그 등 표면 요소의 배경색. |
| `onSurface`          | `surface` 위에 놓이는 텍스트/아이콘 색상.            |
| `error`              | 오류 메시지 등에 사용될 색상.                        |
| `onError`            | `error` 위에 표시될 텍스트/아이콘 색상.              |
| `primaryContainer`   | primary의 변형 색상.                                 |
| `onPrimaryContainer` | primaryContainer 위에 표시될 텍스트 색상.            |
| ...                  | (MD3에서는 더 많은 필드 제공)                        |

- 필요하면 `Theme.of(Context).colorScheme.primary` 로 접근 가능

---

# GoRouter

### 패키지 설치

`flutter pub add go_router`

<aside>
📝

### 새로 알았던 내용

</aside>

/post/1

→ 주소창에서 바로 상세 페이지로 이동해도 뒤로 가기를 하면 `PostListPage`가 나옴. 왜냐하면 GoRouter에서 / → /Post → /Post/id 이렇게 스택을 쌓았기 때문

### `Router.dart`

```dart
import 'package:fluuter_go_router/pages/error_page.dart';
import 'package:fluuter_go_router/pages/home_page.dart';
import 'package:fluuter_go_router/pages/post_detail_page.dart';
import 'package:fluuter_go_router/pages/post_list_page.dart';
import 'package:fluuter_go_router/pages/search_page.dart';
import 'package:go_router/go_router.dart';

final router = GoRouter(
  initialLocation: '/',
  errorBuilder: (context, state) {
    return ErrorPage();
  },
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => HomePage(),
      routes: [
        GoRoute(
          path: 'post',
          builder: (context, state) => PostListPage(),
          routes: [
            GoRoute(
              path: ':id',
              builder: (context, state) {
                //
                final id = int.tryParse(state.pathParameters['id'] ?? '');
                if (id == null) {
                  return ErrorPage();
                }
                return PostDetailPage(id: id);
              },
            ),
          ],
        ),
        GoRoute(
          path: 'search',
          builder: (context, state) {
            final text = state.uri.queryParameters['text'] ?? '';
            if (text.trim().isEmpty) {
              return ErrorPage();
            }
            return SearchPage(text: text);
          },
        ),
      ],
    ),
  ],
);

```

### post/:id

`int.tryParse(state.pathParameters[’id’] ?? ‘’` 로 접근

### search?text=text

```dart
final text = state.uri.queryParameters[’text’] ?? ‘’
if(text.trim().isEmpty){
	return ErrorPage();
}
return SearchPage(text : text);
```

---

# 반응형 디자인

<aside>
📚

**디바이스의 가로 크기를 기준으로 UI재배치 할 분기점(`Breakpoint`) 설정해서 구현**

- `1024` 이상 : PC
- `768` 이상 : 태블릿
- `600` 이상 : 소형태블릿 (갤럭시 Z 폴드5 해당)
- `480` 이상 : 모바일 가로모드
</aside>

```dart
class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
	    // constraints : BoxConstraints
      builder: (context, constraints) {
        if (constraints.maxWidth >= 768) {
          // 태블릿용 위젯 리턴
          return HomeBodyTablet();
        }
        if (constraints.maxWidth >= 600) {
          // 소형태블릿용 위젯 리턴
          return HomeBodyTabletSm();
        }
        if (constraints.maxWidth >= 480) {
          // 모바일 가로모드용 위젯 리턴
          return HomeBodyLandscape();
        }
        // 모바일 세로
        return HomeBody();
      },
    );
  }
}
```

### MediaQuery 사용

```dart
class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // width와 height를 가지고 있는 Size 클래스
    Size size = MediaQuery.sizeOf(context);
    double deviceWidth = size.width;
    if (deviceWidth >= 768) {
      // 태블릿용 위젯 리턴
      return HomeBodyTablet();
    }
    if (deviceWidth >= 600) {
      // 소형태블릿용 위젯 리턴
      return HomeBodyTabletSm();
    }

    if (deviceWidth >= 480) {
      // 모바일 가로모드용 위젯 리턴
      return HomeBodyLandscape();
    }
    // 모바일 세로
    return HomeBody();
  }
}
```

그리고 `SizedBox(width : 250, child : widget)` 이렇게 활용해서 테블릿으로 바뀔 때 왼쪽 위젯의 길이가 고정되고 오른쪽은 `double.infinity` 를 활용해서 길이를 늘리는 방식이 인상깊었음

### 사용법

```dart
import 'package:flutter/material.dart';
import 'package:flutter_responsive_ui/chat_detail_view.dart';
import 'package:flutter_responsive_ui/chat_list_view.dart';
import 'package:flutter_responsive_ui/responsive_view.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ResponsiveView(
      mobile: _HomePageMobile(),
      tablet600: _HomePageTablet600(),
    );
  }
}

class _HomePageMobile extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(body: ChatListView());
  }
}

class _HomePageTablet600 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          //
          SizedBox(width: 250, child: ChatListView()),
          Expanded(child: ChatDetailView()),
        ],
      ),
    );
  }
}

```

- 홈페이지에서 기기별 불러오는 위젯을 달리해 반응형 디자인을 할 수 있었음

```dart
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_responsive_ui/chat_list_item.dart';

final colors = List.generate(100, (index) {
  final random = Random();

  return Color.fromARGB(
    255,
    random.nextInt(256),
    random.nextInt(256),
    random.nextInt(256),
  );
});

class ChatListView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      padding: EdgeInsets.symmetric(horizontal: 20),
      itemBuilder: (context, index) {
        //
        return ChatListItem(color: colors[index], isSend: false);
      },
    );
  }
}

```

- 랜덤한 색상을 줄 때 0-255까지의 값을 랜덤으로 줘서 랜덤 색상을 만드는 방법이 인상적이었음

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드
final colors = List.generate(100, (index){
	final random = Random();
	return Color.fromARGB(255,
	random.nextInt(256),
	random.nextInt(256),
	random.nextInt(256));
})
```

## 📚 내일 학습할 내용

- 개인과제 시작

## 💭 오늘의 회고

### 잘한 점 👍

- 강의에 집중할 수 있었음

### 개선할 점 🔨

- 아침 지각하지 않기!

### 배운 점 💡

- 반응형 디자인을 할 때 기기별 규격 사이즈 기준

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
