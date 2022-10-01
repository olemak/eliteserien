export const getMatches = `query teamMatches($participantId: ID!, $fromDate: LocalDate!, $toDate: LocalDate!) {
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
