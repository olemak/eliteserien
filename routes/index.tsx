import { Handlers, PageProps } from "$fresh/server.ts";
import { apiRoot, defaultTournamentStageId } from "../constants/constants.ts";
import Participant from "../islands/Participant.tsx";
import { getTables } from "../queries/getTables.ts";
import { strings } from "../constants/strings.ts";

import { TableHead } from "../components/TableHead.tsx";
import { Head } from "https://deno.land/x/fresh@1.1.1/src/runtime/head.ts";

export const handler:Handlers = {
    async GET(_, ctx) {
        const { tournamentStageId = defaultTournamentStageId } = ctx.params;
        const tables = await fetch(apiRoot, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: getTables,
                variables: { tournamentStageId }})
            })
            .then(res => res.json());
        return ctx.render(tables.data)
    }
}

export default function Home({ data }: PageProps) {
  const locale = "no"; // TODO #1 opportunity: get locale from request


  if (!data) {
    return <div>{strings[locale].error.generic}</div>;
  }

  const {name: tournamentName, standings, startDate, endDate} = data.tournamentStage;

  return (
    <main class="main">
        <Head>
            <title>{tournamentName}</title>
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚽</text></svg>"></link>
            <link rel="stylesheet" href="/table.css" />
        </Head>
        <header><h1>{tournamentName}</h1></header>
        <table class="table">
            <TableHead locale={locale} />
            <tbody>
                {standings.map(
                    (standing: any) => standing
                        .participants
                        .map((participantData: any) => <Participant data={participantData} id={data.id} startDate={startDate} endDate={endDate} />)
                )}
            </tbody>
        </table>
    </main>
  );
}
