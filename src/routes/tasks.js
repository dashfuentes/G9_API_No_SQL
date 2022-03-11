import { Router } from 'express';
const router = Router();

//DB Connection
import { connect } from '../database';
import { ObjectId } from 'mongodb';

router.get( '/', async ( req, res ) => {
    const db = await connect();
    const result = await db.collection( 'task' ).find( {} ).toArray();
    res.json( result );
} );

//get by id

//post
router.post( '/', async ( req, res ) => {
    const db = await connect();
    const task =
    {
        title: req.body.title,
        description: req.body.description
    };
    const result = await db.collection( 'task' ).insert( task );
    res.json(result.insertedIds)

})

//update
router.put( '/:id', async ( req, res ) => {
    console.log( 'updating..' )
    const { id } = req.params;
    const newTask =
    {
        title: req.body.title,
        description: req.body.description
    }
    const db = await connect();
    const result = await db.collection( 'task' ).updateOne( { _id: ObjectId( id ) }, { $set: newTask } );
    res.json( {
        message: `Task ${id} updated with success!!`,
    } )
} );

//delete

//get by title

export default router;