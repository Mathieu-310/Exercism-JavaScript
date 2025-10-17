/// <reference path="./global.d.ts" />
// @ts-check


export function createVisitor(name, age, ticketId) {
  return {
    name,
    age,
    ticketId,
  };
}


export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor
}


export function ticketStatus(tickets, ticketId) {
  const value = tickets[ticketId];
  const rulesStatus = [
    { test: () => !(ticketId in tickets), message: `unknown ticket id` },
    { test: () => value === null, message: `not sold` },
    {
      test: () => value !== null && value !== undefined,
      message: `sold to ${tickets[ticketId]}`,
    },
  ];
  for (let rule of rulesStatus) {
    if (rule.test()) {
      return rule.message;
    }
  }
}


export function simpleTicketStatus(tickets, ticketId) {
  switch (ticketStatus(tickets, ticketId)) {
    case "unknown ticket id":
    case "not sold":
      return "invalid ticket !!!";
    default:
      return `${tickets[ticketId]}`;
  }
}


export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
