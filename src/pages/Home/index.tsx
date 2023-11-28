import * as S from './styles'
import TruckLeft from "../../assets/pq-usar.jpg"
import TruckRight from "../../assets/entregas-rapidas-o-que-e.webp"

export function Home() {
  return (
    <S.Section>
      <img src={TruckLeft} alt="entregador na esq" />
      <img src={TruckRight} alt="Caminhão rapido na dir" />
      
    </S.Section>
    
  )
}
