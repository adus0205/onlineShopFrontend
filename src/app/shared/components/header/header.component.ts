import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HeaderService } from './header.service';
import { count } from 'rxjs';
import { CartIconService } from 'src/app/modules/common/service/cart-icon.service';
import { JwtService } from 'src/app/modules/common/service/jwt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = "Shop";
  cartProductCounter = "";
  isLoggedIn = false;

  constructor(
    private cookieService: CookieService,
    private headerService: HeaderService,
    private cartItemService: CartIconService,
    private jwtService: JwtService){}

  ngOnInit(): void{
    this.getCountProducts();
    this.cartItemService.subject
      .subscribe(countr => this.cartProductCounter = String(countr >0 ? countr:""));
    this.isLoggedIn = this.jwtService.isLoggedIn();  
  }

  getCountProducts(){
    this.headerService.getCountProducts(Number(this.cookieService.get("cartId")))
      .subscribe(countr => this.cartProductCounter = String(countr > 0 ? countr:""));
  }

}
