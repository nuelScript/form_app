import { NextApiRequest, NextApiResponse } from "next";

type Individual = {
    name: string;
    matricNo: string;
    department: string;
    program: string;
    date: Date;
    time: Date;
    image: FileList;
};

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
    if ( req.method === "GET" ) {
        const { name, matricNo, department, program, date, time, image } = req.body as Individual;
        console.log( name, matricNo, department, program, date, time, image );
        res.status( 200 ).json( { message: "success" } );
    } else {
        res.status( 400 ).json( { message: "error" } );
    }
};

