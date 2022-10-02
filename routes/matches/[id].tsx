import { Handlers, PageProps } from "$fresh/server.ts";
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
        <link rel="stylesheet" href="/matches.css" />
        <h2>{heading}</h2>
        {matches.map((match: any) => <Match data={match}/>)}
    </section>
  );
}