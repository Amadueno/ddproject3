import React, { useState } from 'react'
import API from '../../utils/API'

const Home = () => {
  // const [mediaState, setMediaState] = useState({
  //   search: '',
  //   media: []
  // })

  // mediaState.handleInputChange = event => {
  //   setMediaState({ ...mediaState, [event.target.name]: event.target.value })
  // }

  // mediaState.handleSearchOMDB = event => {
  //   event.preventDefault()
  //   API.getMedia(mediaState.search)
  //     .then(({ data }) => {
  //       setMediaState({ ...mediaState, media: data, search: '' })
  //     })
  //     .catch(err => console.error(err))
  // }

  // mediaState.handleSaveMedia = imdbID => {
  //   const saveMedia = mediaState.media.filter(x => x.imdbID === imdbID)[0]
  //   API.saveMedia(saveMedia)
  //     .then(() => {
  //       const media = mediaState.media.filter(x => x.imdbID !== imdbID)
  //       setMediaState({ ...mediaState, media })
  //     })
  // }

  return (
    <>
      <h1>HEllo World!</h1>
      {/* <div class="container">
        <div class="row">
          <div class="jumbotron col-md-12">
            <h1 class="display-4">To-Do List App</h1>
            <p class="lead">This is a simple to-do app with passport authentication and a mongoose ODM. <img id="todo" src="./assets/icons/tasks.png" alt="todo image"></p>
              <hr class="my-4">
          </div>
          </div>
            <div class="row">
              <div class="col-md-6">
                <h1>Register</h1>
                <form>
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name">
                  </div>
                  <div class="form-group">
                    <label for="rPassword">Password</label>
                    <input type="password" class="form-control" id="rPassword">
                  </div>
                    <button id="register" type="submit" class="btn btn-primary">Register</button>
                </form>
              </div>
              <div class="col-md-6">
                <h1>Sign In</h1>
                  <form>
                    <div class="form-group">
                      <label for="username">Username</label>
                      <input type="text" class="form-control" id="username">
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" class="form-control" id="password">
                    </div>
                      <button id="signIn" type="submit" class="btn btn-primary">Sign In</button>
                  </form>
                </div>
              </div>
            </div> */}
    </>
  )
}

export default Home
