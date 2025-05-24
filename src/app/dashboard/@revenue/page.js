import Card from '../../components/Card'

export default function RevenuePage() {
  return (
    <Card title="💰 Revenue" color="bg-green-500">
      <div className="text-center">
        <div className="text-3xl font-bold text-green-600 mb-2">$24,500</div>
        <p className="text-gray-600 text-sm">This Month</p>
        <div className="mt-4 flex justify-between text-sm">
          <span>Last Month: $22,300</span>
          <span className="text-green-600">+9.9%</span>
        </div>
      </div>
    </Card>
  )
}