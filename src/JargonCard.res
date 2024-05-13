module JargonCardFragment = %relay(`
  fragment JargonCard_jargon on jargon {
    id
    name
    updated_at
    jargon_categories {
      category {
        acronym
      }
    }
    translations(order_by: { name: asc }, limit: 20) {
      id
      name
    }
    comments_aggregate {
      aggregate {
        count
      }
    }
  }
`)

let badgify = text => <div key={text} className="badge badge-sm"> {text->React.string} </div>

@react.component
let make = (~jargonCardRef) => {
  let {
    id,
    name,
    updated_at,
    jargon_categories,
    translations,
    comments_aggregate,
  } = JargonCardFragment.use(jargonCardRef)

  <div className="h-[100%] p-4" onClick={_ => RescriptReactRouter.push(`/jargon/${id}`)}>
    // first row
    <div className="flex justify-between">
      <div className="text-xs dark:text-zinc-500">
        {`최근 활동 ${updated_at->Date.fromString->DateFormat.timeAgo}`->React.string}
      </div>
      <div className="flex gap-1">
        {jargon_categories
        ->Array.map(r => r.category.acronym->badgify)
        ->React.array}
      </div>
    </div>
    // second row
    <div className="flex-none inline-grid grid-cols-1">
      <div className="font-semibold group-hover:text-teal-700 dark:group-hover:text-teal-200">
        {name->React.string}
      </div>
      <div
        className="overflow-hidden group-hover:overflow-visible whitespace-nowrap group-hover:whitespace-normal text-ellipsis font-regular text-zinc-500 group-hover:text-teal-600 dark:text-zinc-400 dark:group-hover:text-teal-300">
        <ol>
          {translations
          ->Array.map(({id, name}) => <li key={id}> {name->React.string} </li>)
          ->React.array}
        </ol>
      </div>
    </div>
    // third row
    <div className="flex-none text-xs dark:text-zinc-400">
      {`댓글 ${comments_aggregate.aggregate
        ->Option.map(x => x.count)
        ->Option.getOr(0)
        ->Int.toString}개`->React.string}
    </div>
  </div>
}
