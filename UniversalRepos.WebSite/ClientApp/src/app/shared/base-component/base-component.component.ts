import { ToasterService } from './../../core/animations/toaster.service';
import { OnDestroy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@core/animations/route.animations';

export abstract class BaseComponent implements OnDestroy {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor(public toasterService: ToasterService) {}
  public visible = true;

  async visibilityAnimation() {
    this.visible = !this.visible;
    await this.delay(500);
    this.visible = !this.visible;
  }
  async delay(ms: number) {
    return await new Promise( resolve => setTimeout(resolve, ms) );
  }
  ngOnDestroy() {

  }

  Success(message: string) {
    this.toasterService.notifySuccess(message);
  }
}
