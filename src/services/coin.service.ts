import { Coins, Coin } from '../models/coin.model';

export interface ICoinService {
    getClosestCoin(cents: number): Promise<[Coin]>;
}

export class CoinService implements ICoinService {
    getClosestCoin(cents: number): Promise<[Coin]> {
        var closestCoin;

        for(var i = 0; i < Coins.length; i++) {
            var currentCoin = Coins[i];
        
            if(!closestCoin) {
                closestCoin = currentCoin;
                continue;
            }

            if(Math.abs(cents - currentCoin.denomination) < Math.abs(cents - closestCoin.denomination)) {
                closestCoin = currentCoin;
            }
        }

        return closestCoin;
    }
    
}