import type { Metadata } from 'next'
import CleaningCalculator from '@/components/calculator/Calculator'

export const metadata: Metadata = {
  title: 'Clean well | Калькулятор уборки, предворительный просчет',
  description: 'Калькулятор уборки, предворительный просчет',
}

export default function Page() {
  return <CleaningCalculator />
}
