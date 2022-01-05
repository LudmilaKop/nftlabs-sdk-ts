<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [NFTModule](./sdk.nftmodule.md) &gt; [generateSignatureBatch](./sdk.nftmodule.generatesignaturebatch.md)

## NFTModule.generateSignatureBatch() method

<b>Signature:</b>

```typescript
generateSignatureBatch(mintRequests: NewSignaturePayload[]): Promise<{
        payload: SignaturePayload;
        signature: string;
    }[]>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  mintRequests | [NewSignaturePayload](./sdk.newsignaturepayload.md)<!-- -->\[\] |  |

<b>Returns:</b>

Promise&lt;{ payload: [SignaturePayload](./sdk.signaturepayload.md)<!-- -->; signature: string; }\[\]&gt;
