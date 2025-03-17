import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакты',
  description: '',
}

export default function Page() {
  return (
    <div className='grow lg:max-w-7xl mx-auto px-4'>
      <h1 className='text-3xl font-bold'>Contacts</h1>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At consequuntur nemo quidem quia. Vel omnis repellendus consequuntur
        pariatur nihil eius, vitae dicta, placeat error exercitationem voluptas sequi laborum delectus facilis quod fugiat nemo odio quae
        laboriosam veritatis! Blanditiis ut, veritatis quidem neque quasi perferendis alias! Molestias quam porro atque minima ut molestiae
      </div>
    </div>
  )
}
