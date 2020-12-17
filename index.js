import {create_connection,on_publish,publish} from 'aws_iot_js_simple'

async function connect(){
    const connection = await create_connection()
    await connection.connect();
    console.log("connected")
    await connection.subscribe('sensor', 1, on_publish);
    publish('sensor',connection,{'Temperature':23.65})  
}
connect()
