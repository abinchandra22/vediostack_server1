const jsonserver=require('json-server')
const cors=require('cors')


// create server
const videoserver=jsonserver.create()

const router=jsonserver.router('db.json')


const middleware=jsonserver.defaults()





videoserver.use(cors())
videoserver.use(middleware)
videoserver.use(router)


const PORT=5000
videoserver.listen(PORT,()=>{
    console.log(`.....videoserver start at..... ${PORT}`);
})

