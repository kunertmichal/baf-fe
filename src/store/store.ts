import { create } from 'zustand'
import type { PlotType } from '@/constants/plotTypes'

const usePlotData = create(set => ({
  type: null,
  area: null,
  setType: (type: PlotType) => set({ type }),
  setArea: (area: number) => set({ area })
}))
