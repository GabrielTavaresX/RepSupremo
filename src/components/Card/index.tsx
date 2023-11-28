import * as S from "./styles";
export interface ICard {
  data: string
  entregas: string
  recebimentos: string
}
export const Card = ({ data, entregas, recebimentos }: ICard) => {
  return (
    <S.Aside>
      <h3>
        data:  {data}
      </h3>
      <h4>Numero de entregas feitas no dia: {entregas}</h4>
      <p>Numero de entregas que chegaram a central: {recebimentos}</p>
    </S.Aside>
  );
};
