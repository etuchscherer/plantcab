declare module "UselessBayTypes" {
  export interface toggledResponse {
    isEnergized: boolean,
    isEnabled: boolean,
    timestamp: number,
    name: string
  }

  export interface equipmentWarningInterface {
    isActive: boolean,
    description: string[]
  }

  export interface equipmentState {
    toggled: {
      light: boolean,
      pump: boolean,
      fan: boolean,
      aux: boolean
    },
    warning: {
      light: equipmentWarningInterface
      pump: equipmentWarningInterface
      fan: equipmentWarningInterface
      aux: equipmentWarningInterface
    }
  }
}
