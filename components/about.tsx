import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function About() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About</CardTitle>
        <CardDescription>About our company.</CardDescription>
      </CardHeader>
      <CardContent className='h-72 space-y-2'>
        <div className='h-full rounded-lg bg-gray-100 p-4'></div>
      </CardContent>
      <CardFooter className='border-t pt-6'>
        <p className='text-sm italic text-gray-400'>About Section Footer</p>
      </CardFooter>
    </Card>
  )
}
