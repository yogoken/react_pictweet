json.data(@comment) {|d| json.extract!(d, :text, :user)}
# json.data(@data)で配列状態のデータを取得。その後{}内でdに分解してextractでデータを取得。
# dは@dataの配列を分解したもの。:tweetと:userでd, dataに結びつくレコードを取ってくる。
