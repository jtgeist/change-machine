import { CoinService } from '../services/coin.service'

const resolver = {
    Query: {        
        getClosestCoin: (_roots, args) => {
            const service = new CoinService();
            return service.getClosestCoin(args.cents)
        }
    }
};

export default resolver;