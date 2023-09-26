import 'dotenv/config'
// read varibles from env file and set values to use in all app
export const apiUrl: string = String(process.env.API_URL);
export const port: number = Number(process.env.PORT);

/**
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export const validateIdParam = (req, res, next) => {
  const {params: {id}} = req;
  // check if valid id come in the url
  if (!id) {
    // Send Custom Response with Validation Error
    res.status(400).send({message: 'missing pokemon id/name'})
  } else {
    // go to controller to get pokemon details
    next()
  }
}