<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@nftlabs/sdk](./sdk.md) &gt; [Registry](./sdk.registry.md) &gt; [callStatic](./sdk.registry.callstatic.md)

## Registry.callStatic property

<b>Signature:</b>

```typescript
callStatic: {
    controlCenters(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    deployProtocol(
      _protocolControlURI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    forwarder(overrides?: CallOverrides): Promise<string>;

    getLatestVersion(
      _protocolDeployer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProtocolControl(
      _protocolDeployer: string,
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    nftlabsAdminSigner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setNftlabsAdmin(
      _newAdminSigner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };
```