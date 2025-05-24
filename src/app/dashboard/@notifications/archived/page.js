import Card from '@/app/components/Card';
import Link from 'next/link'
import React from 'react'

const ArchivedNotifications = () => {
  return (<div>
		<Card title="🔔 Notifications" color="bg-purple-600" >
			<h1>Archived</h1>
			<Link href="/dashboard" className='bg-blue-600'>Go Back</Link>
		</Card>
		
	</div>);
}

export default ArchivedNotifications