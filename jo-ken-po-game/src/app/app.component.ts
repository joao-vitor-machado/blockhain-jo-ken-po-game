import { Component } from '@angular/core';
import detectEthereumProvider from '@metamask/detect-provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jo-ken-po-game';

  // constructor(private window: Window) {}

  public doesUserHaveWalletProvider() {
    return (window as any).ethereum;
  }
}
