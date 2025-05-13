---
slug: flutter-notification
title: 다트 기초 문법 익히기
authors: [junseok]
tags: [journal, flutter]
date: 2025-05-13T20:00
---

# 📚 오늘의 학습 내용

- 플러터 푸시알림 보내기

## ✍️ 주요 학습 내용

## 플러터 푸시 기능

<!-- truncate -->

- 패키지 설치

`flutter pub add flutter_local_notifications`

### IOS 설정

- `ios/Runner/AppDelegate.swift`

```swift
import Flutter
import UIKit
import flutter_local_notifications

@main
@objc class AppDelegate: FlutterAppDelegate {
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {

    // This is required to make any communication available in the action isolate.
    FlutterLocalNotificationsPlugin.setPluginRegistrantCallback { (registry) in
        GeneratedPluginRegistrant.register(with: registry)
    }

    if #available(iOS 10.0, *) {
    UNUserNotificationCenter.current().delegate = self as? UNUserNotificationCenterDelegate
    }

    GeneratedPluginRegistrant.register(with: self)
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }
}

```

---

### 안드로이드 설정

- `android/app/build.gradle.kts`

```dart
plugins {
    id("com.android.application")
    id("kotlin-android")
    // The Flutter Gradle Plugin must be applied after the Android and Kotlin Gradle plugins.
    id("dev.flutter.flutter-gradle-plugin")
}

android {
    namespace = "com.example.flutter_notification_example"
    compileSdk = 34
    ndkVersion = flutter.ndkVersion

    compileOptions {
        coreLibraryDesugaringEnabled true
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }

    kotlinOptions {
        jvmTarget = JavaVersion.VERSION_11.toString()
    }

    defaultConfig {
        multiDexEnabled true
        // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).
        applicationId = "com.example.flutter_notification_example"
        // You can update the following values to match your application needs.
        // For more information, see: https://flutter.dev/to/review-gradle-config.
        minSdk = flutter.minSdkVersion
        targetSdk = 34
        versionCode = flutter.versionCode
        versionName = flutter.versionName
    }

    buildTypes {
        release {
            // TODO: Add your own signing config for the release build.
            // Signing with the debug keys for now, so `flutter run --release` works.
            signingConfig = signingConfigs.getByName("debug")
        }
    }
}

dependencies {
  coreLibraryDesugaring 'com.android.tools:desugar_jdk_libs:1.2.2'
  implementation 'androidx.window:window:1.0.0'
  implementation 'androidx.window:window-java:1.0.0'
}

flutter {
    source = "../.."
}

```

- `android/app/src/main/AndroidManifest.xml`

```dart
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
    <uses-permission android:name="android.permission.VIBRATE" />
    <uses-permission android:name="android.permission.USE_FULL_SCREEN_INTENT" />
    <uses-permission android:name="android.permission.USE_EXACT_ALARM" />
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE_SPECIAL_USE" />
    <application
        android:label="flutter_notification_example"
        android:name="${applicationName}"
        android:icon="@mipmap/ic_launcher">
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:launchMode="singleTop"
            android:taskAffinity=""
            android:theme="@style/LaunchTheme"
            android:configChanges="orientation|keyboardHidden|keyboard|screenSize|smallestScreenSize|locale|layoutDirection|fontScale|screenLayout|density|uiMode"
            android:hardwareAccelerated="true"
            android:showWhenLocked="true"
            android:turnScreenOn="true"
            android:windowSoftInputMode="adjustResize">
            <!-- Specifies an Android theme to apply to this Activity as soon as
                 the Android process has started. This theme is visible to the user
                 while the Flutter UI initializes. After that, this theme continues
                 to determine the Window background behind the Flutter UI. -->
            <meta-data
              android:name="io.flutter.embedding.android.NormalTheme"
              android:resource="@style/NormalTheme"
              />
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </activity>
        <!-- Don't delete the meta-data below.
             This is used by the Flutter tool to generate GeneratedPluginRegistrant.java -->
        <meta-data
            android:name="flutterEmbedding"
            android:value="2" />

        <receiver android:exported="false" android:name="com.dexterous.flutterlocalnotifications.ActionBroadcastReceiver" />
        <receiver android:exported="false" android:name="com.dexterous.flutterlocalnotifications.ScheduledNotificationReceiver" />
        <receiver android:exported="false" android:name="com.dexterous.flutterlocalnotifications.ScheduledNotificationBootReceiver">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED"/>
                <action android:name="android.intent.action.MY_PACKAGE_REPLACED"/>
                <action android:name="android.intent.action.QUICKBOOT_POWERON" />
                <action android:name="com.htc.intent.action.QUICKBOOT_POWERON"/>
            </intent-filter>
        </receiver>
    </application>
    <!-- Required to query activities that can process text, see:
         https://developer.android.com/training/package-visibility and
         https://developer.android.com/reference/android/content/Intent#ACTION_PROCESS_TEXT.

         In particular, this is used by the Flutter engine in io.flutter.plugin.text.ProcessTextPlugin. -->
    <queries>
        <intent>
            <action android:name="android.intent.action.PROCESS_TEXT"/>
            <data android:mimeType="text/plain"/>
        </intent>
    </queries>
</manifest>

```

---

## Notification_helper.dart

```dart
@pragma('vm:entry-point')
void notificationTapOnBackground(NotificationResponse response) {}
```

로컬 노티피케이션 백그라운드에서 실행되는 함수는 앱 내에서 실행되지 않고 백그라운드에서 실행됨.

→ 함수가 직접적으로 호출되지 않을 때 dart 컴파일러가 릴리즈 모드로 빌드를 할 때 사용하지 않는 함수를 제거하게 됨

→ 하지만 `@pragma('vm:entry-point')` 를 붙이면 지우지 말라고 컴파일러에게 알려주는 것임

→ 반드시 붙이기!

### `Main.dart`

```dart
import 'package:flutter/material.dart';
import 'package:flutter_notification_example/notification_helper.dart';

void main() async {
  // flutter 앱이 실행되기 전에 네이티브 기능들을 초기화해줄 때 반드시 호출해야 되는 메서드
  WidgetsFlutterBinding.ensureInitialized();
  NotificationHelper.init();

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: MyHomePage());
  }
}

class MyHomePage extends StatefulWidget {
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    NotificationHelper.show('hello', '알림 테스트입니다');
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Column(
        children: [
          Text('$_counter'),
          ElevatedButton(
            onPressed: _incrementCounter,
            child: Center(child: Text('Click Here')),
          ),
        ],
      ),
    );
  }
}

```

1. void main 함수 `async` 추가해 주기
2. main 함수 내에 초기화 함수 넣기

```dart
WidgetsFlutterBinding.ensureInitialized();
NotificationHelper.init();
```

1. 원하는 트리거에 푸시알림 코드 구현하기

`NotificationHelper.show('hello', '알림 테스트입니다');`

---

### Groovy랑 Kotlin DSL 차이

Gradle 빌드 도구에서 코드를 쓰는 방식이 틀려서 에러가 발생해서 그 차이를 chatGpt를 통해 학습했다.

`Groovy`

- 편하게 말하는 말투
- coreLibraryDesugaring ‘무언가’

`Kotlin DSL`

- 정확하게 말하는 말투
- coreLibraryDesugaring(’무언가’)

## 🚨 발생한 문제/에러

- 안드로이드 빌드 에러

  ### 1. 문제/에러 정의

  - Gradle 빌드 도구에서 코드를 쓰는 방식이 틀려서 에러가 발생

  ### 2. 시도한 해결 방법

  ### 3. 최종 해결 방법

  1. 작은따옴표(’’)를 써서 생긴 오류

  - Kotlin DSL 에서 ‘’는 문자 1개만 넣는 용도
  - 문자열은 항상 “큰따옴표”를 써야 함
  - 틀린 코드
    `implementation 'androidx.window:window:1.0.0'`
  - 고친 코드
    `implementation("androidx.window:window:1.0.0")`

  1. Groovy 문법을 그대로 써서 생긴 오류

  - 틀린 코드
    `coreLibraryDesugaring 'com.android.tools:desugar_jdk_libs:1.2.2'`
  - 고친 코드
    `coreLibraryDesugaring("com.android.tools:desugar_jdk_libs:2.1.4")`

  3. desugaring 활성화 문법 오류

  - 틀린 코드
    `coreLibraryDesugaringEnabled = true`
  - 고친 코드
    `isCoreLibraryDesugaringEnabled = true`
    → 버전이 바뀌면서 설정법이 바뀐 듯 하다.

  1. 사용 중인 라이브러리의 요구사항을 몰라서 생긴 버전 오류

  - 오류 메시지
  - desugar_jdk_libs는 2.1.4 이상이 필요해요!
  - 고친 코드
    - `coreLibraryDesugaring("com.android.tools:desugar_jdk_libs:2.1.4")`

  ### 최종 코드 (`app/build.gradle.kts`)

  ```dart
  plugins {
      id("com.android.application")
      id("kotlin-android")
      // The Flutter Gradle Plugin must be applied after the Android and Kotlin Gradle plugins.
      id("dev.flutter.flutter-gradle-plugin")
  }

  android {
      namespace = "com.example.flutter_notification_example"
      compileSdk = 34
      ndkVersion = flutter.ndkVersion

      compileOptions {
          isCoreLibraryDesugaringEnabled = true
          sourceCompatibility = JavaVersion.VERSION_11
          targetCompatibility = JavaVersion.VERSION_11
      }

      kotlinOptions {
          jvmTarget = JavaVersion.VERSION_11.toString()
      }

      defaultConfig {
          multiDexEnabled = true
          // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).
          applicationId = "com.example.flutter_notification_example"
          // You can update the following values to match your application needs.
          // For more information, see: https://flutter.dev/to/review-gradle-config.
          minSdk = flutter.minSdkVersion
          targetSdk = 34
          versionCode = flutter.versionCode
          versionName = flutter.versionName
      }

      buildTypes {
          release {
              // TODO: Add your own signing config for the release build.
              // Signing with the debug keys for now, so `flutter run --release` works.
              signingConfig = signingConfigs.getByName("debug")
          }
      }
  }

  dependencies {
    coreLibraryDesugaring("com.android.tools:desugar_jdk_libs:2.1.4")
    implementation("androidx.window:window:1.0.0")
    implementation("androidx.window:window-java:1.0.0")
  }

  flutter {
      source = "../.."
  }

  ```

  ### 4. 새롭게 알게 된 점

  | 문제 상황                                        | 원인                             | 해결 방법                             |
  | ------------------------------------------------ | -------------------------------- | ------------------------------------- |
  | 작은따옴표 사용                                  | Kotlin DSL은 `"큰따옴표"`만 사용 | `"..."`로 바꾸기                      |
  | Groovy 스타일 코드 사용                          | Kotlin DSL은 함수 호출 형식 필요 | `함수이름("값")` 형태로 바꾸기        |
  | DSL 키워드 오타 (`coreLibraryDesugaringEnabled`) | Kotlin DSL은 `is` 접두어 필요    | `isCoreLibraryDesugaringEnabled` 사용 |
  | desugar_jdk_libs 버전 낮음                       | 라이브러리가 Java 8+ 기능 요구   | 버전을 `2.1.4` 이상으로 올리기        |

  ### 5. 다음에 비슷한 문제를 만난다면?

  - ChatGPT ㄱㄱ

## 📝 코드 스니펫

```dart
// 오늘 배운 주요 코드
NotificationHelper.show('hello', '알림 테스트입니다');
```

## 📚 내일 학습할 내용

- 개인과제 시작

## 💭 오늘의 회고

### 잘한 점 👍

- 빌드문제 해결

### 개선할 점 🔨

### 배운 점 💡

## ✏️ 참고 자료

- Flutter 공식 문서: [https://docs.flutter.dev](https://docs.flutter.dev)
