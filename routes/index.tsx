import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "https://deno.land/x/fresh@1.1.1/src/runtime/head.ts";


import { apiRoot, defaultTournamentStageId } from "../constants/constants.ts";
import { getTables } from "../queries/getTables.ts";
import { strings } from "../constants/strings.ts";
import { TournamentTable } from "../components/TournamentTable.tsx";
import { Fav } from "../components/FavIcon.tsx";

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

  return (
    <main class="main">
        <Head>
            <Fav icon="⚽" />
        </Head>
        <TournamentTable data={data} />
        <section id="modal" class="modal">
            <div id="modal-inner" class="modal-inner" />
        </section>
    </main>
  );
}
