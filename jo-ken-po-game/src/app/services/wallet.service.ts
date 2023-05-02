import { Injectable } from '@angular/core';
import detectEthereumProvider from '@metamask/detect-provider';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  
    detectEthProvider =  async () => await detectEthereumProvider({timeout: 10000}).then(
    (provider) => {
      return provider;
    }
  ).catch(
    () => console.log("ops")
  );

  constructor() {
  }
}
