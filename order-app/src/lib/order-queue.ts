import { Order, OrderType } from "@/lib/types";

export class OrderQueue {
  private vipQueue: Order[] = [];
  private normalQueue: Order[] = [];

  enqueue(order: Order) {
    if (order.type === OrderType.VIP) {
      this.vipQueue.push(order);
    } else {
      this.normalQueue.push(order);
    }
  }

  dequeue(): Order | undefined {
    if (this.vipQueue.length > 0) {
      return this.vipQueue.shift();
    }

    return this.normalQueue.shift();
  }

  requeue(order: Order) {
    if (order.type === OrderType.VIP) {
      this.vipQueue.unshift(order);
    } else {
      this.normalQueue.unshift(order);
    }
  }

  getPending() {
    return [...this.vipQueue, ...this.normalQueue];
  }

  clear() {
    this.vipQueue = [];
    this.normalQueue = [];
  }
}