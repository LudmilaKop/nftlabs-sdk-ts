import { ContractMetadata, getContractMetadata } from "../common/contract";
import { Module } from "../core/module";
import { ProtocolControl, ProtocolControl__factory } from "../types";

// this used to be public but does not have to be (as in it used to be exported)
enum ModuleType {
  Coin = 0,
  NFTCollection = 1,
  NFT = 2,
  DynamicNFT = 3,
  AccessNFT = 4,
  Pack = 5,
  Market = 6,
  Other = 7,
}

// this used to be public but does not have to be (as in it used to be exported)
interface ControlContract {
  address: string;
  metadata?: ContractMetadata;
}

/**
 * The AppModule. This should always be created via `getAppModule()` on the main SDK.
 * @public
 */
export class AppModule extends Module {
  private __contract: ProtocolControl | null = null;
  private get contract(): ProtocolControl {
    return this.__contract || this.connectContract();
  }
  private set contract(value: ProtocolControl) {
    this.__contract = value;
  }

  protected connectContract(): ProtocolControl {
    return (this.contract = ProtocolControl__factory.connect(
      this.address,
      this.providerOrSigner,
    ));
  }

  private async getModuleAddress(moduleType: ModuleType): Promise<string[]> {
    return await this.contract.getAllModulesOfType(moduleType);
  }

  public async getAllContractMetadata(
    addresses: string[],
  ): Promise<ControlContract[]> {
    const metadatas = await Promise.all(
      addresses.map((address) =>
        getContractMetadata(
          this.providerOrSigner,
          address,
          this.ipfsGatewayUrl,
        ).catch(() => undefined),
      ),
    );
    return addresses
      .filter((d) => d)
      .map((address, i) => {
        return {
          address,
          metadata: metadatas[i],
        };
      });
  }

  // these used to be public but there really is no reason they need to be
  private async getPackAddress(): Promise<string[]> {
    return this.getModuleAddress(ModuleType.Pack);
  }

  private async getNFTAddress(): Promise<string[]> {
    return this.getModuleAddress(ModuleType.NFT);
  }

  private async getCollectionAddress(): Promise<string[]> {
    return this.getModuleAddress(ModuleType.NFTCollection);
  }

  private async getCurrencyAddress(): Promise<string[]> {
    return this.getModuleAddress(ModuleType.Coin);
  }

  private async getMarketAddress(): Promise<string[]> {
    return this.getModuleAddress(ModuleType.Market);
  }

  /**
   * Method to get all pack modules.
   * @returns A promise of an array of Pack modules.
   */
  public async getPackModules(): Promise<ControlContract[]> {
    return await this.getAllContractMetadata(await this.getPackAddress());
  }

  /**
   * Method to get all NFT modules.
   * @returns A promise of an array of NFT modules.
   */
  public async getNFTModules(): Promise<ControlContract[]> {
    return await this.getAllContractMetadata(await this.getNFTAddress());
  }

  /**
   * Method to get all Collection modules.
   * @returns A promise of an array of Collection modules.
   */
  public async getCollectionModules(): Promise<ControlContract[]> {
    return await this.getAllContractMetadata(await this.getCollectionAddress());
  }

  /**
   * Method to get all Currency modules.
   * @returns A promise of an array of Currency modules.
   */
  public async getCurrencyModules(): Promise<ControlContract[]> {
    return await this.getAllContractMetadata(await this.getCurrencyAddress());
  }

  /**
   * Method to get all Market modules.
   * @returns A promise of an array of Market modules.
   */
  public async getMarketModules(): Promise<ControlContract[]> {
    return await this.getAllContractMetadata(await this.getMarketAddress());
  }
}
