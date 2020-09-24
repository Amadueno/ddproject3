import React, { useState } from 'react'
import API from '../../utils/API'

// const Home = () => {
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

//   return (
//     <>
//       <html lang="en">

//         <head>
//           <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//               <meta name="description" content="This is a simple to-do app with passport authentication and a mongoose ODM.">
//                 <title>To-Do List App</title>
//                 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
//                   integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
//                   <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
//                     <link rel="stylesheet" href="./assets/css/auth.css">
//                       <link rel="manifest" href="./manifest.json">
// </head>

//                       <body>
//                         <div class="container">
//                           <div class="row">
//                             <div class="jumbotron col-md-12">
//                               <h1 class="display-4">To-Do List App</h1>
//                               <p class="lead">This is a simple to-do app with passport authentication and a mongoose ODM. <img id="todo" src="./assets/icons/tasks.png" alt="todo image"></p>
//                                 <hr class="my-4">
//       </div>
//     </div>
//                               <div class="row">
//                                 <div class="col-md-6">
//                                   <h1>Register</h1>
//                                   <form>
//                                     <div class="form-group">
//                                       <label for="name">Name</label>
//                                       <input type="text" class="form-control" id="name">
//           </div>
//                                       <div class="form-group">
//                                         <label for="rUsername">Username</label>
//                                         <input type="text" class="form-control" id="rUsername">
//           </div>
//                                         <div class="form-group">
//                                           <label for="email">Email address</label>
//                                           <input type="email" class="form-control" id="email">
//           </div>
//                                           <div class="form-group">
//                                             <label for="rPassword">Password</label>
//                                             <input type="password" class="form-control" id="rPassword">
//           </div>
//                                             <button id="register" type="submit" class="btn btn-primary">Register</button>
//         </form>
//                                         </div>
//                                         <div class="col-md-6">
//                                           <h1>Sign In</h1>
//                                           <form>
//                                             <div class="form-group">
//                                               <label for="username">Username</label>
//                                               <input type="text" class="form-control" id="username">
//           </div>
//                                               <div class="form-group">
//                                                 <label for="password">Password</label>
//                                                 <input type="password" class="form-control" id="password">
//           </div>
//                                                 <button id="signIn" type="submit" class="btn btn-primary">Sign In</button>
//         </form>
//                                             </div>
//     </div>
//                                         </div>


//                                         <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
//                                         <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//                                         <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
//                                           integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
//                                           crossorigin="anonymous"></script>
//                                         <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
//                                           integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
//                                           crossorigin="anonymous"></script>
//                                         <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
//                                           integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
//                                           crossorigin="anonymous"></script>
//                                         <script src="./assets/js/auth.js"></script>
// </body>

// </html>
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
//             </div> */
//     </>
//   )
// }

// export default Home
