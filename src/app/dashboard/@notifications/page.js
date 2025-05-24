import Card from '../../components/Card'

export default function NotificationsPage() {
  const notifications = [
    { id: 1, message: 'New user registered', time: '2 mins ago', type: 'info' },
    { id: 2, message: 'Payment received', time: '1 hour ago', type: 'success' },
    { id: 3, message: 'Server maintenance scheduled', time: '3 hours ago', type: 'warning' },
  ]
  
  return (
    <Card title="🔔 Notifications" color="bg-purple-500">
      <div className="space-y-3">
        {notifications.map(notification => (
          <div key={notification.id} className="p-3 border-l-4 border-l-purple-500 bg-gray-50 rounded">
            <p className="text-sm">{notification.message}</p>
            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
          </div>
        ))}
        <button className="w-full mt-4 text-purple-600 hover:bg-purple-50 py-2 rounded transition">
          View All Notifications
        </button>
      </div>
    </Card>
  )
}