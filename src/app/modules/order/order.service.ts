import { Injectable } from '@angular/core';
import { CartCommonService } from '../common/service/cart-common.service';
import { Observable } from 'rxjs';
import { CartSummary } from '../common/model/cart/cartSummary';
import { HttpClient } from '@angular/common/http';
import { OrderSummary } from './model/orderSummary';
import { OrderDto } from './model/orderDto';
import { InitData } from './model/initData';
import { NotificationDto } from './model/notificationDto';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  

  constructor(private cartCommonService: CartCommonService,
    private http: HttpClient) { }

  getCart(id: number): Observable<CartSummary> {
    return this.cartCommonService.getCart(id);
  }

  placeOrder(order: OrderDto): Observable<OrderSummary>{
    return this.http.post<OrderSummary>("/api/orders", order);
  }

  getInitData(): Observable<InitData>{
    return this.http.get<InitData>("/api/orders/initData");
  }

  getStatus(hash: any): Observable<NotificationDto> {
    return this.http.get<NotificationDto>("/api/orders/notification" + hash);
  }
}
