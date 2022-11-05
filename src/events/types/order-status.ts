export enum OrderStatus {
  // Remark: When the order has been created, but the ticket it is trying to order has not been reserved
  Created = "created",

  // Remark: The ticket the order is trying to reserve has already been reserved, or when the user has cancelled the order
  // Remark: The order expires before payment
  Cancelled = "cancelled",

  // Remark: The order has successfully reserved the ticket
  AwaitingPayment = "awaiting:payment",

  // Remark: The order has reserved the ticket and the user has provided payment successfully
  Complete = "complete"
}
