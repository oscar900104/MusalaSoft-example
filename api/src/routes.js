const routes = require('express').Router()
const connection = require('.././config/conexion_mysql')


//Obtain gateways
routes.get('/gateway',(req,  res)=>{
    let sql = 'select * from gateway'
    connection.query(sql,(error, rows, fields)=>{
        if(error)throw error;
        else{
            res.json(rows)
        }
    })
})

//Obtain especific gateway
routes.get('/:id',(req,  res)=>{
    const {id} = req.params
    let sql = 'select * from gateway where id = ?'
    connection.query(sql,[id],(error, rows, fields)=>{
        if(error)throw error;
        else{
            res.json(rows)
        }
    })
})

//Create gateway
routes.post('/create',(req,  res)=>{
    const {SerialNumber, LegibleName, ipv4, active} = req.body
    let sql = `insert into gateway(SerialNumber, LegibleName, ipv4, active) values('${SerialNumber}','${LegibleName}','${ipv4}','${active}')`
    connection.query(sql,(error, rows, fields)=>{
        if(error)throw error;
        else{
            res.json({status: 'gateway created'})
        }
    })
})

//Delete gateway
routes.delete('/delete/:id',(req,  res)=>{
    const {id} = req.params
    let sql = `delete from gateway where id = '${id}'`
    connection.query(sql,(error, rows, fields)=>{
        if(error)throw error;
        else{
            res.json({status: 'gateway deleted'})
        }
    })
})


//Obatin all gateways and devices
routes.get('/',(req,  res)=>{
    let sql = 'select * from gateway g inner join device d on d.id_gateway = g.id'
    connection.query(sql,(error, rows, fields)=>{
        if(error)throw error;
        else{
            res.json(rows)
        }
    })
})

//Obatin devices
routes.get('/device',(req,  res)=>{
    let sql = 'select * from device'
    connection.query(sql,(error, rows, fields)=>{
        if(error)throw error;
        else{
            res.json(rows)
        }
    })
})

//Delete device
routes.delete('/deleteDevice/:id',(req,  res)=>{
    const {id} = req.params
    let sql = `delete from device where id = '${id}'`
    connection.query(sql,(error, rows, fields)=>{
        if(error)throw error;
        else{
            res.json({status: 'device deleted'})
        }
    })
})

//Create device
routes.post('/createDevice',(req,  res)=>{
    const {id_gateway, uid, Provider, CreationDate, active} = req.body
    let sql = `insert into device(id_gateway, uid, Provider, CreationDate, active) values('${id_gateway}','${uid}','${Provider}','${CreationDate}','${active}')`
    connection.query(sql,(error, rows, fields)=>{
        if(error)throw error;
        else{
            res.json({status: 'device created'})
        }
    })
})


module.exports = routes;