if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}

axios.get('/api/users/characters', {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('user')}`
  }
})
  .then(({ data: user }) => {
    document.getElementById('username').textContent = `Welcome ${user.username}!`

    user.characters.forEach(character => {
      const characterElem = document.createElement('li')
      characterElem.className = character.isDone ? 'list-group-item list-group-item-success' : 'list-group-item'
      characterElem.textContent = character.text
      document.getElementById('characters').append(characterElem)
    })
  })
  .catch(err => {
    console.error(err)
    // window.location = '/auth.html'
  })

document.getElementById('addCharacter').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/characters', {
    text: document.getElementById('character').value,
    isDone: false
  }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  })
    .then(({ data: character }) => {
      const characterElem = document.createElement('li')
      characterElem.className = character.isDone ? 'list-group-item list-group-item-success' : 'list-group-item'
      characterElem.textContent = character.text
      document.getElementById('characters').append(characterElem)
      document.getElementById('character').value = ''
    })
    .catch(err => {
      console.error(err)
      saveCharacter({
        text: document.getElementById('character').value,
        isDone: false
      })
    })
})

document.getElementById('signOut').addEventListener('click', event => {
  localStorage.removeItem('user')
  window.location = '/auth.html'
})
