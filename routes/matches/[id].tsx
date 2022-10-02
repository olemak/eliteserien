import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "https://deno.land/x/fresh@1.1.1/src/runtime/head.ts";
import { Fav } from "../../components/FavIcon.tsx";
import { apiRoot } from "../../constants/constants.ts";
import { strings } from "../../constants/strings.ts";
import { getMatches } from "../../queries/getMatches.ts";

export const handler:Handlers = {
    async GET(req, ctx) {
        const startDate = req.url.substring(
            req.url.indexOf("startDate=") + 10,
            req.url.indexOf("&endDate=")
        );
        const endDate = req.url.substring(req.url.indexOf("&endDate=") + 9);
        const matches = await fetch(apiRoot, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: getMatches,
                variables: { 
                    participantId: ctx.params.id,
                    fromDate: startDate,
                    toDate: endDate }})
        })
        .then(res => res.json())
        .then(res => res.data)

        // TODO: Improve Graph query instead:
        const matchesInEliteserien = matches.eventsByParticipantAndDateRange.filter((match: any) => match.tournamentStage.name === "Eliteserien"); 
        const participantName = matches.participant.name;

        return ctx.render({
            participantName,
            matches: matchesInEliteserien});
    }
}

const Match = (props: any) => {
    const { data } = props;
    const {startDate, participants} = data;
    const [homeTeam, awayTeam] = participants;
    const matchDate = new Date(startDate);
    
    return (
        <div class="match-item">
        <span class="match-date">{matchDate.toLocaleDateString()}</span>
        <span class="match-participants">{`${homeTeam.participant.name} - ${awayTeam.participant.name}`}</span>
    </div>)
}

export default function Matches(props: PageProps) {
    const locale = "no"; // TODO: Get locale from browser
    const {matches, participantName} = props.data;
    const {match} = strings[locale];
    const heading = `${match.plural} ${participantName}`;

    return (
    <section id="match-list" class="match-list">
        <Head>
            <title>olemak | Kamper</title>
            <link rel="stylesheet" href="/matches.css" />
            <Fav icon="⚽" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;700&display=swap" rel="stylesheet" />
        </Head>
        <h2>{heading}</h2>
        {matches.map((match: any) => <Match data={match}/>)}
    </section>
  );
}