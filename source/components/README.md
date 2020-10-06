## List Dataset

Grove displays content in Lists. These Lists share a common data structure, so these templates are created to render Grove's markup from custom data.

### Formatting the Data

The dataset argument should contain an array of objects. Each object can have the following properties. Each property is optional.

**`title` _string_**
<br>represents the title of the item

**`link` _string \<URL\>_**
<br>An external link where more information can be found

**`image` _string \<URL\>_**
<br>A path to a promo image

**`description` _string_**
<br>A short description of the item

**`audio` _string \<URL\>_**
<br>A path to an audio file.

**`authors` _Array[string]_**
<br>An array of authors to display

**`timestamp` _string \<Date\>_**
<br>A `new Date()`-compatible timestamp

**`display` _boolean_**
<br>If set to `false`, do not display the item

### List Templates Example

```js
const dataset = [
  {
    title: "The Floofmeister 3000",
    link: "https://www.akc.org/dog-breeds/afghan-hound/",
    image: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
    description: "The Afghan Hound is an aloof and dignified aristocrat of sublime beauty. Despite his regal appearance, he is known for his profound loyalty, sensitive nature, and absolute love for those he calls his own.",
    authors: ["Good Boi", "Fluffy Wuff"],
    date: "1/20/2018"
  },
  {
    title: "Sir Snoots",
    link: "https://www.akc.org/dog-breeds/beagle/",
    image: "https://images.dog.ceo/breeds/beagle/n02088364_13428.jpg",
    description: "Not only is the Beagle an excellent hunting dog and loyal companion, it is also happy-go-lucky, funny, and—thanks to its pleading expression—cute. They were bred to hunt in packs, so they enjoy company and are generally easygoing.",
    authors: ["Bestest Boi"],
    date: "6/4/2019"
  },
  {
    title: "Snuggle McWuggle",
    link: "https://www.akc.org/dog-breeds/chow-chow/",
    image: "https://images.dog.ceo/breeds/chow/n02112137_2231.jpg",
    description: "The Chow Chow, an all-purpose dog of ancient China, presents the picture of a muscular, deep-chested aristocrat with an air of inscrutable timelessness. Dignified, serious-minded, and aloof, the Chow Chow is a breed of unique delights.",
    authors: [],
  }
]

const markup = Glade.components.ListD(dataset, "Dog List")

const parent = document.querySelector('.parent-element')
parent.insertAdjacentHTML('beforeend', markup)
```
