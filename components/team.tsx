import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function Team() {
  let items = []
  for (let i = 0; i < 1000; i++) {
    items.push(<Person key={i} index={i} />)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team</CardTitle>
        <CardDescription>Our Team</CardDescription>
      </CardHeader>
      <CardContent className='h-72 space-y-2'>
        <div className='h-full overflow-scroll rounded-lg bg-rose-100 p-4'>
          <ul className='list-inside list-disc'>{items}</ul>
        </div>
      </CardContent>
      <CardFooter className='border-t pt-6'>
        <p className='text-sm italic text-gray-400'>Team Section Footer</p>
      </CardFooter>
    </Card>
  )
}

function Person({ index }: { index: number }) {
  let startTime = performance.now()
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className='text-sm text-rose-600'>Person {index + 1}</li>
}

function sleep(ms: number) {
  let startTime = performance.now()
  while (performance.now() - startTime < ms) {
    // Do nothing for `ms` milliseconds
  }
}
