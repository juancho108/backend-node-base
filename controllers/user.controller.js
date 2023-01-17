const { response } = require('express');

const usersGet = (req, res = response) => {

  const params = req.query

  res.json({ 
    msg: 'get API - Controller'
  });
}

const usersPost = (req, res) => {

  const {nombre, edad}= req.body;

  res.json({ 
    msg: 'post API - Controller',
    nombre,
    edad
  });
}

const usersPut = (req, res) => {

  const {id} = req.params;


  res.json({ 
    msg: 'put API - Controller',
    id
  });
}



const usersPatch = (req, res) => {
  res.json({ 
    msg: 'patch API - Controller'
  });
}

const usersDelete = (req, res) => {
  res.json({ 
    msg: 'delete API - Controller'
  });
}


module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete
};
