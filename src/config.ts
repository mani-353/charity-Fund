import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Charity fund",
    chainId: "galileo-4",
    createdDate: "2025-02-28T08:09:10.521Z",
    modifiedDate: "2025-02-28T08:09:10.521Z",
    id: "andromeda",
    collections: [
        {
            crowdfund:
                "andr15rl5ewpkltzmde9382w9t7y5wve46rmpg3jxcppqszu7sdju8vgsm3ac8k",
            cw721: "andr1nansv6f23n3emrp3f0y4famt9qazn603823qrfhyfdt738nlqmxs2rm0s8",
            name: "Charity Fund",
            type: ICollectionType.CROWDFUND,
            id: "embeddables-crowdfund-1",
        },
        {
            exchange:
                "andr1ynpcwms06mpxeehczlpu0ts7v6syeurdmthsns3q00m5kx3yc49qqtfp6v",
            cw20: "andr1nansv6f23n3emrp3f0y4famt9qazn603823qrfhyfdt738nlqmxs2rm0s8",
            name: "UANDR TO MKC",
            type: ICollectionType.EXCHANGE,
            id: "exchange",
        },
    ],
};

export default CONFIG;
