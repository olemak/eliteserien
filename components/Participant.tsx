import { strings } from "../constants/strings.ts";
import OpenMatches from "../islands/OpenMatches.tsx";

import { reduceParticipantMetrics } from "../logic/reduceParticipantMetrics.ts";

export enum participantMetricCodesEnum {
    "rank", "points", "goalsfor", "goalsagainst", "winshome", "winsaway", "draws", "played", "wins", "defeits", "playedhome", "playedaway", "drawshome", "drawsaway", "defeitshome", "defeitsaway", "goalsforhome", "goalsforaway", "goalsagainsthome", "goalsagainstaway", "pointshome", "pointsaway", "trend"
}

export interface IParticipantMetric {
    code: participantMetricCodesEnum | string;
    value: string;
}
interface IParticipantData {
    name: {
        name: string,
        id: string;
    }
    data: IParticipantMetric[];
}

interface IParticipantProps {
    data: IParticipantData;
    id: string;
    endDate: string;
    startDate: string;
}

export default function Participant({ data, endDate, startDate }: IParticipantProps) {
    const locale = "no";  // TODO get from theme?
    const { labels } = strings[locale].participant;
    const { name, data: metrics } = data;
    const { name: participantName, id} = name;
    const reducedMetrics = reduceParticipantMetrics(metrics);

    return (
            <tr
                class="participant-row" >
                <th scope="row">
                    <OpenMatches 
                        participantName={participantName} 
                        participantId={id}
                        from={startDate}
                        to={endDate}/>
                </th>
                <td data-label={labels.rank}>{ reducedMetrics.rank }</td>
                <td data-label={labels.played}>{ reducedMetrics.played }</td>
                <td data-label={labels.wins}>{ reducedMetrics.wins }</td>
                <td data-label={labels.draws}>{ reducedMetrics.draws }</td>
                <td data-label={labels.defeats}>{ reducedMetrics.defeats }</td>
                <td data-label={labels.goalsFor}>{ reducedMetrics.goalsfor }</td>
                <td data-label={labels.goalsAgainst}>{ reducedMetrics.goalsagainst }</td>
                <td data-label={labels.points}>{ reducedMetrics.points }</td>
            </tr>
    );
}