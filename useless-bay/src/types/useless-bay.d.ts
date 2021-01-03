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

  export interface internalTemperature {
    maxAllowed: number,
    minAllowed: number,
    current: number,
    units: string
  }

  export interface equipmentState {
    internalTemperature: internalTemperature,
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
