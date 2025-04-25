---
slug: building-simulator-error
title: Flutter IOS 시뮬레이터 빌드 에러
authors: [junseok]
tags: [journal, flutter]
date: 2025-04-25T20:00
---

# 🚨 발생한 문제/에러

플러터 숙련 주차 강의를 듣고 ‘위치 기반 채팅 앱’이라는 팀 프로젝트를 시작했다. 시작하고 나서 이상하게 빌드 오류가 생겼다. IOS 시뮬레이터로 빌드를 하려고 하면 빌드 중이라는 메시지가 나오고 계속 머물러 있었다.

### 1. 문제/에러 정의

```dart
// 에러 메시지
Junseoks-MacBook-Pro:wanna_exercise_app junseokyang$ flutter run
Launching lib/main.dart on iPhone 16 Pro in debug mode...
Running pod install...                                             40.9s
Running Xcode build...                                                 ⢿
```

- 시뮬레이터를 켜고 앱을 실행시키려고 하면 이런 메시지가 뜨면서 `Xcode build` 에서 멈췄다.

### 2. 시도한 해결 방법

- Chat GPT에게 물어본 결과 몇 가지 시도해 볼만한 내용들을 알려줬다.

1. Flutter clean & 의존성 재설치

```dart
cd ios
rm -rf Pods Podfile.lock
cd ..
flutter clean
flutter pub get
cd ios
pod install --repo-update
cd ..
flutter run

```

- Xcode build에서 시간이 오래 걸리니까 ios 폴더 안에 있는 Podfile.lock 파일을 제거하고 다시 의존성 파일들을 다운하는 것 같다.

⇒ 하지만 해결되지 않았다.

1. DerivedData 삭제

- Xcode 빌드 캐시(DerivedData)가 꼬여서 무한 대기 상태가 되는 경우가 많음

```dart
rm -rf ~/Library/Developer/Xcode/DerivedData
```

- 이후 다시 `flutter run` 을 실행했지만 여전히 안 됐음

1. Xcode 커맨드라인 도구 및 라이선스 확인

- 최신 도구 설치

```dart
xcode-select --install
```

- 라이선스 동의

```dart
sudo xcodebuild -license accept
```

1. Verbose 모드로 원인 파악

- 빌드 로그를 보면서 원인을 찾기

```dart
flutter run --verbose
```

1. Xcode에서 직접 빌드해 보기

- `ios/Runner.xcworkspace` 파일을 열고
- 상단의 Scheme를 `Runner > Any iOS Device (arm64)` 로 설정
- Product → Clean Build Folder
- Product → Build

⇒ 이 과정을 통해 Xcode가 뱉는 네이티브 에러(코드 사인, 플러그인 설정 누락 등)를 직접 확인할 수 있음

---

- 3번 과정에서 이런 에러 메시지가 나옴

```dart
Junseoks-MacBook-Pro:wanna_exercise_app junseokyang$ xcode-select --install
xcode-select: note: Command line tools are already installed. Use "Software Update" in System Settings or the softwareupdate command line interface to install updates
```

1. CLT 업데이트 확인하기

```dart
softwareupdate --list
softwareupdate --install "Command Line Tools for Xcode-XX.X"
```

(`"Command Line Tools for Xcode-XX.X"` 이름은 `--list` 출력에서 정확히 복사해 옵니다.)

→ 여기서 18.4 로 업그레이드를 함

1. **Xcode 자체 업데이트**

- App Store(앱스토어)를 열어 Xcode를 최신 버전으로 업데이트

1. Developer 경로 확인

```dart
xcode-select -p

//
/Applications/Xcode.app/Contents/Developer
```

1. 라이센스 재동의

- 때떄로 라이선스 문제가 겹쳐 있기도 함

```dart
sudo xcodebuild -license accept
```

---

### 3. 최종 해결 방법

- xcode workspace에서 직접 빌드를 해보고 Build successed가 나옴
- 컴파일 단계 (소스 코드 → 바이너리)에는 문제가 없다는 의미
- 이후의 앱 실행 단계 (시뮬레이터 → flutter 툴 )에서 걸리고 있는 것

```dart
[        ] executing: [/Users/junseokyang/Desktop/project/flutter/wanna_exercise_app/ios/]
xcrun xcodebuild -configuration Debug VERBOSE_SCRIPT_LOGGING=YES -workspace
Runner.xcworkspace -scheme Runner
BUILD_DIR=/Users/junseokyang/Desktop/project/flutter/wanna_exercise_app/build/ios -sdk
iphonesimulator -destination id=69DE6B74-91BF-4BEC-83C3-00B78FC881C7
SCRIPT_OUTPUT_STREAM_FILE=/var/folders/qg/lm1gtz4d0k94_jc8mdhsllym0000gn/T/flutter_tools.P
Dubxy/flutter_ios_build_temp_dirXXjEBy/pipe_to_stdout -resultBundlePath
/var/folders/qg/lm1gtz4d0k94_jc8mdhsllym0000gn/T/flutter_tools.PDubxy/flutter_ios_build_te
mp_dirXXjEBy/temporary_xcresult_bundle -resultBundleVersion 3
FLUTTER_SUPPRESS_ANALYTICS=true COMPILER_INDEX_STORE_ENABLE=NO
```

- 여전히 이런 메시지가 나오면서 빌드에 시간이 걸렸는데 Xcode에서 Product → Build 할 때 내부적으로 실행되는 xcodebuild와 거의 동일한 작업을 수행하는 것을 알았음
- Xcode 에서도 시간이 오래 걸려서 기다렸는데 해결이 됨
- 진행 상황 확인
  - 터미널에서 CPU 사용량이 높은지 확인하려면 Activity Monitor에서 `xcodebuild` 프로세스가 돌아가는지 보기
  - 디스크 / CPU를 쓰고 있다면 ‘빌드 중’인 상태

### 4. 새롭게 알게 된 점

- 생각보다 빌드 시간이 오래 걸린다는 것을 알게 됨
  - 20분 이상 걸렸음

### 5. 다음에 비슷한 문제를 만난다면?

- Xcode 버전을 업그레이드하고 빌드할 때 조금 더 기다려 보기
