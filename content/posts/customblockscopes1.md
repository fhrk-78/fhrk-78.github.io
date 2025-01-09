---
date: '2025-01-09T13:00:00+09:00'
draft: false
title: '独自フォーマットでデータ保存、Spigotプラグイン開発'
ShowToc: true
categories: ["備忘録"]
tags: ["java","spigot"]
---

こんにちは

私は先日、CommandBlockScopesのv1.2をリリースしました。

具体的なアップデート内容は、いくつかのコマンドの追加と**OriginalFormat**です。

OriginalFormatは、CommandBlockScopes独自のレジストリフォーマットです。

この記事では独自のフォーマットを実装するためのコードを雑に書いておきます。

## 1. ファイル作成

ファイル作成には、java.io.Fileクラスを使いました。

プラグインのデータフォルダーは`plugin.getDataFolder()`を使用して取得できるみたいです。

```java
package hoge.hoge.originalFormatTest;

import org.bukkit.plugin.java.JavaPlugin;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.text.MessageFormat;
import java.util.HashMap;

class OriginalFormat {
    private final Path path;

    public OriginalFormat(JavaPlugin plugin) {
        // コンストラクタ

        // プラグインからデータフォルダーを取得
        path = Paths.get(plugin.getDataFolder().toString(), "data.txt");

        // 親ディレクトリを作成
        File file = path.toFile();
        file.getParentFile().mkdirs();

        // 初回起動時は新しく作る
        if (!file.exists()) file.createNewFile();
    }
}
```

## 2. 書き込みメソッド

書き込みにはjava.nio.file.Filesを使いました。FileWriterを使う方法等もあるかもしれませんが、この記事ではFilesを使います。

```java
// ~省略~

class OriginalFormat {
    // ~省略~

    public void set(String key, String value) throws IOException {
        // 末尾に追加する
        Files.writeString(path, MessageFormat.format("{0},{1}\n", key, value), StandardOpenOption.APPEND, StandardOpenOption.CREATE);
    }
}
```

## 3. 読み込みメソッド

書き込みとAPIを使いました。

```java
// ~省略~

class OriginalFormat {
    // ~省略~

    public HashMap<String> getAll() throws IOException {
        var result = new HashMap<String>()

        // 1行ごとにループ
        for (String line : Files.readAllLines(path)) {
            var s = line.split(",");

            if (s.length != 2) continue; // 正しいフォーマットの行以外は除外

            result.put(s[0], s[1]);
        }

        return result;
    }

    public String get(String key) throws IOException {
        return getAll().get(key);
    }
}
```
