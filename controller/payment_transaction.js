const paymentTransactionschema = require('../model/payment_transaction');
const errorHandler = require('../utils/error.handler');

class PaymentController {
    async add(farm){
		try{
			let response = await paymentTransactionschema.create(farm);
			return { status: "success",   msg:"Payment Added successfully", result: response };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{

            
			let response = await paymentTransactionschema.find({});
			let count=Object.keys(response).length;
			return {
				response: response,
				count:count
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
  

	async fetchdata(id){
		try{
			let response = await paymentTransactionschema.find({_id:id});
			return response;	
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id){
		try{
			let response = await paymentTransactionschema.deleteOne({_id: id});
			return {
				status: "success",
				response: response
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async update(id, body) {

        try {
            let response = await paymentTransactionschema.update({_id: id}, body);
            return { status: "success", msg:"Payment Updated successfully",result: response };

        } catch (error) {
            return { status: "error", error: error };
        }

    }
	
}

       

module.exports=new PaymentController();