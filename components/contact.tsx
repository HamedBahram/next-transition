import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function Contact() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact</CardTitle>
        <CardDescription>Contact us here.</CardDescription>
      </CardHeader>
      <CardContent className='h-72 space-y-2'>
        <div className='h-full rounded-lg bg-emerald-100 p-4'></div>
      </CardContent>
      <CardFooter className='border-t pt-6'>
        <p className='text-sm italic text-gray-400'>Contact Section Footer</p>
      </CardFooter>
    </Card>
  )
}
