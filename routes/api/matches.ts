import { HandlerContext } from "$fresh/server.ts";
import { apiRoot } from "../../constants/constants.ts";
import { getMatches } from "../../queries/getMatches.ts";

const variables = {
    participantId: "",
    fromDate:"",
    toDate:""
};

const tables = await fetch(apiRoot, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        query: getMatches,
        variables})
    })
    .then(res => res.json());


    
export const handler = (_req: Request, _ctx: HandlerContext): Response => {
    return new Response(JSON.stringify(tables));
};
