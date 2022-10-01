import { HandlerContext } from "$fresh/server.ts";
import { apiRoot, defaultTournamentStageId } from "../../constants/constants.ts";
import { getTables } from "../../queries/getTables.ts";

const tables = await fetch(apiRoot, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        query: getTables,
        variables: { tournamentStageId: defaultTournamentStageId }})
    })
    .then(res => res.json());

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
    return new Response(JSON.stringify(tables));
};
