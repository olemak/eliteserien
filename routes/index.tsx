import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "https://deno.land/x/fresh@1.1.1/src/runtime/head.ts";


import { apiRoot, defaultTournamentStageId } from "../constants/constants.ts";
import { getTables } from "../queries/getTables.ts";
import { strings } from "../constants/strings.ts";
import { TournamentTable } from "../components/TournamentTable.tsx";
import { Fav } from "../components/FavIcon.tsx";
import { Modal } from "../components/Modal.tsx";

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
            <title>olemak | Eliteserien</title>
            <link rel="stylesheet" href="/table.css" />
            <Fav icon="⚽" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;700&display=swap" rel="stylesheet" />
        </Head>
        <TournamentTable data={data} />
        <Modal />
    </main>
  );
}
