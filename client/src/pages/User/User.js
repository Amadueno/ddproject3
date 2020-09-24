import React, { useState } from 'react'
import API from '../../utils/API'

const User = () => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta name="description" content="This is a simple to-do app with passport authentication and a mongoose ODM."/>
                <title>To-Do List App</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                  integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
                  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"/>
                    <link rel="stylesheet" href="./assets/css/style.css"/>
                      <link rel="manifest" href="./manifest.json"/>
</head>
                      <body>
                        <div class="container">
                          <div class="row">
                            <div class="jumbotron col-md-12">
                              <h1 class="display-4">To-Do List App</h1>
                              <p class="lead">This is a simple to-do app with passport authentication and a mongoose ODM. <img id="todo" src="./assets/icons/tasks.png" alt="todo image"/></p>
                                <hr class="my-4"/>
                                  <p id="username"></p>
                                  <button id="signOut" type="submit" class="btn btn-primary">Sign Out</button>
      </div>
    </div>
                              <div class="row">
                                <div class="col-md-6">
                                  <h1>Add An Item</h1>
                                  <form>
                                    <div class="form-group">
                                      <label for="item">Item</label>
                                      <input type="text" class="form-control" id="item"/>
          </div>
                                      <button id="addItem" type="submit" class="btn btn-primary">Add Item <img id="add" src="./assets/icons/plus.png" alt="add"/></button>
        </form>
                                    </div>
                                    <div class="col-md-6">
                                      <h1>Items</h1>
                                      <ul id="items" class="list-group"></ul>
                                    </div>
    </div>
                                </div>
                                <script src="./assets/js/db.js"></script>
                                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
                                <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
                                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                                  integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
                                  integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
                                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
                                  integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
                                <script src="./assets/js/app.js"></script>
</body>
</html>
    </>
  )
}

export default User