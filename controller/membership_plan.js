const membersplanSchema = require('../model/membership_plan');
const errorHandler = require('../utils/error.handler');

class PlanController {
    async add(farm){
		try{
			let response = await membersplanSchema.create(farm);
			return { status: "success",   msg:"Plan Added successfully", result: response };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await membersplanSchema.find({});
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
			let response = await membersplanSchema.find({businessId:id});
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
			let response = await membersplanSchema.deleteOne({_id: id});
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
            let response = await membersplanSchema.update({_id: id}, body);
            return { status: "success", msg:"Plan Updated successfully",result: response };

        } catch (error) {
            return { status: "error", error: error };
        }

    }
	
}

       

module.exports=new PlanController();