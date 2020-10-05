// JSON Structure for Lists
/*
[
  {
    "title": "Title of Post",
    "link": "Link to Post",
    "image": "Promo image for Post",
    "description": "A short description"
    "authors": ["Author Name", "Author Name"]
    "timestamp": ""
  }
]
*/

import ListB from './lists/ListB'

const templates = {
  b: ListB,
}

function List (listType, listTitle, dataset, options) {
  const listTemplate = templates[listType]
  if (!listTemplate) {
    throw new ReferenceError(`Template not found for List "${listType}"`)
  }

  return listTemplate(dataset, listTitle, options)
}

export default List
