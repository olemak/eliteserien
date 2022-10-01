import { reduceParticipantMetrics } from "../logic/reduceParticipantMetrics.ts";

export enum participantMetricCodesEnum {
    "rank", "points", "goalsfor", "goalsagainst", "winshome", "winsaway", "draws", "played", "wins", "defeits", "playedhome", "playedaway", "drawshome", "drawsaway", "defeitshome", "defeitsaway", "goalsforhome", "goalsforaway", "goalsagainsthome", "goalsagainstaway", "pointshome", "pointsaway", "trend"
}

export interface IParticipantMetric {
    code: participantMetricCodesEnum | string;
    value: string;
}
interface IParticipantData {
    name: {name: string}
    data: IParticipantMetric[];
}

interface IParticipantProps {
    data: IParticipantData;
}

export default function Participant({ data }: IParticipantProps) {
    const { name, data: metrics } = data;
    const {name: participantName} = name;
    const reducedMetrics = reduceParticipantMetrics(metrics);

  return (
    <tr>
      <td>{ participantName ?? "team name missing"}</td>
      <td>{reducedMetrics.rank}</td>
      <td>{reducedMetrics.played}</td>
      <td>{reducedMetrics.wins}</td>
      <td>{reducedMetrics.draws}</td>
      <td>{reducedMetrics.defeats}</td>
      <td>{reducedMetrics.goalsfor}</td>
      <td>{reducedMetrics.goalsagainst}</td>
      <td>{reducedMetrics.points}</td>
    </tr>
  ); 
}