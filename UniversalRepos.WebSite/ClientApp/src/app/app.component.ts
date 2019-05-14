import { LocalStorageService } from './core/local-storage/local-storage.service';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { Router, ActivationEnd } from '@angular/router';
import { routeAnimations } from './core/animations/route.animations';
import { MatIconRegistry } from '@angular/material';
import { IconRegistryService } from '@core/icon-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]

})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  // theme$ = this.settingsQuery.theme$;
  theme: 'default-theme' | 'black-theme';
  year = new Date().getFullYear();
  applicatioName = environment.applicationName;
  // version = environment.version;
  // environment = environment.environment;

  @HostBinding('class') componentCssClass;

  constructor(public overlayContainer: OverlayContainer,
    private iconService: IconRegistryService,
    public loader: LoadingBarService,
    private router: Router,
    private title: Title) {
      if (LocalStorageService.getItem('theme')) {
        this.setTheme(LocalStorageService.getItem('theme'));
      } else {
        this.setTheme('default-theme');
      }
    this.iconService.init();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  ngOnInit(): void {
    this.subscribeToRouterEvents();
  }
  setTheme(theme: string) {
    this.componentCssClass = theme;
    const classList = this.overlayContainer.getContainerElement().classList;
    const toRemove = Array.from(classList).filter((item: string) =>
      item.includes('-theme')
    );
    if (toRemove.length) {
      classList.remove(...toRemove);
    }
    classList.add(theme);
    LocalStorageService.setItem('theme', theme);
  }
  private subscribeToRouterEvents() {
    this.router.events.subscribe(x => {
      if (x) {

        // console.warn(x);
        // const { title } = x.data['title'];
        // if (title) {
        //   this.title.setTitle(`${environment.applicationName} - ${title}`);
        // } else {
        //   this.title.setTitle(`${environment.applicationName}`);
        // }
      }
    });
  }
}

