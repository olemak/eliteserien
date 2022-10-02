export const getMatches = `query teamMatches($participantId: ID!, $fromDate: LocalDate!, $toDate: LocalDate!) {
    participant(id: $participantId) {
    	name
  	}
    eventsByParticipantAndDateRange(participantId: $participantId, fromDate: $fromDate, toDate: $toDate) {
      startDate
      tournamentStage {
        name
      }
      participants {
        participant {
          name
        }
      }
    }
  }
  `;
