# otanisan

[![Greenkeeper badge](https://badges.greenkeeper.io/YutaGoto/otanisan.svg)](https://greenkeeper.io/)

これは大谷さんのwebサイトを作るためのリポジトリです。

## Set up
### nodeのインストール（windows）

[nodejs.org]( https://nodejs.org/en/ )にアクセスして、ダウンロードしてインストールしましょう。インストール先はデフォルトのままでおｋ！

ここでCommand Promptを立ち上げましょう。windowsキーからスタートメニューを開いて、*cmd*とかで検索すればヒットするはずです。

っで、その画面に

`` node -v ``

を入力して、バージョンが表示されるはず。。3つの数字（v0.12.2など）が表示されたことを確認する。

### bower のインストール
nodeが使えることを確認したら、npmコマンドも使えるはずなので、

``npm -v``

で確認できます。2.7.4など表示されればおｋ

ここで

``npm install -g bower``

でBowerのインストールをします。これは、いろいろプラグインとかをプロジェクトに詰め込んでいくときとかに使います。

``bower -v``

と入力して1.5.3とか3つの数字が表示されればおｋ

* 現状Databaseは存在しないので、ここまでで問題ないですね。

### Git
gitのコマンドはもうしわけないけど割愛。[さる](http://www.backlog.jp/git-guide/)を見ながら自習でよろ。

## 作業の仕方
作業を初めてするときは``git pull origin master``で最新の``git branch <好きなブランチ名>``で作業ブランチを切って作業しましょう。っで``git checkout <自身でつけたブランチ名>``でそのブランチに移動できます！

こまめにpushしつつ、masterブランチをpullしつつ進めていって、一通り一つの機能やページが終わったらプルリクエストを作ってください。作り方はgithubの作業リポジトリページにcreate pullrequest的なボタンが表示されるんで、適当なコメントをそえて作ってっちょ。

作られたら、ごっちさんが確認してよい感じであればくっつけますし、だめそうであれば返信します。そんな感じですすめていきます。複数人のメンバーがいたらのお話。

## ブラウザでの確認のしかた
cmdの画面でプロジェクトディレクトリまで移動する。

例）``cd otanisan/``

初めて起動させるとき、またはなんらかのプラグインを追加したときは

``npm install``

を入力して実行させる。

そして、

``node bin/www``

を入力してサーバーを立ち上げる
てきとうにぶらうざを立ち上げて [http://localhost:3000](http://localhost:3000) にアクセスする。

## Acknowledgement

* Charactor: Otani-san [Twitter](https://twitter.com/ota_25)
* Coder: Yuta Goto (Goche) [Twiter](https://twitter.com/gggooottto)

* Bootstrap: [Honoha](http://honokak.osaka/)
* Photographer: Otani-san [Twitter](https://twitter.com/ota_25)
