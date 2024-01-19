async function response(payload,statusCode){
   try{ 
    const errorRes={
        statusCode:statusCode,
        response:payload
    }
    return errorRes
}
    catch(error){
        console.log(error)
    }
}
module.exports={
    response
}