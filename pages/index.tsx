import Image from 'next/image'
import { Inter } from 'next/font/google'
import PricingCard from '../components/PricingCard'

const inter = Inter({ subsets: ['latin'] })

const plans = [
  {
    name: 'Basic',
    price: '$10/month',
    features: ['1 GB Storage', '10 GB Bandwidth', '24/7 Support']
  },
  {
    name: 'Pro',
    price: '$20/month',
    features: ['10 GB Storage', '100 GB Bandwidth', '24/7 Support']
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    features: ['Unlimited Storage', 'Unlimited Bandwidth', '24/7 Support']
  }
]

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold mb-10">Our Plans</h1>
      <div className="flex flex-wrap justify-center">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </main>
  )
}