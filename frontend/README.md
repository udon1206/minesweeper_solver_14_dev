## 環境
vite と pnpm があれば動くはず

## 起動

```
pnpm vite
```

## 注意点
- `wall` のルールにも対応しています。`,` 区切りで空白なしで入力してください (そのうち UI をもう少しどうにかします)
- `+` には対応していますが、 `#` はまだ未対応です
- 入力する際に、`-2` は '?' を `-1` は未確定、`-3` は地雷を意味しています (そのうちどうにかします)
- solver が起動しているのを確認したのち、 `solve` ボタンを押すと確定した安全なマスが緑色で表示されます。地雷も確定したマスはすべて自動で配置されます
