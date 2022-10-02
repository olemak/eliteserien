import { useState } from 'preact/hooks';

interface IOpenMatchesProps {
    participantName: string;
    participantId: string;
    from: string;
    logoUrl: string;
    to: string;
}

export default function OpenMatches({participantName, participantId, from, to, logoUrl}: IOpenMatchesProps) {
    const href = `/matches/${participantId}?startDate=${from}&endDate=${to}`;
    const openMatches = (event: Event) => {
        event.preventDefault();
        const modal = document.getElementById('modal');
        const modalInner = modal?.firstChild as HTMLElement;
        
        if (modal) {
            fetch(href)
                .then(res => res.text())
                .then(html => {
                    const trimmedHtml = html.substring(html.indexOf('<body>') + 6, html.indexOf('</body>'));
                    modalInner.innerHTML = trimmedHtml;
                    modal.ariaModal = "true";
                    modal.classList.add('modal--open');
                    const closeIcon = document.createElement('i');
                    closeIcon.classList.add('close-icon');
                    closeIcon.ariaLabel = 'close';
                    closeIcon.title ='close';
                    closeIcon.tabIndex = 0;
                    /* @ts-expect-error */
                    closeIcon.role = 'button';
                    closeIcon.innerHTML = '×';
                    closeIcon.addEventListener('click', () => {
                        modal.classList.remove('modal--open');
                    });
                    modal.appendChild(closeIcon);
                })
        }
    }

    return (
        <a href={href} onClick={openMatches} class="participant-row_open-link">
            <div class="participant_logo_wrapper">
                <img src={logoUrl} alt={participantName} class="participant_logo" />
            </div>
            { participantName }
        </a>
    )
}
