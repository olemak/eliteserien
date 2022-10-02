import { useState } from 'preact/hooks';

interface IOpenMatchesProps {
    participantName: string;
    participantId: string;
    from: string;
    to: string;
}

export default function OpenMatches({participantName, participantId, from, to}: IOpenMatchesProps) {
    const href = `/matches/${participantId}?startDate=${from}&endDate=${to}`;
    const openMatches = (event: Event) => {
        event.preventDefault();
        const modal = document.getElementById('modal');
        const modalInner = modal?.firstChild as HTMLElement;
        
        if (modal) {
            fetch(href)
                .then(res => res.text())
                .then(html => {
                    modalInner.innerHTML = html;
                    modal.ariaModal = "true";
                    modal.classList.add('modal--open');
                    const closeIcon = document.createElement('i');
                    closeIcon.classList.add('close-icon');
                    closeIcon.ariaLabel = 'close';
                    closeIcon.title ='close';
                    closeIcon.tabIndex = 0;
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
        <a href={href} onClick={openMatches}>
            { participantName }
        </a>
    )
}
