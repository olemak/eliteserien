import { useState } from 'preact/hooks';

interface IOpenMatchesProps {
    participantName: string;
    participantId: string;
    from: string;
    to: string;
}

export default function OpenMatches({participantName, participantId, from, to}: IOpenMatchesProps) {

    const [open, setOpen] = useState(false);

    const openMatches = (event: Event) => { 
        // event.preventDefault();
        setOpen(!open);

        /* TODO: Open a modal with matches that either :
            Fetches data in the client, or
            Fetches the rendered html from the server... :clever:
        */

    }

    return (
    <a href={`/matches/${participantId}?startDate=${from}&endDate=${to}`}
        onClick={openMatches}>
        { participantName }
        </a>
    )
}
