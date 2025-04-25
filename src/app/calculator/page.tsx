import type { Metadata } from 'next'
import CleaningCalculator from '@/components/calculator/Calculator'

export const metadata: Metadata = {
  title: 'Clean well | Калькулятор уборки, предварительный просчет',
  description: 'Калькулятор уборки, предварительный просчет',
}

export default function Page() {
  return <CleaningCalculator />
}
