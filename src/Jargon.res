type card = {
  id: string,
  name: string,
  updated_at: Js.Date.t,
  translations: array<(string, string)>,
  commentsCount: int,
}

let joinTranslations = translations =>
  translations
  ->Js.Dict.entries
  ->Js.Array2.sortInPlaceWith(((k1, v1), (k2, v2)) => {
    if v2 - v1 != 0 {
      v2 - v1
    } else if k1 > k2 {
      1
    } else if k1 < k2 {
      -1
    } else {
      0
    }
  })
  ->Array.map(((k, _)) => k)
  ->Js.Array2.joinWith(",")

type translation = {
  id: string,
  korean: string,
  @as("associated_comment") associatedComment: string,
}
type add = {english: string, korean: string, comment: string, withoutKorean: bool}
type addTranslation = {id: string, korean: string, comment: string}

type vote = {jargonID: string, translations: array<string>}

type axis = English | Chrono
