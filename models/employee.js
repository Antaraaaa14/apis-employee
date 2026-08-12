const supabase=require('../config/db');

class Employee{

    static async findAll(){
        const {data, error}= await supabase.from('employee').select('*')   
        if (error) {
            throw new Error("Something went wrong");
        }
        return data;
    }

    static async findById(id){
        const {data, error}= await supabase.from('employee').select('*').eq('id', id).single();
        if (error) {
            throw new Error("Something went wrong");
        }
        return data;
    }

    static async findByIdAndUpdate(id, employee){
        const {data, error}= await supabase.from('employee').update(employee).eq('id', id).select('*').single();
        if (error) {
            throw new Error("error.message");
        }
        return data;
    }

    static async findByIdAndDelete(id){
        const {data, error}= await supabase.from('employee').delete().eq('id', id).select('*').single();
        if (error) {
            throw new Error("error.message");
        }
        return data;
    }
}

module.exports=Employee;