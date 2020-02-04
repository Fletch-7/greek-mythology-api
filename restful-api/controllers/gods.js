const God = require('../models/god')

function index(req, res) {
  God 
    .find() 
    .then(foundGods => res.status(200).json(foundGods)) 
    .catch(err => console.log(err)) 
}

function create(req, res) { //£ INDEX
  God
    .create(req.body) 
    .then(createdGods => res.status(201).json(createdGods)) 
    .catch(err => console.log(err))
}

function show(req, res) { //* DISPLAY
  God
    .findById(req.params.id)  
    .then(god=> {
      if (!god) return res.status(404).json({ message: 'Not Found' })
      res.status(202).json(god)
    })
    .catch(err => console.log(err))
}

function update(req, res) {  //*EDIT
  God
    .findById(req.params.id) 
    .then(god => {
      if (!god) return res.status(404).json({ message: 'Not Found' })
      Object.assign(god, req.body)
      return god.save()
    })
    .then(updatedDinosaur => res.status(202).json(updatedDinosaur))
    .catch(err => console.log(err))
}

function destroy(req, res) { //* DELETE
  God
    .findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(err => res.json(err))
}

module.exports = { index, create, show, update, destroy } 