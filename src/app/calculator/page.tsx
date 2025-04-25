import type { Metadata } from 'next'
import CleaningCalculator from '@/components/calculator/Calculator'

export const metadata: Metadata = {
  title: 'Clean well | Калькулятор уборки, предварительный расчет',
  description: 'Калькулятор уборки, предварительный расчет',
}

export default function Page() {
  return <CleaningCalculator />
}
