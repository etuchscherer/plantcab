declare module "UselessBayTypes" {
  export interface toggledResponse {
    isEnergized: boolean,
    isEnabled: boolean,
    timestamp: number,
    name: string
  }

  export interface equipmentState {
    toggled: {
      light: boolean,
      pump: boolean,
      fan: boolean,
      aux: boolean
    }
  }
}
