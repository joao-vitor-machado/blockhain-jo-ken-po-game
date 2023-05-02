import { Component } from '@angular/core';
import detectEthereumProvider from '@metamask/detect-provider';
import { WalletService } from './services/wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jo-ken-po-game';
  hasMetamaskInstalled : boolean;

  constructor(private walletService : WalletService) {
    this.hasMetamaskInstalled = false;
  }

  async ngOnInit() {
    console.log("foi")
    this.doesUserHaveWalletProvider().then(
      (thereIsWalletResult) => {
        this.hasMetamaskInstalled = thereIsWalletResult;
      }
    );
  }

  public async doesUserHaveWalletProvider() : Promise<boolean> {
    let nada = await this.walletService.detectEthProvider();
    return nada != null ? true : false;
  }
}
