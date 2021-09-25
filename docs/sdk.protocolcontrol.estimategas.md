<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@nftlabs/sdk](./sdk.md) &gt; [ProtocolControl](./sdk.protocolcontrol.md) &gt; [estimateGas](./sdk.protocolcontrol.estimategas.md)

## ProtocolControl.estimateGas property

<b>Signature:</b>

```typescript
estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_PROVIDER_FEE_BPS(overrides?: CallOverrides): Promise<BigNumber>;

    PROTOCOL_ADMIN(overrides?: CallOverrides): Promise<BigNumber>;

    PROTOCOL_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    _contractURI(overrides?: CallOverrides): Promise<BigNumber>;

    addModule(
      _newModuleAddress: string,
      _moduleType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    contractURI(overrides?: CallOverrides): Promise<BigNumber>;

    getAllModulesOfType(
      _moduleType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    moduleType(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    modules(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    numOfModuleType(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerTreasury(overrides?: CallOverrides): Promise<BigNumber>;

    pauseProtocol(
      _toPause: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    providerFeeBps(overrides?: CallOverrides): Promise<BigNumber>;

    providerTreasury(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setContractURI(
      _URI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    systemPaused(overrides?: CallOverrides): Promise<BigNumber>;

    transferProtocolFunds(
      _asset: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateModule(
      _moduleId: BytesLike,
      _newModuleAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateOwnerTreasury(
      _newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateProviderFeeBps(
      _newFeeBps: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateProviderTreasury(
      _newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };
```