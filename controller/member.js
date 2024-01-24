const memberSchema = require('../model/member');
const errorHandler = require('../utils/error.handler');

class MemberController {
    async add(farm){
		try{
			let response = await memberSchema.create(farm);
			return { status: "success",   msg:"member Added successfully", result: response };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{

			let response = await memberSchema.find({});
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
			let response = await memberSchema.find({_id:id});
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
			let response = await memberSchema.deleteOne({_id: id});
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
            let response = await memberSchema.update({_id: id}, body);
            return { status: "success", msg:"Member Updated successfully",result: response };

        } catch (error) {
            return { status: "error", error: error };
        }
    }
	
}

       

module.exports=new MemberController();