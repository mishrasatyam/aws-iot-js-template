import {create_connection,on_publish,publish} from 'aws_iot_js_simple'

async function connect(){
    const connection = await create_connection()
    await connection.connect();
    console.log("connected")
    await connection.subscribe('sensor', 1, on_publish);
    publish('sensor',connection,{'Temperature':random_number_with_decimal_places(15,60,2)})  
}
connect()