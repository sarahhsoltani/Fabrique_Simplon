
const Fabrique =require ('../Models/fabriques')
module.exports={
    //get All fabrique
    getFabrique:async(req,res)=>{
        try {
            const fabrique=await Fabrique.find();
            res.json(fabrique);
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
    },

    // add new fabrique
    addFabrique: async (req, res) => {
        const { name, formateurs, apprenants,description } = req.body;
    
        try {
          fabrique = new Fabrique({
            name,
            formateurs,
            apprenants,
            description
          });
          await fabrique.save();
          res.json(fabrique);
        } catch (error) {
          console.error(error.message);
          res.status(500).send("server error");
        }
      },

      //update fabrique
      updateFabrique:async(req,res)=>{
          try{ 
              // let fabrique=await Fabrique.findById(req.params.id);
              //   if(!fabrique) return res.status(404).send({msg:'fabrique is not found'})
              fab=  await Fabrique.findByIdAndUpdate(req.params.id,req.body,
                {new:true})
                res.json(fab)
          }
          catch (error) {
            console.error(error.message);
            res.status(500).send("not yet updated");
          }
      },
      //delete fabrique
      deleteFabrique:async(req,res)=>{
          try {
            const fabrique =await Fabrique.findByIdAndDelete(req.params.id)
            res.json(fabrique)
          }
          catch (error) {
            console.error(error.message);
            res.status(500).send("not yet deleted");
          }
      }
}
