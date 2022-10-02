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
    const locale = "no";  // TODO get from signal
    const { name, data: metrics } = data;
    const { name: participantName, id} = name;
    const reducedMetrics = reduceParticipantMetrics(metrics);
 


    return (
            <tr
                class="participant-row" >
                <th  scope="row">
                    <OpenMatches 
                        participantName={participantName} 
                        participantId={id}
                        from={startDate}
                        to={endDate}/>
                </th>
                <td>{ reducedMetrics.rank }</td>
                <td>{ reducedMetrics.played }</td>
                <td>{ reducedMetrics.wins }</td>
                <td>{ reducedMetrics.draws }</td>
                <td>{ reducedMetrics.defeats }</td>
                <td>{ reducedMetrics.goalsfor }</td>
                <td>{ reducedMetrics.goalsagainst }</td>
                <td>{ reducedMetrics.points }</td>
            </tr>
    );
}