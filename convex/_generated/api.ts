/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Stub file — replaced automatically by `npx convex dev`.
 * Provides type placeholders so the project compiles before Convex is configured.
 */

type AnyFunctionReference = any;

export const api: {
  users: {
    createUserPublic: AnyFunctionReference;
    updateUserPublic: AnyFunctionReference;
    getUser: AnyFunctionReference;
    getCurrentUser: AnyFunctionReference;
    updateUser: AnyFunctionReference;
    completeOnboarding: AnyFunctionReference;
    getByClerkId: AnyFunctionReference;
  };
  trips: {
    create: AnyFunctionReference;
    createInternal: AnyFunctionReference;
    update: AnyFunctionReference;
    remove: AnyFunctionReference;
    getById: AnyFunctionReference;
    listByUser: AnyFunctionReference;
    listPublic: AnyFunctionReference;
    updateStatus: AnyFunctionReference;
    updateActualSpent: AnyFunctionReference;
    getByInviteCode: AnyFunctionReference;
  };
  tripDays: {
    create: AnyFunctionReference;
    createBatch: AnyFunctionReference;
    update: AnyFunctionReference;
    remove: AnyFunctionReference;
    listByTrip: AnyFunctionReference;
  };
  activities: {
    create: AnyFunctionReference;
    createBatch: AnyFunctionReference;
    update: AnyFunctionReference;
    remove: AnyFunctionReference;
    reorder: AnyFunctionReference;
    listByDay: AnyFunctionReference;
    listByTrip: AnyFunctionReference;
  };
  expenses: {
    create: AnyFunctionReference;
    remove: AnyFunctionReference;
    listByTrip: AnyFunctionReference;
    getTotalByCategory: AnyFunctionReference;
    getDailySpending: AnyFunctionReference;
  };
  tripMembers: {
    add: AnyFunctionReference;
    remove: AnyFunctionReference;
    updateRole: AnyFunctionReference;
    listByTrip: AnyFunctionReference;
  };
  chatMessages: {
    create: AnyFunctionReference;
    createInternal: AnyFunctionReference;
    listByTrip: AnyFunctionReference;
    markSuggestionApplied: AnyFunctionReference;
  };
  studentDiscounts: {
    listByCity: AnyFunctionReference;
    listByCountry: AnyFunctionReference;
    submit: AnyFunctionReference;
    verify: AnyFunctionReference;
    seedDiscounts: AnyFunctionReference;
  };
  ai: {
    generateTrip: {
      generateTrip: AnyFunctionReference;
      generateTripInternal: AnyFunctionReference;
    };
    chatAssistant: {
      chat: AnyFunctionReference;
    };
  };
  emails: {
    sendWelcomeEmail: AnyFunctionReference;
    sendTripSummary: AnyFunctionReference;
    sendBudgetAlert: AnyFunctionReference;
    sendGroupInvite: AnyFunctionReference;
    sendTripReminder: AnyFunctionReference;
    insertEmailLogMutation: AnyFunctionReference;
    logEmailInternal: AnyFunctionReference;
  };
  cronHandlers: {
    sendWeeklyDigest: AnyFunctionReference;
    sendTripReminders: AnyFunctionReference;
    sendDailyItinerary: AnyFunctionReference;
    checkBudgetAlerts: AnyFunctionReference;
    markCompletedTrips: AnyFunctionReference;
    getUsersForDigest: AnyFunctionReference;
    getUserActiveTrips: AnyFunctionReference;
    getUserById: AnyFunctionReference;
    getTripsByStartDate: AnyFunctionReference;
    getActiveTripsForDate: AnyFunctionReference;
    getTripsOverBudgetThreshold: AnyFunctionReference;
    getRecentEmailLogs: AnyFunctionReference;
    getActiveTripsEndedBefore: AnyFunctionReference;
    setTripCompleted: AnyFunctionReference;
  };
} = {} as any;

export const internal: typeof api = {} as any;
