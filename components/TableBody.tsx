import Participant from "../components/Participant.tsx";

interface ITableBodyProps { 
    standings: any[];
    startDate: string;
    endDate: string;
    tournamentStageId: string;
}


export function TableBody({ standings, startDate, endDate, tournamentStageId }: ITableBodyProps) {
   const [standing] = standings;

  return (
    <tbody class="table-body">
        { standing.participants.map((participantData: any) => 
            <Participant 
                data={participantData} 
                id={tournamentStageId} 
                startDate={startDate} 
                endDate={endDate} />
        )}
    </tbody>
  );
}