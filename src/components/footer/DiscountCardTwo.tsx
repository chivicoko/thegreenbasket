import Image from 'next/image';
import { BrightnessLowOutlined } from '@mui/icons-material';
import { discountCard2 } from '@/utils/data';

const DiscountCardTwo: React.FC = () => {
    
  return (
    <section className='py-3 md:py-5 mt-16 px-2 md:px-6'>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-12">
        {
          discountCard2.map(card => {
            return(
              <div key={card.id} className={`rounded-xl h-96 transform transition-transform duration-300 hover:-rotate-3 shadow-md hover:shadow-2xl pt-0 flex-1 flex flex-col gap-4 justify-center items-center bg-[#fee2e2] ${card.bgColor1}`}>
                
                <div className='h-2/5 pl-6 pr-3 pt-4 w-full'>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <span className={`font-bold ${card.color1}`}>{card.text1}</span>
                      <span className={`font-bold text-3xl md:text-5xl ${card.color2}`}><sup className='text-xl md:text-2xl'>{card.text2extra}</sup>{card.text2}</span>
                    </div>
                    <span className='self-start'>
                      <BrightnessLowOutlined/>
                    </span>
                  </div>
                  
                  <p className='text-start py-3 text-primary'>{card.text3}</p>
                </div>

                <div
                  className="bennetCurve2 h-3/5 relative w-full rounded-b-xl p-4 flex-1 flex items-center justify-center bg-cover bg-center"
                  style={{ backgroundImage: `url('/images/bg-2.jpg')` }}
                >
                  <div className={`${card.bgColor2} absolute inset-0 bg-opacity-80 rounded-xl`}></div>
                  <div className="relative w-36 h-36 mb-4 self-center rounded-full">
                    <Image
                      src={card.img}
                      alt={`${card.text1} preview`}
                      fill
                      className="object-cover rounded-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default DiscountCardTwo;