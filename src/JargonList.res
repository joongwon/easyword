open Jargon

@react.component
let make = (~order, ~query as regexQuery) => {
  let (axis, direction) = order

  open Firebase

  let jargonsCollection = useFirestore()->collection(~path="jargons")
  let queryConstraint = {
    let language = switch axis {
    | English => "english"
    | Korean => "korean"
    | Chrono => "timestamp"
    }
    orderBy(language, ~direction)
  }
  let jargonsQuery = jargonsCollection->query([queryConstraint])
  let {status, data: jargons} =
    jargonsQuery->useFirestoreCollectionData(~options=reactFireOptions(~idField="id", ()), ())

  switch status {
  | #loading =>
    <div className="h-screen grid justify-center content-center">
      <Loader />
    </div>

  | #success =>
    switch jargons {
    | None => React.null
    | Some(jargons) =>
      let regex = {
        let matchAll = %re("/.*/")
        try Js.Re.fromString(regexQuery) catch {
        | Js.Exn.Error(obj) => {
            obj->Js.Exn.message->Option.forEach(Js.log)
            matchAll
          }
        }
      }
      let rows = jargons->Array.keepMap(({english, korean} as jargon: Jargon.t) => {
        switch (english->Js.String2.match_(regex), korean->Js.String2.match_(regex)) {
        | (None, None) => None
        | _ => Some(<JargonCard jargon axis key={jargon.id} />)
        }
      })

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-2">
        {rows->React.array}
      </div>
    }
  }
}
