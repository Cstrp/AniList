import './styles/main.scss'
import axios from 'axios'
import { addSyntheticLeadingComment } from 'typescript'

const search = document.querySelector('.search')
const submit = document.querySelector('button')

const searchURL = 'https://api.jikan.moe/v4/anime?q=&limit=5'
const idURL = 'https://api.jikan.moe/v4/anime/{id}'
// fetch(searchURL)
//     .then((res)=> {
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })
// class Create
console.log('Hello world!')

fetch(searchURL)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    const { data } = json
    for (let i = 0; i < data.length; i++) {
      createIMG(data[i].trailer.url)
    }
  })

const container = document.querySelector('.container')

function createIMG(source) {
  const newIMG = document.createElement('img')
  newIMG.src = source
  container.append(newIMG)
}

axios
  .get(searchURL)
  .then(res => console.log(res))
  .catch(e => console.log(e))

// https://api.jikan.moe/v4/anime?q=${searchTerm}=&limit=30

// https://api.jikan.moe/v4/anime
