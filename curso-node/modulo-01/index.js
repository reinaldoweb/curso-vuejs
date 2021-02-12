const express = require('express');

const server = express();

server.use(express.json());

//Query params = ? nome=NodJS

//Rout Params = /curso/2

//Request Body - { nome: 'Nodejs', tipo: 'Backend'}

//CRUD - CREATE, READ, UPDATE, DELETE

const cursos = ['Node JS','JavaScript','React Native'];

//Middlewhere Global
server.use((req, res, next)=>{
  console.log(`URL CHAMADA: ${req.url}`);
  return next();
});

function checkCurso(req,res,next){
if(!req.body.name){
  return res.status(400).json({ error: "Nome do Curso é obrigatório!"});
}

return next();

}

function checkIndexCurso(req,res,next){
  const curso = cursos[req.params.index];

  if(!curso){
    return res.status(400).json({ error: "O curso não existe!"});
  }

  req.curso = curso;

  return next();
}

//localhosts:3000/curso

server.get('/cursos', (req, res)=>{
  return res.json(cursos);
});

//Listando um curso

server.get('/cursos/:index', checkIndexCurso, (req, res)=>{  
  return res.json(req.curso);
});


//Criando un novo curso
server.post('/cursos', checkCurso, (req, res)=>{
  const {name} = req.body;
  cursos.push(name);

  return res.json(cursos);
})



//Atualizando um novo curso

server.put('/cursos/:index', checkCurso, checkIndexCurso , (req, res)=>{

  const { index } = req.params;
  const {name} = req.body;

  cursos[index] = name;
  return res.json(cursos);
})

//Deletando algum curso

server.delete('/cursos/:index', checkIndexCurso, (req, res)=>{
  const { index } = req.params;
  
  cursos.splice(index, 1);
  return res.json( {menssage: "Curso deletado com sucesso!"});
  
})





server.listen(3000);

