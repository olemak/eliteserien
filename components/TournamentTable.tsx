import { Head } from "https://deno.land/x/fresh@1.1.1/src/runtime/head.ts";
import { TableBody } from "./TableBody.tsx";
import { TableHead } from "./TableHead.tsx";

interface ITournamentTableProps {
    data: any;  // TODO: typing for data
}

export function TournamentTable({data}: ITournamentTableProps){
    
    const {name: tournamentName, id: tournamentStageId, standings, startDate, endDate} = data.tournamentStage;
    const locale = "no"; // TODO #1 opportunity: get locale from request

    return (
    <table class="table">
        <Head>
            <title>{`olemak | ${tournamentName}`}</title>
            <link rel="stylesheet" href="/table.css" />
        </Head>
        <caption><h1>{`${tournamentName} ${new Date(startDate).getFullYear()}`}</h1></caption>
        <TableHead locale={locale} />
        <TableBody standings={standings}
            startDate={startDate} 
            endDate={endDate} 
            tournamentStageId={tournamentStageId}/>
    </table>
    )
}