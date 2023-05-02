import { Component } from '@angular/core';
import { WalletService } from './services/wallet.service';
import MetaMaskEthereumProvider from '@metamask/detect-provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jo-ken-po-game';
  ethereumProvider : any | null;

  constructor(private walletService : WalletService) {
    this.ethereumProvider = null;
  }

  ngOnInit() {
    MetaMaskEthereumProvider().then(
      (ethereumProvider) => {
        this.ethereumProvider = ethereumProvider;
      });
  }

}
