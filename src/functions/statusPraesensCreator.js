import { heartRateCounter } from "./heartRateCounter";
import { respiratoryRateCounter } from "./respiratoryRateCounter";

export const statusPraesensCreator = (condition, age) => {
  return `загальний стан дитини ${condition}. Свідомість ясна. Поведінка адекватна. Положення активне. Живлення звичайне. Шкірні покриви чисті. Шкіра помірної вологості. Щитоподібна залоза не збільшена. Серце: межі відносної та абсолютної тупості відповідають нормі. ЧСС=${heartRateCounter(
    age
  )}/хв. Над легенями перкуторно ясний легеневий звук. Везикулярне дихання. ЧДР=${respiratoryRateCounter(
    age
  )}/хв. Живіт при пальпації м’який, безболісний. Печінка не збільшена. Нирки та селезінка не пальпуються. Випорожнення оформлені, без патологічних домішок, раз на день. Сечопуск вільний, регулярний, безболісний.`;
};