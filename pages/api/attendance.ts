import { NextApiRequest, NextApiResponse } from "next";

type Attendance = {
    name: string;
    present: boolean;
    date: Date;
    time: Date;
}

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
    if ( req.method === "GET" ) {
        const { name, present, date, time } = req.body as Attendance;
        console.log( name, present, date, time );
        res.status( 200 ).json( { message: "success" } );
    } else {
        res.status( 400 ).json( { message: "error" } );
    }
};
