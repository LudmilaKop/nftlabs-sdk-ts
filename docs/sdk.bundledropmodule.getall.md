<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [BundleDropModule](./sdk.bundledropmodule.md) &gt; [getAll](./sdk.bundledropmodule.getall.md)

## BundleDropModule.getAll() method

Get NFT Data

<b>Signature:</b>

```typescript
getAll(): Promise<BundleDropMetadata[]>;
```
<b>Returns:</b>

Promise&lt;[BundleDropMetadata](./sdk.bundledropmetadata.md)<!-- -->\[\]&gt;

The NFT metadata for all NFTs in the module.

## Remarks

Get data associated with NFTs in this module.

## Example


```javascript
// Get data associated with every NFT in the module
const nfts = await module.getAll();
console.log(nfts);
```
